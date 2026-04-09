import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate required fields
    const required = ["name", "email", "weddingDate", "venue", "serviceType"];
    for (const field of required) {
      if (!data[field] || data[field].trim() === "") {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the submission (visible in server logs)
    console.log("=== NEW WEDDING CHILDCARE INQUIRY ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("=====================================");

    // TODO: Integrate email sending service (Resend, SendGrid, Nodemailer, etc.)
    // Example with Resend:
    //
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: 'Vow & Play <noreply@vowandplay.com>',
    //   to: 'hello@vowandplay.com',
    //   subject: `New Inquiry: ${data.name} - ${data.weddingDate}`,
    //   html: formatEmailHtml(data),
    // });

    // TODO: Optional auto-reply to the submitter
    // await resend.emails.send({
    //   from: 'Vow & Play <noreply@vowandplay.com>',
    //   to: data.email,
    //   subject: 'We got your inquiry! - Vow & Play',
    //   html: autoReplyHtml(data.name),
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
