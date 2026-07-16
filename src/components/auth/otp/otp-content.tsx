import { toPersianDigits } from "@/utils/to-persian-digits";
import { OtpForm } from "./otp-form";

export default function OtpContent({phone}: {phone: string}) {
  return (
    <>
      <h1 className="font-semibold mt-14 text-2xl">
        کد فرستاده شده را وارد نمایید.
      </h1>
      <p className="text-muted-foreground my-4">
        کد تایید به شماره
        <span className="font-semibold mx-2 text-base text-primary">
          {toPersianDigits(Number(phone))}
        </span>
        ارسال شد.
      </p>
      <OtpForm phone={phone} />
    </>
  );
}
