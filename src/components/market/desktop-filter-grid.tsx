import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ButtonLink from "../button-link";

export default function DesktopFilterGrid() {
  return (
    <div className="hidden lg:block lg:col-span-3">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">فیلتر ها</CardTitle>
          <CardAction>
            <ButtonLink
              href="/market"
              text={"حذف فیلترها"}
              variant={"link"}
              size={"xs"}
            />
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}
