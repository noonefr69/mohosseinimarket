import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCart from "../product-card";
import { ProductProps } from "@/types/products-t";

export default function FamousProducts({
  result,
}: {
  result:
    | { success: true; data: ProductProps[] }
    | { success: false; error: string };
}) {
  if (!result.success) return <div>{result.error}</div>;

  const items: ProductProps[] = result.data;

  return (
    <div className="mt-7 ">
      <h1 className="md:text-2xl font-bold">محبوب ترین هفته</h1>

      <div className="mt-4 relative">
        <div className="flex items-center justify-end px-2 h-full w-20 md:w-24 bg-linear-to-r from-background to-transparent absolute left-0 z-20">
          <Button asChild variant={"outline"} size={"icon-lg"}>
            <Link href={`/market`}>&lArr;</Link>
          </Button>
        </div>
        <ul className="flex items-center overflow-x-hidden p-1 gap-4">
          {items.reverse().map((item) => (
            <ProductCart item={item} key={item._id} cardClassName="w-64" />
          ))}
        </ul>
      </div>
    </div>
  );
}
