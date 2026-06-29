import { getProducts } from "@/actions/products/get/all-products";
import DesktopFilterGrid from "@/components/market/desktop-filter-grid";
import DesktopSortFilter from "@/components/market/desktop-sort-filter";
import MobileFilterGrid from "@/components/market/mobile-filter-grid";
import ProductsGrid from "@/components/market/products-grid";

export default async function CategoryFiltered({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const result_of_products = await getProducts();

  if (!result_of_products.success) return <div>no fetch can I</div>;

  const { slug } = await params;

  const filtered_products = result_of_products.data.filter((product) => {
    return product.category_slug === slug;
  });
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        {/* filters for desktop */}
        <DesktopFilterGrid />

        <div className="col-span-1 md:col-span-9">
          <DesktopSortFilter products_length={result_of_products.data.length} />

          {/* mobile view filtering */}
          <MobileFilterGrid />

          {/* products */}
          <ProductsGrid products={filtered_products} />
        </div>
      </div>
    </div>
  );
}
