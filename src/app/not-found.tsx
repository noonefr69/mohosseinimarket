import { toPersianDigits } from "@/utils/to-persian-digits";
import { HomeIcon } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex  flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 select-none"
      >
        <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-secondary/30 blur-2xl" />
        <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-accent/20 blur-2xl" />
      </div>

      <p className="font-heading text-[10rem] leading-none font-bold tracking-tight text-primary sm:text-[12rem] md:text-[14rem]">
        {toPersianDigits(404)}
      </p>

      <div className="mx-auto mt-2 mb-8 h-px w-16 bg-border sm:w-20" />

      <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        صفحه مورد نظر یافت نشد.
      </h1>

      <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
        متأسفیم، نتوانستیم صفحه‌ای که به دنبال آن هستید را پیدا کنیم. ممکن است
        منتقل شده، حذف شده یا آدرس اشتباه وارد شده باشد.
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:shadow-md active:scale-[0.98]"
        >
          <HomeIcon />
          برگشت به خانه
        </Link>
        <Link
          href="/contact-us"
          className="inline-flex h-11 items-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground shadow-xs transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
        >
          ارتباط با پشتیبانی
        </Link>
      </div>

      <p className="mt-16 text-xs text-muted-foreground/60">
        اگر فکر می‌کنید این یک اشتباه است، لطفاً{" "}
        <Link
          href="/contact-us"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          به ما اطلاع دهید
        </Link>
        .
      </p>
    </main>
  );
}
