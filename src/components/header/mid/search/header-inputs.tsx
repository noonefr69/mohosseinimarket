import { getProducts } from "@/actions/products/get-products";
import Search from "./search";
import SearchResult from "./search-result";

export default async function HeaderInputs({
  groupClassName,
}: {
  groupClassName?: string;
}) {
  const products = await getProducts();
  if (!products.success) return <div>{products.error}</div>;

  return (
    <div className="relative md:block hidden">
      <Search groupClassName={groupClassName} />
      <SearchResult products={products.data} />
    </div>
  );
}
