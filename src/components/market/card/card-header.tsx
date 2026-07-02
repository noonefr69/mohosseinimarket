import ButtonLink from "@/components/button-link";
import { CardAction, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardHeaderMarket() {
  return (
    <CardHeader className="flex items-center justify-between">
      <CardTitle className="font-bold text-lg">فیلترها</CardTitle>
      <CardAction>
        <ButtonLink
          href={`/market`}
          text={`حذف فیلترها`}
          variant={"link"}
          size={"sm"}
          linkClassName="p-0"
          buttonClassName="p-0"
        />
      </CardAction>
    </CardHeader>
  );
}
