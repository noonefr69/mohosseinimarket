import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="py-52 rounded-2xl mask-b-from-95% mask-l-from-95% mask-r-from-95% mask-t-from-95% bg-card">
      <div className="max-w-xl flex p-4 flex-col items-center mx-auto">
        <Button
          asChild
          variant={"link"}
          className="mb-1 md:hover:ring-3 z-10 md:opacity-70 hover:opacity-100 ring-1"
        >
          <Link className="text-xs md:text-base" href={`/sign-in`}>
            اولین خریدتان را مهمان ما باشید. <span>ثبت نام &#8592;</span>
          </Link>
        </Button>
        <h1 className="md:text-7xl text-5xl mb-4 font-bold text-center leading-14 md:leading-24">
          خرید سریع، با کیفیت و راحت
        </h1>
        <p className="text-muted-foreground mb-6 text-center text-sm md:text-base">
          تازه‌ترین مواد غذایی و کالاهای روزمره با بهترین قیمت — تحویل درب منزل
          در سراسر تبریز
        </p>
        <div className="flex items-center gap-2">
          <Button className="md:text-lg md:h-11" asChild>
            <Link href={`/market`}>ورود به فروشگاه</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className="md:text-lg md:h-11 hover:bg-accent/70"
          >
            <Link href={`/market`}>اطلاعات بیشتر &#8592;</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
