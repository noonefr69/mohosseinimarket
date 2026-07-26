import { SparkleIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { toPersianDigits } from "@/utils/to-persian-digits";

export default function AboutHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Button
          disabled
          className="disabled:opacity-100 bg-primary/10 text-primary font-semibold py-4 px-7 rounded-full"
          variant={"default"}
          size={"sm"}
        >
          <SparkleIcon className="ml-1" />
          از سال {toPersianDigits(1380)}
        </Button>
        <h1 className="my-10 lg:max-w-4/5 text-4xl md:text-5xl font-semibold">
          سوپرمارکت محله شما
        </h1>
        <p className="text-muted-foreground lg:max-w-4/5 text-justify">
          ما بیش از ۲۵ سال است که مایحتاج ضروری روزمره خانواده‌ها - از نان تازه
          و چیپس گرفته تا بهداشتی و مایحتاج ضروری خانه - را تأمین می‌کنیم.
        </p>
      </div>
      <div className="relative bg-accent rounded-2xl h-80 md:h-auto">
        <Image
          src={`/tukan_2.jpg`}
          alt="img"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded"
        />
      </div>
    </div>
  );
}
