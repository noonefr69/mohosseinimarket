import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toPersianDigits } from "@/lib/to-persian-digits";
import { footerLinkFoot, footerLinks, social_media } from "@/consts/links";
import ButtonLink from "../button-link";
import FooterBrand from "./footer-brand";
import FooterBottom from "./footer-bottom";

export default function FooterUi() {
  return (
    <footer className="bg-accent/40 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FooterBrand />

        <FooterBottom />
      </div>
    </footer>
  );
}
