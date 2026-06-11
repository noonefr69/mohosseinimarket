import FooterBrand from "./footer-brand";
import FooterBottom from "./footer-bottom";

export default function FooterUi() {
  return (
    <footer className="bg-accent/40 border-t mt-7">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FooterBrand />
        <FooterBottom />
      </div>
    </footer>
  );
}
