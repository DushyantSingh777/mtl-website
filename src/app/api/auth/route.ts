import { NextRequest, NextResponse } from "next/server";

const USER_PASSWORD = "TronLabsForm123@";
const ADMIN_PASSWORD = "AdminTronLabs123@";

const ADMIN_EMAILS = [
  "priyank@mytronlabs.com",
  "aditya@mytronlabs.com",
  "founders@mytronlabs.com",
];

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    // Must be a @mytronlabs.com email
    if (!email.toLowerCase().endsWith("@mytronlabs.com")) {
      return NextResponse.json({ error: "Only @mytronlabs.com emails are allowed" }, { status: 401 });
    }

    const emailLower = email.toLowerCase();
    const isAdmin = ADMIN_EMAILS.includes(emailLower);

    // Admins use admin password, users use user password
    const expectedPassword = isAdmin ? ADMIN_PASSWORD : USER_PASSWORD;
    if (password !== expectedPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Extract name from email (e.g. "john.doe@mytronlabs.com" → "John Doe")
    const localPart = email.split("@")[0];
    const name = localPart
      .split(".")
      .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");

    const role = isAdmin ? "admin" : "user";
    const token = Buffer.from(`${emailLower}:${Date.now()}`).toString("base64");

    return NextResponse.json({
      success: true,
      token,
      user: { email: emailLower, name, role },
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
