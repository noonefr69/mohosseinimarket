import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید",
  description:
    "سبد خرید سوپر مارکت مبلغ حسینی | مرور سریع اقلام انتخابی، ویرایش تعداد و اعمال کد تخفیف | ارسال رایگان به سراسر تبریز | برای تکمیل خرید و پرداخت امن کلیک کن",
};

export default function ShoppingCartLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
