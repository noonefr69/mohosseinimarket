import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toPersianDigits } from "@/lib/to-persian-digits";
import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import datas from "@/db.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ButtonLink from "@/components/button-link";

export const about_us_const = [
  { title: " سال سابقه کاری", number: `+${toPersianDigits(25)}` },
  {
    title: " محصولات موجود در فروشگاه",
    number: `+${toPersianDigits(500)}`,
  },
  { title: "مشتری راضی", number: `+${toPersianDigits("10,000")}` },
];

export const faqs = [
  {
    question:
      "برای ثبت سفارش از سوپرمارکت آنلاین شما چه مراحلی را باید طی کنم؟",
    answer:
      "کافیست وارد سایت ما شوید، محصولات مورد نیاز را به سبد خرید اضافه کنید، آدرس را انتخاب کرده و سپس پرداخت را انجام دهید.",
  },
  {
    question: "روش‌های پرداخت چیست؟",
    answer: "بصوزت انلاین و امن از طریق زرین پال انجام میشود.",
  },
  {
    question: "محدوده ارسال شما کدام مناطق است؟",
    answer: " در حال حاضر تمام مناطق شهر تبریز تحت پوشش هستند. ",
  },
  {
    question: "نحوه ارتباط با پشتیبانی چگونه است؟",
    answer: `
      از طریق چت آنلاین داخل اپلیکیشن های بله و تلگرام و ایتا (ساعت ۰۸:۰۰ صبح تا ۱۰:۰۰ شب)، شماره تلفن ${toPersianDigits("04133343989")}  یا ایمیل support@example.com.
    `,
  },
  {
    question: "آیا اطلاعات کارت بانکی من نزد شما ذخیره می‌شود؟ ",
    answer:
      "خیر، پرداخت از طریق درگاه بانکی معتبر انجام می‌شود و ما هیچ دسترسی به اطلاعات محرمانه کارت شما نداریم.",
  },
];

export default function AboutUs() {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Button
            disabled
            className="disabled:opacity-100 bg-primary/10 text-primary font-semibold py-4 px-7 rounded-full"
            variant={"default"}
            size={"sm"}
          >
            <SparkleIcon className="ml-1" />
            از سال {toPersianDigits(1380)}
          </Button>
          <h1 className="my-10 lg:max-w-4/5 text-4xl md:text-5xl font-semibold">
            سوپرمارکت محله شما
          </h1>
          <p className="text-muted-foreground lg:max-w-4/5 text-justify">
            ما بیش از ۲۵ سال است که مایحتاج ضروری روزمره خانواده‌ها - از نان
            تازه و چیپس گرفته تا بهداشتی و مایحتاج ضروری خانه - را تأمین
            می‌کنیم.
          </p>
        </div>
        <div className="relative bg-accent rounded-2xl h-80 md:h-auto">
          <Image src={`/`} alt="img" fill />
        </div>
      </div>
      <Separator className="my-7" />
      <ul
        id="faqs"
        className="grid lg:grid-cols-3 gap-2 md:gap-6 sm:grid-cols-2 grid-cols-1"
      >
        {about_us_const.map((item, i) => (
          <li key={i}>
            <Card className="">
              <CardContent className="text-center">
                <h1 className="text-3xl font-semibold mb-3">{item.number}</h1>
                <h3 className="text-muted-foreground">{item.title}</h3>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-6">
        <div className="">
          <h6 className="text-lg text-muted-foreground font-semibold">
            داستان ما
          </h6>
          <h1 className="text-3xl my-4 font-bold">
            ساخته شده بر اعتماد، یک سبد خرید در یک زمان
          </h1>
          <p className="text- text-muted-foreground">
            همه چیز از یک مغازه کوچک {toPersianDigits("25 سال پیش")} شروع شد،
            اما ریشه این کسب‌وکار خیلی قدیمی‌تر از این حرف‌هاست. پدر ما سال‌ها
            همین کار را می‌کرد
            <br /> با دستان پر از تجربه و قلبی پر از صفا. حالا ما با بیش از ۲۵
            سال تجربه خانوادگی، قدم در راهی گذاشته‌ایم که او برای ما هموار کرد.
            ما از همان اول روی چیزهایی که بلد بودیم تمرکز کردیم: مواد خوراکی
            بسته‌بندی‌شده، نوشیدنی‌ها، لبنیات، محصولات بهداشتی شخصی و ملزومات
            خانه. فقط همان چیزهایی که هر هفته نیاز دارید، با کیفیت ثابت و قیمت
            منصفانه. و حالا، بعد از یک‌چهارم قرن، تصمیم گرفتیم قدم بعدی را
            برداریم. برای اینکه همیشه کنارتان باشیم <br /> حتی وقتی وقت یا حوصله
            بیرون رفتن ندارید — فروشگاه خود را به دنیای آنلاین آوردیم
          </p>
        </div>
        <div>
          {/* <h1 className="text-4xl font-semibold mb-4">سوالات متداول</h1> */}
          <Accordion type="single" collapsible defaultValue="item-1">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`}>
                <AccordionTrigger className="cursor-pointer text-lg font-semibold]">
                  <span className="max-w-[90%] text-right">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="font-bold text-3xl">چه چیز هایی می فروشیم؟</h1>
        <ul className="relative flex mt-4 items-center justify-between gap-4 overflow-x-hidden p-1">
          {datas.categories.map((item) => (
            <li key={item._id}>
              <Link href={`/market?categor=${item.slug}`}>
                <Card className="w-44 h-auto hover:ring-2 hover:ring-primary duration-150">
                  <CardContent className="text-center">
                    <span>{item.icon}</span>
                    <h2>{item.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
          <li className="bg-linear-to-r from-background to-transparent flex items-center justify-center left-0 top-1/2 -translate-y-1/2 absolute h-full w-24">
            <ButtonLink text={"مشاهده همه"} href={`/market`} variant={"link"} />
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between mt-7 bg-black/85 text-white px-12 py-20 rounded-2xl">
        <div>
          <h1 className="text-4xl font-semibold mb-4">به ما سر بزنید</h1>
          <p>هفت‌روز هفته بازیم, هر چه نیاز دارید، همین نزدیکی</p>
        </div>
        <div>
          <ButtonLink
            text={`موقعیت مکانی ما ←`}
            href="/contact-us"
            variant={"default"}
            size={"lg"}
            buttonClassName="text-lg py-5 px-4 font-semibold"
          />
        </div>
      </div>
    </div>
  );
}
