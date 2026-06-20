import AddressPhone from "./address-phone";
import Categories from "./categories";

export default function FootHeader() {
  return (
    <div className="pt-28 lg:block hidden border-dashed border-b-2">
      <div className="max-w-7xl mx-auto px-2 pb-2 flex items-center justify-between">
        <Categories />
        <AddressPhone />
      </div>
    </div>
  );
}
