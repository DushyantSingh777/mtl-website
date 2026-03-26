import { NextRequest, NextResponse } from "next/server";

const GLOBAL_PASSWORD = "TronLabsForm123@";

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

    // Check global password
    if (password !== GLOBAL_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Extract name from email (e.g. "john.doe@mytronlabs.com" → "John Doe")
    const localPart = email.split("@")[0];
    const name = localPart
      .split(".")
      .map((part: string) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");

    const token = Buffer.from(`${email.toLowerCase()}:${Date.now()}`).toString("base64");

    return NextResponse.json({
      success: true,
      token,
      user: { email: email.toLowerCase(), name },
    });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
