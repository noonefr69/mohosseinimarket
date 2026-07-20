import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لیست ها",
  description:
    "محصولات مورد علاقه‌تان را در سوپر مارکت مبلغ حسینی ذخیره کنید | دسترسی سریع به کالاهای پرتکرار و اضافه کردن به سبد خرید با یک کلیک",
};

export default function WishlistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
