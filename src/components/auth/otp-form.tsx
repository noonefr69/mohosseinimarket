"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { signIn } from "next-auth/react";

export function OtpForm({ phone }: { phone: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    if (code.length !== 6 || !/^\d{6}$/.test(code)) {
      setError("کد تایید باید ۶ رقم باشد");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/auth/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, code }),
        });

        const data = await res.json();

        if (res.ok && data.success) {
          // Sign in with NextAuth after successful OTP verification
          // We'll handle this in the next step (the signIn call)
          // For now just redirect or show success
          // alert("OTP verified! Now we will sign you in.");
          // Later: signIn("credentials", { phone, otp: code, redirectTo: "/profile" })
          const signInResult = await signIn("credentials", {
            phone,
            otp: code,
            redirect: false,
          });

          if (signInResult?.error) {
            setError("ورود با خطا مواجه شد");
          } else {
            router.push("/");
          }
        } else {
          setError(data.error || "کد تایید اشتباه است");
        }
      } catch (err) {
        console.error(err);
        setError("خطا در ارتباط با سرور");
      }
    });
  }
  return (
    <form
      id="otp-form"
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <InputOTP value={code} onChange={(val) => setCode(val)} maxLength={6}>
        <InputOTPGroup dir="ltr">
          <InputOTPSlot className="p-7" index={0} />
          <InputOTPSlot className="p-7" index={1} />
          <InputOTPSlot className="p-7" index={2} />
          <InputOTPSlot className="p-7" index={3} />
          <InputOTPSlot className="p-7" index={4} />
          <InputOTPSlot className="p-7" index={5} />
        </InputOTPGroup>
      </InputOTP>
      {error && (
        <div className="text-red-500 font-semibold text-sm">{error}</div>
      )}
      <Button
        disabled={isPending}
        type="submit"
        form="otp-form"
        className="w-full py-6 text-lg font-semibold"
      >
        {isPending ? <Spinner /> : "کد تایید"}
      </Button>
    </form>
  );
}
