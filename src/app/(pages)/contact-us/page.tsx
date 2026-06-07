import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toPersianDigits } from "@/lib/to-persian-digits";
import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import { ContactUsForm } from "./form";

export const contact_us_details = [
  {
    label: "آدرس",
    values: ["تبریز, چهاراه آبرسان, رو به روی مدرسه پناهی"],
  },
  {
    label: "شماره تلفن",
    values: [toPersianDigits("041 33343989"), toPersianDigits("0914 407 4099")],
  },
  {
    label: "ایمیل",
    values: ["info@company.com", "sales@company.com"],
  },
];

export default function ContactUs() {
  return (
    <div>
      <div className="gap-6 mt-4">
        <div className="text-right">
          <Button
            disabled
            className="disabled:opacity-100 bg-primary/10 text-primary font-semibold py-4 px-7 rounded-full"
            variant={"default"}
            size={"sm"}
          >
            <SparkleIcon className="ml-1" />
            همیشه در دسترس شما
          </Button>
          <h1 className="my-5 text-5xl font-bold">تماس با ما</h1>
          <p className=" text-muted-foreground ">
            {" "}
            هر سوال، پیشنهاد یا انتقادی دارید؟ خوشحال می‌شویم بشنویم. معمولاً
            ظرف همان روز پاسخ می‌دهیم.{" "}
          </p>
        </div>
      </div>

      <Separator className="my-7" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ContactUsForm />
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold">موقعیت مکانی سوپرمارکت</h1>
          <div className="bg-accent w-full h-80 mt-7"></div>
          <ul className="mt-7 justify-center text-center sm:text-right sm:justify-start grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {contact_us_details.map((item, i) => (
              <li key={i}>
                <h1 className="text-xl font-semibold">{item.label}</h1>
                <div>
                  {item.values.map((value, i) => (
                    <div className="text-lg text-muted-foreground" dir="ltr" key={i}>
                      {value}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
