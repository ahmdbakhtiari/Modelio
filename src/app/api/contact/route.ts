import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "Website Contact <noreply@ahmadbakhtiyari.ir>",
      to: "info@ahmadbakhtiyari.ir",
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || "-"}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `,
    });

    console.log("Resend result:", result);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    console.error("🔥 CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
