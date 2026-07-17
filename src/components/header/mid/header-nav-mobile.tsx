import ShoppingCartDropdown from "./shopping-cart-dropdown";
import { GetCategoryResult } from "@/types/category-t";

import SheetContainer from "./sheet/container";
import { auth } from "@/auth";

export default async function HeaderNavMobile({
  categories,
}: {
  categories: GetCategoryResult;
}) {
  const session = await auth();

  return (
    <div className="md:hidden flex items-center">
      <ShoppingCartDropdown />
      <SheetContainer categories={categories} user={session?.user} />
    </div>
  );
}
