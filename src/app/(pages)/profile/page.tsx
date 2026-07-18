import { getUser } from "@/actions/user/get-user";
import AddressAlert from "@/components/profile/address-alert";
import OrderCardInProfile from "@/components/profile/order-card-in-profile";

export default async function ProfileUi() {
  const result = await getUser();
  if (!result.success) return <div>{result.error}</div>;

  const user = result.data;

  return (
    <div className="space-y-4">
      {!user.address ||
      user.address.trim() === "" ||
      typeof user.address !== "string" ? (
        <AddressAlert />
      ) : null}

      <OrderCardInProfile />
    </div>
  );
}
