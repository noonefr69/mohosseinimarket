"use client";

import { OtpForm } from "@/components/auth/otp-form";
import ButtonLink from "@/components/button-link";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { HomeIcon } from "lucide-react";
import { redirect, useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function OtpPage() {
  return (
    <div className="pt-10 pb-0 sm:pt-14 sm:pb-0 lg:pt-32 lg:pb-22">
      <div className="max-w-lg mx-auto">
        <Card>
          <CardHeader className="flex items-center justify-between ">
            <CardTitle>
              <ButtonLink
                href="/"
                text={<HomeIcon />}
                size="icon-lg"
                variant={"outline"}
                buttonClassName="font-semibold scale-125 hover:no-underline flex items-center justify-center"
              />
            </CardTitle>
            <CardAction className="flex items-center justify-center">
              <ButtonLink
                href="/"
                text={"←"}
                size="icon-lg"
                variant={"ghost"}
                buttonClassName="font-semibold text-lg hover:no-underline flex items-center justify-center scale-125"
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>loading...</div>}>
              <OtpContent />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function OtpContent() {
  const phone = useSearchParams().get("phone") || "";

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
