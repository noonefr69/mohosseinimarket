"use client";

import Link from "next/link";
import { nastaliq_font } from "@/fonts/font";
import HeaderInputs from "./header-inputs";
import HeaderNavDesktop from "./header-nav-desktop";
import HeaderNavMobile from "./header-nav-mobile";

export default function MidHeader() {
  return (
    <div className="bg-primary-foreground">
      <div className="max-w-7xl mx-auto gap-1 pl-2 pr-4 py-3 flex items-center justify-between">
        <Link
          className={`font-bold text-nowrap text-2xl ${nastaliq_font.className}`}
          href={`/`}
        >
          مبلغ حسینی
        </Link>

        <HeaderInputs />

        <HeaderNavDesktop />
        <HeaderNavMobile />
      </div>
    </div>
  );
}
