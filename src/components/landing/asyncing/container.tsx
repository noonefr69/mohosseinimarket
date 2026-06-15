import DailyProducts from "../daily-products";
import FamousProducts from "../famous-products";
import MoreCategories from "../more-products";
import { getProducts } from "@/actions/products";

export default async function Container() {
  const result = await getProducts();

  return (
    <>
      <DailyProducts result={result} />
      <MoreCategories />
      <FamousProducts result={result} />
    </>
  );
}
