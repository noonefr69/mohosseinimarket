import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Info() {
  return (
    <div className="mt-7">
      <div className="gap-6 grid-cols-1 grid lg:grid-cols-9 items-center">
        <div className="col-span-4">
          <h1 className="text-4xl text-center lg:text-right font-bold leading-12">
            سوپرمارکت مبلغ حسینی با بیش از 25 سال سابقه کار در خدمت شماست
          </h1>
          <p className="text-muted-foreground my-7 text-center lg:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quae
            aperiam illo hic. Itaque repudiandae atque ducimus aliquid et
            perspiciatis magni aliquam officia sapiente quo?
          </p>
          <div className="text-center lg:text-right">
            <Button asChild variant={"default"} size={"lg"}>
              <Link href={`/about-us`}>اطلاعات بیشتر</Link>
            </Button>
          </div>
        </div>
        <div className="col-span-5 flex items-center gap-6">
          <Image
            className="rounded-2xl"
            src={`/home-mask-image.webp`}
            alt="dashaq"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
