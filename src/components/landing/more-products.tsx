import { Button } from "@/components/ui/button";
import Link from "next/link";
import datas from "../../db.json";
import Image from "next/image";
import { toPersianDigits } from "@/utils/to-persian-digits";
export default function MoreCategories() {
  return (
    <div className="mt-7">
      <div className="bg-chart-1 rounded-xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-white">محصولات بیشتر ما</h1>
          <div className="relative w-full h-100 bg-accent rounded-xl">
            <Image src={"/"} alt="bg" fill />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link className="flex flex-col items-start" href={`/`}>
                <span className="font-semibold block">لبنیات</span>
                {toPersianDigits(
                  String(
                    datas.categories.filter((item) => item.slug === "bakery")
                      .length,
                  ),
                )}{" "}
                محصول
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid col-span-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 relative md:h-auto h-100 bg-accent rounded-xl">
            <Image src={`/`} alt="img" fill />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link className="flex flex-col items-start" href={`/`}>
                <span className="font-semibold block">لبنیات</span>
                {toPersianDigits(
                  String(
                    datas.categories.filter((item) => item.slug === "bakery")
                      .length,
                  ),
                )}{" "}
                محصول
              </Link>
            </Button>
          </div>

          <div className="relative bg-accent  md:h-auto h-100 rounded-xl">
            <Image src={`/`} alt="img" fill />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link className="flex flex-col items-start" href={`/`}>
                <span className="font-semibold block">لبنیات</span>
                {toPersianDigits(
                  String(
                    datas.categories.filter((item) => item.slug === "bakery")
                      .length,
                  ),
                )}{" "}
                محصول
              </Link>
            </Button>
          </div>

          <div className="relative md:h-auto h-100 bg-accent rounded-xl">
            <Image src={`/`} alt="img" fill />
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="absolute text-xl bottom-3 right-3 py-2 h-fit"
            >
              <Link className="flex flex-col items-start" href={`/`}>
                <span className="font-semibold block">لبنیات</span>
                {toPersianDigits(
                  String(
                    datas.categories.filter((item) => item.slug === "bakery")
                      .length,
                  ),
                )}{" "}
                محصول
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
