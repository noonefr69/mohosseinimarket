import { getProducts } from "@/actions/products/get-products";
import DailyProducts from "../daily-products";
import FamousProducts from "../famous-products";
import MoreCategories from "../more-products";
import { getCategories } from "@/actions/category/categories";

export default async function Container() {
  const result = await getProducts();
  const categories = await getCategories();

  if (!result.success) return null;
  if (!categories.success) return null;

  return (
    <>
      <DailyProducts items={result.data}  />
      <MoreCategories />
      <FamousProducts items={result.data}  />
    </>
  );
}
