import { getCategories } from "@/actions/categories";

import ProductsGrid from "@/components/market/products-grid";
import CategoriesBar from "@/components/market/categories-bar";
import DesktopFilterGrid from "@/components/market/desktop-filter-grid";
import DesktopSortFilter from "@/components/market/desktop-sort-filter";
import MobileFilterGrid from "@/components/market/mobile-filter-grid";
import { getProducts } from "@/actions/products/get/all-products";

export default async function Market() {
  const result_of_products = await getProducts();
  const result_of_categories = await getCategories();

  if (!result_of_products.success) {
    return <div>{result_of_products.error}</div>;
  }
  if (!result_of_categories.success) {
    return <div>{result_of_categories.error}</div>;
  }

  return (
    <div>
      <div className="w-full h-80 bg-accent rounded-2xl"></div>

      <CategoriesBar
        products={result_of_products.data}
        categories={result_of_categories.data}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        {/* filters for desktop */}
        <DesktopFilterGrid />

        <div className="col-span-1 md:col-span-9">
          <DesktopSortFilter products_length={result_of_products.data.length} />

          {/* mobile view filtering */}
          <MobileFilterGrid />

          {/* products */}
          <ProductsGrid products={result_of_products.data} />
        </div>
      </div>
    </div>
  );
}
