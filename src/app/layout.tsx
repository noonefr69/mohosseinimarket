import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { DirectionProvider } from "@/components/ui/direction";
import { Noto_Sans_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import HeaderUi from "@/components/header/header-ui";
import FooterUi from "@/components/footer/footer-ui";

export const metadata: Metadata = {
  title: {
    default: "سوپرمارکت مبلغ حسینی",
    template: "%s / سوپرمارکت مبلغ حسینی",
  },
  description:
    "مغازه قدیمی و معتبر مبلغ حسینی حالا آنلاین شده | بهترین برندهای لبنی و خشکبار رو با یه کلیک در خونه‌ت داشته باش | ارسال به تمام نقاط تبریز",
};

const fontSans = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${fontSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <DirectionProvider dir="rtl" direction="rtl">
            <div className="">
              <Toaster />
              <HeaderUi />
              <main className="p-4 max-w-7xl mx-auto mt-16 md:mt-24 lg:mt-0">
                {children}
              </main>
              <FooterUi />
            </div>
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
