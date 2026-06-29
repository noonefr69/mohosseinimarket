import { CategoryProps } from "@/types/category-t";
import { ProductProps } from "@/types/products-t";
import { toPersianDigits } from "@/utils/to-persian-digits";
import Image from "next/image";
import Link from "next/link";

export default function CategoriesBar({
  categories,
  products,
}: {
  categories: CategoryProps[];
  products: ProductProps[];
}) {
  return (
    <div className="md:flex md:items-center md:justify-evenly md:flex-wrap mt-7 gap-6 hidden">
      {categories.map((category) => {
        const filtered = products.filter((p) => {
          return p.category_slug === category.slug;
        });
        return (
          <Link
            href={`/market/filter/${category.slug}`}
            key={category._id}
            className="flex items-center gap-2 hover:shadow-sm shadow-xs p-2 duration-150 ring-primary/10 rounded-2xl ring hover:ring-primary overflow-hidden"
          >
            <Image
              src={`/`}
              alt={`category.name_fa`}
              width={26}
              height={26}
              className="bg-accent rounded-full h-8 w-8 md:w-16 md:h-16"
            />
            <div>
              <h1 className="font-semibold truncate md:text-base text-xs w-32 md:w-auto">
                {category.name_fa}
              </h1>
              <span className="text-[10px] md:text-sm text-muted-foreground">
                {toPersianDigits(filtered.length)} کالا
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
