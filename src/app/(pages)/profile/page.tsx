import { auth, signOut } from "@/auth";

export default async function ProfileUi() {
  const session = await auth();
  console.log(session); // check terminal

  if (!session) return <div>لاگین نیستی</div>;

  return (
    <div>
      خوش اومدی {session.user?.phone}{" "}
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
