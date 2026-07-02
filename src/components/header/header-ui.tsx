import HeadHeader from "./head/head-header";
import MidHeader from "./mid/mid-header";
import FootHeader from "./foot/foot-header";
import { getCategories } from "@/actions/category/categories";

export default async function HeaderUi() {
  const categories = await getCategories();
  if (!categories.success) return <div>{categories.error}</div>;

  return (
    <header className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <HeadHeader />
        <MidHeader categories={categories.data} />
      </div>

      <FootHeader />
    </header>
  );
}
