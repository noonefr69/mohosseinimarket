import OtpContent from "@/components/auth/otp/otp-content";
import ButtonLink from "@/components/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function OtpPage({
  searchParams,
}: {
  searchParams: Promise<{ phone?: string }>;
}) {
  const { phone = "" } = await searchParams;

  if (!phone || phone === "") redirect("/sign-in");

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
          </CardHeader>
          <CardContent>
            <OtpContent phone={phone} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
