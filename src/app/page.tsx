import Hero from "@/components/landing/hero";
import DailyProducts from "@/components/landing/daily-products";
import MoreCategories from "@/components/landing/more-products";
import FamousProducts from "@/components/landing/famous-products";
import Info from "@/components/landing/info";

export default function Home() {
  return (
    <div>
      <Hero />
      <DailyProducts />
      <MoreCategories />
      <FamousProducts />
      <Info />
    </div>
  );
}
