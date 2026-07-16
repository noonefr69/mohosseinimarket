import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Info() {
  return (
    <div className="mt-7">
      <div className="gap-6 grid-cols-1 grid lg:grid-cols-9 items-center">
        <div className="lg:col-span-4 col-span-1">
          <h1 className="text-4xl text-center lg:text-right font-bold leading-12">
            سوپرمارکت مبلغ حسینی با بیش از 25 سال سابقه کار در خدمت شماست
          </h1>
          <p className="text-muted-foreground my-7 text-center lg:text-justify">
            ما در سوپرمارکت مبلغ حسینی با تکیه بر تجربه‌ای ۲۵ ساله، همواره تلاش
            کرده‌ایم بهترین و تازه‌ترین محصولات را با مناسب‌ترین قیمت‌ها در
            اختیار شما قرار دهیم. صداقت، کیفیت و رضایت مشتریان، پایه‌های اصلی
            کار ما هستند.
          </p>
          <div className="text-center lg:text-right">
            <Button asChild variant={"default"} size={"lg"}>
              <Link href={`/about-us`}>اطلاعات بیشتر</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-1 flex items-center gap-6">
          <Image
            className="rounded-2xl w-full"
            src={`/home-mask-image.webp`}
            alt="dashaq"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
