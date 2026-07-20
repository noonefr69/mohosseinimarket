import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آدرس ها",
  description:
    "انلاین شاپ سوپر مارکت مبلغ حسینی در تبریز | خرید اینترنتی خواروبار با ارسال فوری، تماس با ما و آشنایی با سابقه‌ی فروشگاه | کیفیت و قیمت عالی",
};

export default function AddressLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
