import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سفارش ها",
  description:
    "مشاهده لیست سفارش‌های قبلی شما در سوپر مارکت مبلغ حسینی | پیگیری وضعیت ارسال، مشاهده فاکتورها و جزییات هر خرید | وارد شوید و سفارش‌تان را دنبال کنید",
};

export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
