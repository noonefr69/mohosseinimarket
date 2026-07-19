import { getUserWishlists } from "@/actions/user/get-user-wishlists";
import GetBackButton from "@/components/auth/get-back-button";
import WishlistCard from "@/components/profile/wishlists/wishlist-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EmptyPlace from "@/components/empty-place";
import { ListIcon } from "lucide-react";
import ButtonLink from "@/components/button-link";
import WishlistsFilters from "@/components/profile/wishlists/wishlist-filters";
import WishlistsGrid from "@/components/profile/wishlists/wishlists-grid";

export default async function WishLists({
  searchParams,
}: {
  searchParams: Promise<{ sorted: string }>;
}) {
  const wishlists = await getUserWishlists();
  if (!wishlists.success) return <div>{wishlists.error}</div>;
  const { sorted } = await searchParams;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-baseline font-semibold gap-2">
          <GetBackButton
            size={"icon"}
            variant={"outline"}
            className="scale-100 rotate-180 lg:hidden block"
          />
          <span className="text-primary lg:text-2xl sm:text-xl text-lg">
            لیست علاقه‌مندی
          </span>
        </CardTitle>
        {wishlists.data.length === 0 ? null : (
          <CardDescription className="border-y my-2 py-2">
            <WishlistsFilters />
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="pb-4">
        {wishlists.data.length === 0 ? (
          <EmptyPlace
            icon={<ListIcon className="size-8" />}
            head="کالایی برای مشاهده وجود ندارد"
            desc="به فروشگاه بروید و کالایی که همیشه استفاده میکنید را داخل لیست قرار دهید تا دسترسی به آسان تر از همیشه باشد"
            buttons={
              <ButtonLink
                href="/market"
                text={"فروشگاه"}
                variant={"secondary"}
              />
            }
          />
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            <WishlistsGrid sorted={sorted} wishlists={wishlists.data} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
