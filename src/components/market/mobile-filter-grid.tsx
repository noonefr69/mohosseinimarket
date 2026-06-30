import { toPersianDigits } from "@/utils/to-persian-digits";
import FilterSheet from "./filter-sheet";
import SortSheet from "./sort-sheet";

export default function MobileFilterGrid({
  products_length,
}: {
  products_length: number;
}) {
  return (
    <div className="lg:hidden flex mb-4 justify-between">
      <div>
        <FilterSheet />
        <SortSheet />
      </div>
      {toPersianDigits(products_length)} کالا
    </div>
  );
}
