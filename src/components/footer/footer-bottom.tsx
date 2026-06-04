import React from "react";
import ButtonLink from "../button-link";
import { footerLinkFoot } from "@/consts/links";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";
import { toPersianDigits } from "@/lib/to-persian-digits";

export default function FooterBottom() {
  return (
    <>
      <div className="mt-10 rounded-xl bg-chart-1/10 border border-chart-1/20 p-6 flex flex-col md:flex-row items-center gap-4 justify-between">
        <div>
          <p className="font-semibold">تحویل سفارشات در سریعترین زمان</p>
          <p className="text-sm text-muted-foreground mt-1">
            همه روزه از {toPersianDigits("09:00")} صبح تا{" "}
            {toPersianDigits("17:00")} شب — تبریز
          </p>
        </div>
        <Button asChild>
          <Link href="/market">همین الان خرید کن</Link>
        </Button>
      </div>

      <Separator className="my-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© ۱۴۰۵ سوپرمارکت مبلغ حسینی — تمامی حقوق محفوظ است</p>
        <ul className="flex items-center gap-4">
          {footerLinkFoot.map((item, i) => (
            <li key={i}>
              <ButtonLink
                variant={"link"}
                href={item.href}
                text={item.label}
                linkClassName="hover:text-foreground transition-colors"
                buttonClassName="text-muted-foreground p-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
