import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { toPersianDigits } from "@/utils/to-persian-digits";
import { categories } from "@/consts/categories";
export default function MoreCategories() {
  return (
    <div className="mt-7">
      <div className="bg-chart-1 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">محصولات بیشتر ما</h1>
          <div className="relative w-full h-100 bg-accent rounded-xl">
            <Image
              src={"/dairy.png"}
              className="object-contain"
              alt="bg"
              fill
            />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-wrap min-w-fit overflow-hidden text-sm lg:text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link
                className="flex flex-col items-start"
                href={`/market/filter/6a42a418f84a60b801e5c78c/لبنیات`}
              >
                <span className="font-semibold block">لبنیات</span>
                {toPersianDigits(2)} محصول
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid col-span-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 relative md:h-auto h-100 bg-accent rounded-xl">
            <Image
              className="object-contain"
              src={`/breakfast.png`}
              alt="img"
              fill
            />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-wrap min-w-fit overflow-hidden text-sm lg:text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link
                className="flex flex-col items-start"
                href={`/market/filter/6a42a418f84a60b801e5c787/صبحانه`}
              >
                <span className="font-semibold block">صبحانه</span>
                {toPersianDigits(3)} محصول
              </Link>
            </Button>
          </div>

          <div className="relative bg-accent  md:h-auto h-100 rounded-xl">
            <Image
              className="object-contain"
              src={`/snacks.png`}
              alt="img"
              fill
            />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-wrap min-w-fit overflow-hidden text-sm lg:text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link
                className="flex flex-col items-start"
                href={`/market/filter/6a42a418f84a60b801e5c792/تنقلات`}
              >
                <span className="font-semibold block">تنقلات</span>
                {toPersianDigits(2)} محصول
              </Link>
            </Button>
          </div>

          <div className="relative md:h-auto h-100 bg-accent rounded-xl">
            <Image
              className="object-contain"
              src={`/health.png`}
              alt="img"
              fill
            />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-wrap min-w-fit overflow-hidden text-sm lg:text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link
                className="flex flex-col items-start"
                href={`/market/filter/6a42a418f84a60b801e5c78d/بهداشتی-و-آرایشی`}
              >
                <span className="font-semibold block">بهداشتی و آرایشی</span>
                {toPersianDigits(1)} محصول
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
