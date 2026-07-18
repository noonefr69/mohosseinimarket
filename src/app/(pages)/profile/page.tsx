import { getUser } from "@/actions/user/get-user";
import ButtonLink from "@/components/button-link";
import AddressAlert from "@/components/profile/address-alert";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { commaThree } from "@/utils/comma-three";
import {
  ChevronLeftIcon,
  CircleArrowLeftIcon,
  CircleCheckIcon,
  CircleEllipsisIcon,
} from "lucide-react";

export default async function ProfileUi() {
  const orders_tabs = [
    { href: "?tabActive=pending", label: "جاری", icon: CircleEllipsisIcon },
    { href: "?tabActive=sent", label: "تحویل", icon: CircleCheckIcon },
    {
      href: "?tabActive=returned",
      label: "مرجوع",
      icon: CircleArrowLeftIcon,
    },
  ];
  const result = await getUser();
  if (!result.success) return <div>{result.error}</div>;

  const user = result.data;

  return (
    <div className="space-y-2">
      {!user.address ||
      user.address.trim() === "" ||
      typeof user.address !== "string" ? (
        <AddressAlert />
      ) : null}

      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="sm:text-lg lg:text-xl font-semibold">
            سفارش‌های من
          </CardTitle>
          <CardAction>
            <ButtonLink
              href="/profile/orders"
              text={
                <>
                  مشاهده همه <ChevronLeftIcon />
                </>
              }
              variant={"link"}
            />
          </CardAction>
        </CardHeader>
        <CardContent className="grid grid-cols-3 divide-x-2">
          {orders_tabs.map((tab, i) => (
            <div key={i}>
              <ButtonLink
                href={`/profile/orders/${tab.href}`}
                text={
                  <div className="flex relative sm:p-0 py-2 px-2 md:flex-row flex-col text-center md:text-start items-center gap-2">
                    {<tab.icon className="size-10" />}
                    <div>
                      <h5 className="font-semibold flex items-center gap-1">
                        <span className="sm:relative sm:bg-transparent sm:w-auto sm:h-auto absolute top-0 left-0 bg-primary rounded-full w-5 h-5">
                          {commaThree(0)}
                        </span>
                        <span className="sm:block hidden">سفارش</span>
                      </h5>
                      <h6 className="text-muted-foreground text-sm">
                        {tab.label}
                      </h6>
                    </div>
                    {/*<Separator orientation="vertical" />*/}
                  </div>
                }
                buttonClassName="h-fit w-full sm:py-6 p-0"
                variant={"ghost"}
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
