import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما",
  description:
    "با بیش از 25 سال سابقه در تبریز، سوپر مارکت مبلغ حسینی را بهتر بشناسید | داستان کیفیت و تازگی محصولات از مغازه تا خونه‌تون | همین حالا بخوانید",
};

export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
