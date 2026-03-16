import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  return <HomeClient initialDark={isDark} />;
}
