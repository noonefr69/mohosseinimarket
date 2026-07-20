import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ارتباط با ما",
  description:
    "مغازه قدیمی و معتبر مبلغ حسینی حالا آنلاین شده | بهترین برندهای لبنی و خشکبار رو با یه کلیک در خونه‌ت داشته باش | ارسال به تمام نقاط تبریز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
