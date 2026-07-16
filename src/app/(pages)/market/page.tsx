import ProductsGrid from "@/components/market/products-grid";
import CategoriesBar from "@/components/market/categories-bar";
import { getProducts } from "@/actions/products/get-products";
import { getCategories } from "@/actions/category/categories";
import FilterPanel from "@/components/market/panel/filter-panel";
import { Card, CardContent } from "@/components/ui/card";
import SortingFiltering from "@/components/market/sorting-filtering";
import CardHeaderMarket from "@/components/market/card/card-header";
import Image from "next/image";
import MarketError from "@/components/market/market-error";

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

  const products = await getProducts({
    brand: brand ? decodeURIComponent(brand) : undefined,
    tag: tag ? decodeURIComponent(tag) : undefined,
    minPrice: min ? Number(min) : undefined,
    maxPrice: max ? Number(max) : undefined,
    sortBy: sorted,
  });
  const categories = await getCategories();

  if (!products.success) {
    return <MarketError error={products.error} />;
  }

  if (!categories.success) {
    return <MarketError error={categories.error} />;
  }

  return (
    <div>
      <div className="w-full h-80 bg-accent rounded-2xl relative">
        <Image
          src={`/banner.png`}
          alt="banner"
          fill
          className="object-cover rounded object-[center_60%] dark:opacity-80"
        />
      </div>

      <CategoriesBar categories={categories} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mt-7">
        <div className="col-span-1 lg:col-span-3 relative lg:block hidden">
          <Card className="block sticky top-28">
            <CardHeaderMarket />
            <CardContent>
              <FilterPanel
                products={products.data}
                categories={categories.data}
              />
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 lg:col-span-9">
          <SortingFiltering
            categories={categories.data}
            products={products.data}
          />
          <ProductsGrid products={products.data} />
        </div>
      </div>
    </div>
  );
}
