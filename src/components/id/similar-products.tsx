import { ProductProps } from "@/types/products-t";
import { Card, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import ButtonLink from "../button-link";
import { Separator } from "../ui/separator";
import SimProCarousel from "./similar-products-carousel";
import { getSimilarProducts } from "@/actions/products/get-similar-procuts";

interface SimilarProductProps {
  product: ProductProps;
}

export default async function SimilarProduct({ product }: SimilarProductProps) {
  const similarPro = await getSimilarProducts(
    product.category._id,
    product._id,
  );

  if (!similarPro.success) return <div>{similarPro.error}</div>;
  if (similarPro.data.length === 0) return null;

  return (
    <Card className="mt-7">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-xl font-bold">
          کالا های مشابه
          <Separator className="mt-1 mb-0 pb-0 bg-primary p-px rounded" />
        </CardTitle>
        <CardAction>
          <ButtonLink
            href={`/market/filter/${product.category._id}/${product.category.name}`}
            text={`مشاهده همه کالاها`}
            variant={"link"}
            buttonClassName="lg:text-base text-sm"
            linkClassName="lg:text-base text-sm"
          />
        </CardAction>
      </CardHeader>
      <SimProCarousel similarPro={similarPro.data} />
    </Card>
  );
}
