import FilterSheet from "./filter-sheet";
import SortSheet from "./sort-sheet";

export default function MobileFilterGrid() {
  return (
    <div className="lg:hidden flex mb-4 justify-between">
      <div>
        <FilterSheet />
        <SortSheet />
      </div>
      {17} کالا
    </div>
  );
}
