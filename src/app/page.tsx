"use client";

import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import datas from "../db.json";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { commaThree } from "@/utils/comma-three";

export default function Home() {
  return (
    <div>
      <div className="py-52 bg-chart-3/10 rounded-2xl">
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
            تازه‌ترین مواد غذایی و کالاهای روزمره با بهترین قیمت — تحویل درب
            منزل در سراسر تبریز
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

      <div className="mt-7 ">
        <div className="flex items-center justify-between">
          <h1 className="md:text-2xl font-bold"> کالاهای روزمره</h1>
          <Button asChild variant={"link"}>
            <Link href={`/market`}>مشاهده همه</Link>
          </Button>
        </div>
        <div className="mt-4">
          <ul className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid gap-6">
            {datas.products.slice(0, 8).map((item) => (
              <li key={item._id}>
                <Link href={`/market/${item._id}`}>
                  <Card className="">
                    <CardHeader className="bg-accent/70 mx-4 p-0">
                      <Image
                        src={"/"}
                        alt={item.name}
                        width={200}
                        height={200}
                      />
                    </CardHeader>
                    <CardContent className="text-center">
                      <h1 className="text-lg sm:text-2xl mb-2 font-semibold tracking-tight truncate">
                        {item.name}
                      </h1>
                      <p className="text-muted-foreground font-semibold">
                        {item.category_title_fa}
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-2 p-0 py-2 px-1 relative">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          alert("item " + item._id + " added");
                        }}
                        className="flex-1 w-10 h-14"
                        variant={"ghost"}
                      >
                        خرید
                      </Button>
                      <Separator orientation="vertical" className="" />
                      <Button
                        disabled
                        className="flex-1 disabled:opacity-100 font-semibold disabled:cursor-default hover:bg-transparent w-10 h-14 "
                        variant={"ghost"}
                      >
                        {commaThree(item.price)} تومان
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7">
        <div className="bg-chart-1 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-white">محصولات بیشتر ما</h1>
            <div className="relative w-full h-100 bg-accent rounded-xl">
              <Image src={"/"} alt="bg" fill />
              <Button
                asChild
                variant={"default"}
                size={"lg"}
                className="absolute text-xl bottom-3 right-3 py-2 h-fit"
              >
                <Link className="flex flex-col items-start" href={`/`}>
                  <span className="font-semibold block">لبنیات</span>
                  {toPersianDigits(
                    String(
                      datas.categories.filter((item) => item.slug === "bakery")
                        .length,
                    ),
                  )}{" "}
                  محصول
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid col-span-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 relative md:h-auto h-100 bg-accent rounded-xl">
              <Image src={`/`} alt="img" fill />
              <Button
                asChild
                variant={"default"}
                size={"lg"}
                className="absolute text-xl bottom-3 right-3 py-2 h-fit"
              >
                <Link className="flex flex-col items-start" href={`/`}>
                  <span className="font-semibold block">لبنیات</span>
                  {toPersianDigits(
                    String(
                      datas.categories.filter((item) => item.slug === "bakery")
                        .length,
                    ),
                  )}{" "}
                  محصول
                </Link>
              </Button>
            </div>

            <div className="relative bg-accent  md:h-auto h-100 rounded-xl">
              <Image src={`/`} alt="img" fill />
              <Button
                asChild
                variant={"default"}
                size={"lg"}
                className="absolute text-xl bottom-3 right-3 py-2 h-fit"
              >
                <Link className="flex flex-col items-start" href={`/`}>
                  <span className="font-semibold block">لبنیات</span>
                  {toPersianDigits(
                    String(
                      datas.categories.filter((item) => item.slug === "bakery")
                        .length,
                    ),
                  )}{" "}
                  محصول
                </Link>
              </Button>
            </div>

            <div className="relative md:h-auto h-100 bg-accent rounded-xl">
              <Image src={`/`} alt="img" fill />
              <Button
                asChild
                variant={"default"}
                size={"lg"}
                className="absolute text-xl bottom-3 right-3 py-2 h-fit"
              >
                <Link className="flex flex-col items-start" href={`/`}>
                  <span className="font-semibold block">لبنیات</span>
                  {toPersianDigits(
                    String(
                      datas.categories.filter((item) => item.slug === "bakery")
                        .length,
                    ),
                  )}{" "}
                  محصول
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7 ">
        <h1 className="md:text-2xl font-bold">محبوب ترین هفته</h1>

        <div className="mt-4 relative">
          <div className="flex items-center justify-end px-2 h-full w-20 md:w-24 bg-linear-to-r from-background to-transparent absolute left-0 z-20">
            <Button asChild variant={"outline"} size={"icon-lg"}>
              <Link href={`/market`}>&lArr;</Link>
            </Button>
          </div>
          <ul className="flex items-center overflow-x-hidden p-1 gap-4">
            {datas.products.slice(0, 8).map((item) => (
              <li key={item._id}>
                <Link href={`/market/${item._id}`}>
                  <Card className=" w-52 md:w-60">
                    <CardHeader className="bg-accent/70 mx-4 p-0">
                      <Image
                        src={"/"}
                        alt={item.name}
                        width={200}
                        height={200}
                      />
                    </CardHeader>
                    <CardContent className="text-center">
                      <h1 className="text-lg sm:text-2xl mb-2 font-semibold tracking-tight truncate">
                        {item.name}
                      </h1>
                      <p className="text-muted-foreground font-semibold">
                        {item.category_title_fa}
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-2 p-0 py-2 px-1 relative">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          alert("item " + item._id + " added");
                        }}
                        className="flex-1 w-10 h-14"
                        variant={"ghost"}
                      >
                        خرید
                      </Button>
                      <Separator orientation="vertical" className="" />
                      <Button
                        disabled
                        className="flex-1 disabled:opacity-100 font-semibold disabled:cursor-default hover:bg-transparent w-10 h-14 "
                        variant={"ghost"}
                      >
                        {commaThree(item.price)} تومان
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="mt-10">
        <h1 className="text-center font-semibold text-5xl">پیشنهاد ویژه</h1>
        <div className="mt-7">
          <ul className="grid md:grid-cols-3  grid-cols-1 gap-6 items-center">
            {Arr.map((item, i) => (
              <li key={item.id}>
                <Card
                  className={``}
                  style={{ backgroundColor: `var(--chart-${i + 1})` }}
                >
                  <CardContent className="flex items-center">
                    <div className="relative h-10 w-10">
                      <Image src={"/"} alt="" fill/>
                    </div>
                    <div>
                      <h1></h1>
                      <p></p>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div> */}

      <div className="mt-7">
        <div className="gap-6 grid-cols-1 grid md:grid-cols-9 items-center">
          <div className="col-span-4">
            <h1 className="text-4xl text-center md:text-right font-bold leading-12">
              سوپرمارکت مبلغ حسینی با بیش از 25 سال سابقه کار در خدمت شماست
            </h1>
            <p className="text-muted-foreground my-7 text-center md:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              quae aperiam illo hic. Itaque repudiandae atque ducimus aliquid et
              perspiciatis magni aliquam officia sapiente quo?
            </p>
            <div className="text-center md:text-right">
              <Button asChild variant={"default"} size={"lg"}>
                <Link href={`/about-us`}>اطلاعات بیشتر</Link>
              </Button>
            </div>
          </div>
          <div className="col-span-5 flex items-center gap-6">
            <Image
              className="rounded-2xl"
              src={`/home-mask-image.webp`}
              alt="dashaq"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
