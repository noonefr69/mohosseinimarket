import { auth } from "@/auth";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { toPersianDigits } from "@/utils/to-persian-digits";
import SignOutDropdown from "../header/mid/user-dropdown/sign-out-dropdown";
import ProfileLinks from "./profile-links";

export default async function ProfNavigation() {
  const session = await auth();
  return (
    <Card className="col-span-12 order-2 lg:order-1 lg:col-span-3">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">
          {toPersianDigits(session?.user.phone ?? "")}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <ProfileLinks />
        <SignOutDropdown />
      </CardContent>
    </Card>
  );
}
