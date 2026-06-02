import HeadHeader from "./head/head-header";
import MidHeader from "./mid/mid-header";
import FootHeader from "./foot/foot-header";

export default function HeaderUi() {
  return (
    <header className="">
      <div className="fixed top-0 left-0 right-0 z-50">
        <HeadHeader />
        <MidHeader />
      </div>

      <FootHeader />
    </header>
  );
}
