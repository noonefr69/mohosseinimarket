"use server";

import dbConnect from "@/lib/db";
import { ContactUs } from "@/models/contact-us";

export async function contactUsAction(data: FormValues) {
  try {
    await dbConnect();
    await ContactUs.create(data);
    return { success: true, message: "پیام شما ارسال شد." };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      message: `خطایی رخ داده است. لطفا بعدا دوباره تلاش کنید.`,
    };
  }
}
