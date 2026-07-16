import { getProducts } from "@/actions/products/get-products";
import Search from "./search";
import SearchResult from "./search-result";

export default async function HeaderInputs({
  groupClassName,
}: {
  groupClassName?: string;
}) {
  const products = await getProducts();
  if (!products.success) return null;

  return (
    <div className="relative md:block hidden">
      <Search groupClassName={groupClassName} />
      <SearchResult products={products.data} />
    </div>
  );
}
