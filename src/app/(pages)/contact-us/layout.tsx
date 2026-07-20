import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ارتباط با ما",
  description:
    "راه‌های ارتباطی با سوپر مارکت مبلغ حسینی | شماره تماس، آدرس مغازه: چهاراه آبرسان,روبه رو مدرسه پناهی و پشتیبانی آنلاین شاپ | برای ثبت سفارش و پیگیری خرید همین حالا تماس بگیرید",
};

export default function ContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
