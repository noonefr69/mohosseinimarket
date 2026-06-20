import { getCategories } from "@/actions/categories";
import { getProducts } from "@/actions/products";
import Image from "next/image";
import Link from "next/link";

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
      <div className="md:flex md:items-center md:justify-evenly md:flex-wrap mt-4 gap-6 hidden">
        {result_of_categories.data.map((category) => (
          <Link
            href={`/market/${category.slug}`}
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
              <span className="text-[10px] md:text-sm text-muted-foreground">{`0 محصول`}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
