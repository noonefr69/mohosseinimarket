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
          className={`font-bold text-shadow-xs text-shadow-black/90 hover:text-[#5a5cc0] duration-200 text-nowrap text-2xl text-[#5a5cc0] md:text-primary ${nastaliq_font.className}`}
          href={`/`}
        >
          مبلغ حسینی
        </Link>

        <HeaderInputs groupClassName="md:flex hidden w-64" />

        <HeaderNavDesktop />
        <HeaderNavMobile />
      </div>
    </div>
  );
}
