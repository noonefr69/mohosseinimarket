import ProductsGrid from "@/components/market/products-grid";
import CategoriesBar from "@/components/market/categories-bar";
import DesktopFilterGrid from "@/components/market/desktop-filter-grid";
import DesktopSortFilter from "@/components/market/desktop-sort-filter";
import MobileFilterGrid from "@/components/market/mobile-filter-grid";
import { getProducts } from "@/actions/products/get-products";
import { getCategories } from "@/actions/category/categories";

export default async function Market({
  searchParams,
}: {
  searchParams: Promise<{
    brand?: string;
    tag?: string;
    min?: string;
    max?: string;
    sorted?: string;
  }>;
}) {
  const { brand, tag, min, max, sorted } = await searchParams;

  const products = await getProducts();
  const categories = await getCategories();

  if (!products.success) {
    return <div>{products.error}</div>;
  }
  if (!categories.success) {
    return <div>{categories.error}</div>;
  }

  return (
    <div>
      <div className="w-full h-80 bg-accent rounded-2xl"></div>

      <CategoriesBar products={products.data} categories={categories.data} />

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
