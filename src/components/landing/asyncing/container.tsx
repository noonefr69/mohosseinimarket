import { getCategories } from "@/actions/categories";
import DailyProducts from "../daily-products";
import FamousProducts from "../famous-products";
import MoreCategories from "../more-products";
import { getProducts } from "@/actions/products/get/all-products";

export default async function Container() {
  const result = await getProducts();
  const categories = await getCategories();

  if (!result.success) return <div>{result.error}</div>;
  if (!categories.success) return <div>{categories.error}</div>;

  return (
    <>
      <DailyProducts items={result.data} categories={categories.data} />
      <MoreCategories />
      <FamousProducts items={result.data} categories={categories.data} />
    </>
  );
}
