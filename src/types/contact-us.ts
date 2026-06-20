import * as z from "zod";
import { toPersianDigits } from "@/utils/to-persian-digits";

export const contactUsSchema = z.object({
  userName: z
    .string()
    .min(2, `اسم شما حداقل باید از ${toPersianDigits(2)} حروف تشکیل شده باشد.`)
    .max(
      32,
      `اسم شما حداکثر باید از ${toPersianDigits(32)} حروف تشکیل شده باشد.`,
    ),
  userPhoneNumber: z
    .string()
    .startsWith("09", "شماره تلفن نامعتبر است.")
    .length(11, "شماره تلفن نامعتبر است."),
  userSubject: z
    .string()
    .min(
      2,
      `موضوع شما حداقل باید از ${toPersianDigits(2)} حروف تشکیل شده باشد.`,
    )
    .max(
      32,
      `موضوع شما حداکثر باید از ${toPersianDigits(32)} حروف تشکیل شده باشد.`,
    ),
  userDescription: z
    .string()
    .min(
      10,
      `توضیحات شما حداقل باید از ${toPersianDigits(10)} حروف تشکیل شده باشد.`,
    )
    .max(
      200,
      `توضیحات شما نمیتواند بیشتر از ${toPersianDigits(200)} حروف باشد.`,
    ),
});

export type ContactUsFormValues = z.infer<typeof contactUsSchema>;
