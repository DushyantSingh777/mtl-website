import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Use /tmp on Vercel (writable), fallback to data/ for local dev
const isVercel = process.env.VERCEL === "1";
const SUBMISSIONS_PATH = isVercel
  ? path.join("/tmp", "submissions.json")
  : path.join(process.cwd(), "data", "submissions.json");

function ensureDir() {
  const dir = path.dirname(SUBMISSIONS_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function getSubmissions() {
  try {
    ensureDir();
    if (!fs.existsSync(SUBMISSIONS_PATH)) return [];
    const data = fs.readFileSync(SUBMISSIONS_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function saveSubmissions(submissions: unknown[]) {
  ensureDir();
  fs.writeFileSync(SUBMISSIONS_PATH, JSON.stringify(submissions, null, 2));
}

// POST — submit a new form entry
export async function POST(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Decode token to get email
    let email: string;
    try {
      const decoded = Buffer.from(token, "base64").toString("utf-8");
      email = decoded.split(":")[0];
    } catch {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const body = await req.json();
    const { deviceId, personName, supervisorName, locationDescription, task, comments } = body;

    if (!deviceId || !personName || !supervisorName || !locationDescription || !task) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const submission = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      deviceId,
      personName,
      supervisorName,
      locationDescription,
      task,
      comments: comments || "",
      submittedBy: email,
      submittedAt: new Date().toISOString(),
    };

    const submissions = getSubmissions();
    submissions.push(submission);
    saveSubmissions(submissions);

    return NextResponse.json({ success: true, submission });
  } catch (err) {
    console.error("Submission error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET — retrieve all submissions (for admin view)
export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = getSubmissions();
  return NextResponse.json({ submissions });
}

// DELETE — remove a submission by id (admin only)
export async function DELETE(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Submission ID required" }, { status: 400 });
    }

    const submissions = getSubmissions();
    const filtered = submissions.filter((s: { id: string }) => s.id !== id);

    if (filtered.length === submissions.length) {
      return NextResponse.json({ error: "Submission not found" }, { status: 404 });
    }

    saveSubmissions(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
