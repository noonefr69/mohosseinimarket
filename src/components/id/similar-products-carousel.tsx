"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCart from "../product-card";
import { ProductProps } from "@/types/products-t";

export default function SimProCarousel({
  similarPro,
}: {
  similarPro: ProductProps[];
}) {
  return (
    <div className="relative mt-4">
      <Carousel
        opts={{
          direction: "rtl",
        }}
      >
        <CarouselContent className="ml-1 my-2 mr-5">
          {similarPro.map((sp) => (
            <CarouselItem
              className="basis-1/1 sm:basis-1/3 lg:basis-1/4"
              key={sp._id}
            >
              <ProductCart item={sp} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
