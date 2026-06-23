import { getProducts } from "@/actions/products";
import ProductsGrid from "@/components/market/products-grid";

export default async function CategoryFiltered({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const result_of_products = await getProducts();

  if (!result_of_products.success) return <div>no fetch can I</div>;

  const { slug } = await params;
  return (
    <div>
      My Post: {slug}
      <ProductsGrid products={result_of_products.data} />
    </div>
  );
}
