import { getProduct } from "@/actions/products/get-product";
import BreadcrumbComponent from "@/components/id/breadcrumb";
import CopyUrl from "@/components/id/copy-url";
import MoreInfo from "@/components/id/more-info";
import ProductDetails from "@/components/id/product-details";
import SimilarProduct from "@/components/id/similar-products";
import MarketError from "@/components/market/market-error";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);
  if (!product.success) {
    return <MarketError error={product.error} />;
  }

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between">
        <BreadcrumbComponent
          product_name={product.data.name}
          product_category={product.data.category}
        />
        <CopyUrl />
      </div>

      <ProductDetails product={product.data} />

      <MoreInfo product={product.data} />

      <SimilarProduct product={product.data} />
    </div>
  );
}
