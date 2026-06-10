import { MapPinIcon, PhoneCallIcon } from "lucide-react";
import { toPersianDigits } from "@/utils/to-persian-digits";

export default function AddressPhone() {
  return (
    <div className="flex items-center gap-4 shrink-0">
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 border flex items-center justify-center rounded-full">
          <MapPinIcon className="size-6" />
        </div>
        <div>
          <h1 className="font-semibold text-sm">آدرس: </h1>
          <span className="text-sm">
            تبریز, چهاراه آبرسان, رو به روی مدرسه پناهی
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 border flex items-center justify-center rounded-full">
          <PhoneCallIcon className="size-6" />
        </div>
        <div>
          <h1 className="font-semibold text-sm">تلفن: </h1>
          <span dir="ltr" className="text-sm">
            {toPersianDigits("041 33343989")}
          </span>
        </div>
      </div>
    </div>
  );
}
