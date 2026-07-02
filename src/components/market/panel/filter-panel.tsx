import { CategoryProps, ProductProps } from "@/types/products-t";
import Brands from "../collapsible/brands";
import Categories from "../collapsible/categories";

interface FilterPanelProps {
  products: ProductProps[];
  categories: CategoryProps[];
}

export default function FilterPanel({
  products,
  categories,
}: FilterPanelProps) {
  return (
    <div className="mt-2">
      <Categories categories={categories} />
      <Brands products={products} />
    </div>
  );
}
