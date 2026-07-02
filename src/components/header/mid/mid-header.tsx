import Link from "next/link";
import { nastaliq_font } from "@/fonts/font";
import HeaderInputs from "./search/header-inputs";
import HeaderNavDesktop from "./header-nav-desktop";
import HeaderNavMobile from "./header-nav-mobile";
import { CategoryProps } from "@/types/category-t";

export default function MidHeader({
  categories,
}: {
  categories: CategoryProps[];
}) {
  return (
    <div className="border-b-2 border-dashed bg-background shadow-lg">
      <div className="max-w-7xl mx-auto gap-1 pl-2 pr-4 py-3 flex items-center justify-between">
        <Link
          className={`font-bold text-shadow-black/90 text-primary duration-200 text-nowrap text-2xl md:text-primary ${nastaliq_font.className}`}
          href={`/`}
        >
          مبلغ حسینی
        </Link>

        <HeaderInputs groupClassName="md:flex hidden w-64" />

        <HeaderNavDesktop />
        <HeaderNavMobile categories={categories} />
      </div>
    </div>
  );
}
