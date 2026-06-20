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
import { HomeIcon } from "lucide-react";
import { redirect } from "next/navigation";
export default async function SignIn() {
  const session = await auth();

  if (session?.user) redirect("/profile");

  return (
    <div className="pt-10 pb-0 sm:pt-14 sm:pb-0 lg:pt-32 lg:pb-22">
      <div className="max-w-lg mx-auto">
        <Card>
          <CardHeader className="flex items-center justify-between ">
            <CardTitle>
              <ButtonLink
                href="/"
                text={<HomeIcon />}
                size="icon-lg"
                variant={"outline"}
                buttonClassName="font-semibold scale-125 hover:no-underline flex items-center justify-center"
              />
            </CardTitle>
            <CardAction className="flex items-center justify-center">
              <ButtonLink
                href="/"
                text={"←"}
                size="icon-lg"
                variant={"ghost"}
                buttonClassName="font-semibold text-lg hover:no-underline flex items-center justify-center scale-125"
              />
            </CardAction>
          </CardHeader>
          <CardContent>
            <h1 className="font-semibold mt-14 text-2xl">
              ورود یا ثبت نام در فروشگاه
            </h1>
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
