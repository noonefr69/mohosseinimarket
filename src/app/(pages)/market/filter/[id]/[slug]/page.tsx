import { getProductsByCategory } from "@/actions/products/get-products-by-category";
import DesktopFilterGrid from "@/components/market/desktop-filter-grid";
import DesktopSortFilter from "@/components/market/desktop-sort-filter";
import MobileFilterGrid from "@/components/market/mobile-filter-grid";
import ProductsGrid from "@/components/market/products-grid";

export default async function CategoryFiltered({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; slug: string }>;
  searchParams: Promise<{
    brand?: string;
    tag?: string;
    min?: string;
    max?: string;
    sorted?: string;
  }>;
}) {
  const { brand, tag, min, max, sorted } = await searchParams;
  const { id, slug } = await params;

  console.log(sorted);
  const products = await getProductsByCategory(id);
  if (!products.success) return <div>{products.error}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        {/* filters for desktop */}
        <DesktopFilterGrid />

        <div className="col-span-1 md:col-span-9">
          <DesktopSortFilter products_length={products.data.length} />

          {/* mobile view filtering */}
          <MobileFilterGrid products_length={products.data.length} />

          {/* products */}
          <ProductsGrid products={products.data} />
        </div>
      </div>
    </div>
  );
}
