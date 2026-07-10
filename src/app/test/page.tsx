import { auth } from "@/auth";

export default async function Test() {
  const session = await auth();
  console.log(session);
  return <div></div>;
}
