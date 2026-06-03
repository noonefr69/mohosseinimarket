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
import { link } from "fs";
import { Separator } from "@/components/ui/separator";

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
          <h1 className="md:text-2xl font-bold">محبوب ترین هفته</h1>
          <Button asChild variant={"link"}>
            <Link href={`/market`}>مشاهده همه</Link>
          </Button>
        </div>
        <div className="mt-4">
          <ul className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid gap-6">
            {datas.products.slice(0, 8).map((item) => (
              <li key={item.id}>
                <Link href={`/market/${item.id}`}>
                  <Card className="">
                    <CardHeader className="bg-accent mx-4 p-0">
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
                        {item.category_title}
                      </p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-2 p-0 py-2 px-1 relative">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          alert("item " + item.id + " added");
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
                        {item.price} تومان
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
