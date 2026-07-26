import { getUser } from "@/actions/user/get-user";
import { ErrorAll } from "@/components/Error-all";
import { EditUserInfo } from "@/components/profile/personal-info/form";

export default async function PersonalInfo() {
  const result = await getUser();

  if (!result.success) return <ErrorAll error_message={result.error} />;

  return <EditUserInfo user_data={result.data} />;
}
