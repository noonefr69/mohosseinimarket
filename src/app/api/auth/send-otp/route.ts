import dbConnect from "@/lib/db";
import { Otp } from "@/models/otp";
import { NextResponse } from "next/server";

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone || !/^09\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "شماره موبایل نامعتبر است" },
        { status: 400 },
      );
    }

    await dbConnect();

    const code = generateOtp();
    const expiresAt = new Date(Date.now() + 2 * 60 * 1000); // 2min

    await Otp.deleteMany({ phone, verified: false });

    await Otp.create({
      phone,
      code,
      expiresAt,
    });

    const mobile = "98" + phone.slice(1);

    const smsRes = await fetch("https://api.sms.ir/v1/send/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain",
        "x-api-key": process.env.SMS_KEY!, // your sandbox key from .env.local
      },
      body: JSON.stringify({
        mobile,
        templateId: 123456, // sandbox default template ID
        parameters: [
          {
            name: "Code", // exactly "Code" (capital C), as per docs
            value: code,
          },
        ],
      }),
    });

    if (!smsRes.ok) {
      console.error("SMS failed:", await smsRes.text());
      return NextResponse.json(
        { error: "ارسال پیامک با خطا مواجه شد" },
        { status: 500 },
      );
    }
    // --- End SMS ---

    // Success: OTP sent (simulated in sandbox)
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
