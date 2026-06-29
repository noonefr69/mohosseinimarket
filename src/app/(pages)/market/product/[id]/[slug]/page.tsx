import { getProducts } from "@/actions/products/get/all-products";
import { getProductsById } from "@/actions/products/get/each-product";
import BreadcrumbComponent from "@/components/id/breadcrumb";
import CopyUrl from "@/components/id/copy-url";
import MoreInfo from "@/components/id/more-info";
import ProductDetails from "@/components/id/product-details";
import SimilarProduct from "@/components/id/similar-products";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id, slug } = await params;

  const result_of_id_product = await getProductsById(id);
  if (!result_of_id_product.success)
    return <div>{result_of_id_product.error} dashaq</div>;

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent
          category_slug={result_of_id_product.data.category_slug}
          name={result_of_id_product.data.name}
        />
        <CopyUrl />
      </div>

      <ProductDetails product={result_of_id_product.data} />

      <MoreInfo product={result_of_id_product.data} />

      <SimilarProduct product={result_of_id_product.data} />
    </div>
  );
}
