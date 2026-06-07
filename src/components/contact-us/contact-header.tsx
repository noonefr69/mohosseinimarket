import { Button } from "../ui/button";
import { SparkleIcon } from "lucide-react";

export default function ContactHeader() {
  return (
    <div className="text-right">
      <Button
        disabled
        className="disabled:opacity-100 bg-primary/10 text-primary font-semibold py-4 px-7 rounded-full"
        variant={"default"}
        size={"sm"}
      >
        <SparkleIcon className="ml-1" />
        همیشه در دسترس شما
      </Button>
      <h1 className="my-5 text-5xl font-bold">تماس با ما</h1>
      <p className=" text-muted-foreground ">
        {" "}
        هر سوال، پیشنهاد یا انتقادی دارید؟ خوشحال می‌شویم بشنویم. معمولاً ظرف
        همان روز پاسخ می‌دهیم.{" "}
      </p>
    </div>
  );
}
