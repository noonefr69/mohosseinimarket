import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCart from "../product-card";
import { ProductProps } from "@/types/products-t";
import { CategoryProps } from "@/types/category-t";

export default function DailyProducts({
  items,
  categories,
}: {
  categories: CategoryProps[];
  items: ProductProps[];
}) {
  return (
    <div className="mt-7 ">
      <div className="flex items-center justify-between">
        <h1 className="md:text-2xl font-bold"> کالاهای روزمره</h1>
        <Button asChild variant={"link"}>
          <Link href={`/market`}>مشاهده همه</Link>
        </Button>
      </div>
      <div className="mt-4">
        <ul className="lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 grid gap-6">
          {items?.slice(0, 8).map((item) => (
            <ProductCart key={item._id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
