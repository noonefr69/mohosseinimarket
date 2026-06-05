import { auth } from "@/auth";
import { AuthenticationForm } from "@/components/auth/form";
import ButtonLink from "@/components/button-link";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { nastaliq_font } from "@/fonts/font";
import { redirect } from "next/navigation";
export default async function SignIn() {
  const session = await auth();

  if (session?.user) redirect("/profile");

  return (
    <div className="pt-10 pb-0 sm:pt-14 sm:pb-0 lg:pt-32 lg:pb-22">
      <div className="max-w-lg mx-auto">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>
              <ButtonLink
                href="/"
                text={"مبلغ حسینی"}
                variant={"link"}
                buttonClassName="text-black p-0 text-xl font-semibold hover:no-underline"
                linkClassName={nastaliq_font.className}
              />
            </CardTitle>
            <CardAction className="flex items-center justify-center">
              <ButtonLink
                href="/"
                text={"←"}
                size="icon-lg"
                variant={"ghost"}
                buttonClassName="font-semibold text-lg text-black hover:no-underline flex items-center justify-center"
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h1 className="font-semibold mt-14">ورود یا ثبت نام در فروشگاه</h1>
            <p className="text-muted-foreground my-4">
              {" "}
              لطفا شماره موبایل خود را وارد کنید{" "}
            </p>
            <AuthenticationForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
