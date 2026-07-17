import { getUser } from "@/actions/user/get-user";
import { signOut } from "@/auth";

export default async function ProfileUi() {
  const user = await getUser();
  console.log(user);
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign out</button>
      </form>
    </div>
  );
}
