import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Otp } from "@/models/otp";

export async function POST(req: Request) {
  try {
    const { phone, code } = await req.json();

    if (!phone || !code) {
      return NextResponse.json(
        { error: "شماره و کد الزامی است" },
        { status: 400 },
      );
    }

    await dbConnect();

    // Find the latest unverified OTP for this phone
    const otpRecord = await Otp.findOne({ phone, verified: false }).sort({
      createdAt: -1,
    });

    if (!otpRecord) {
      return NextResponse.json(
        { error: "کد تایید یافت نشد یا قبلاً استفاده شده" },
        { status: 400 },
      );
    }

    // Check expiry
    if (new Date() > otpRecord.expiresAt) {
      return NextResponse.json(
        { error: "کد تایید منقضی شده است" },
        { status: 400 },
      );
    }

    // Compare code (trim just in case)
    if (otpRecord.code.trim() !== code.trim()) {
      return NextResponse.json(
        { error: "کد تایید اشتباه است" },
        { status: 400 },
      );
    }

    // Mark as verified
    otpRecord.verified = true;
    await otpRecord.save();

    // Optionally create user if not exists (or we'll do it in NextAuth authorize)
    // For now, just return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("verify-otp error:", error);
    return NextResponse.json({ error: "خطای سرور" }, { status: 500 });
  }
}
