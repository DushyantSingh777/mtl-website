import { Storage } from "@google-cloud/storage";
import { NextRequest, NextResponse } from "next/server";

const storage = new Storage({
  projectId: process.env.GCS_PROJECT_ID,
  credentials: {
    client_email: process.env.GCS_CLIENT_EMAIL,
    private_key: process.env.GCS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
});

const BUCKET = process.env.GCS_BUCKET_NAME!;
const EXPIRES_MINUTES = 15;

export async function POST(req: NextRequest) {
  try {
    const { filename, contentType, email } = await req.json();

    if (!filename || !contentType) {
      return NextResponse.json({ error: "filename and contentType required" }, { status: 400 });
    }

    // Sanitize and build path: uploads/<email>/<timestamp>_<filename>
    const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
    const safeEmail = (email ?? "unknown").replace(/[^a-zA-Z0-9@._-]/g, "_");
    const key = `uploads/${safeEmail}/${Date.now()}_${safe}`;

    const [url] = await storage
      .bucket(BUCKET)
      .file(key)
      .getSignedUrl({
        version: "v4",
        action: "write",
        expires: Date.now() + EXPIRES_MINUTES * 60 * 1000,
        contentType,
      });

    return NextResponse.json({ url, key });
  } catch (err) {
    console.error("[upload-url] error:", err);
    return NextResponse.json({ error: "Failed to generate upload URL" }, { status: 500 });
  }
}
