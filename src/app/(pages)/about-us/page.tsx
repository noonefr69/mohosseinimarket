import { Separator } from "@/components/ui/separator";
import AboutHeader from "@/components/about-us/about-header";
import CardStats from "@/components/about-us/card-stats";
import OurStory from "@/components/about-us/our-story";
import Faqs from "@/components/about-us/faqs";
import CategoriesSection from "@/components/about-us/categories-section";
import VisitNear from "@/components/about-us/visit-near";

export default function AboutUs() {
  return (
    <div className="mt-4">
      <AboutHeader />
      <Separator className="my-7" />
      <CardStats />
      <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-6">
        <OurStory />
        <Faqs />
      </div>
      <CategoriesSection />
      <VisitNear />
    </div>
  );
}
