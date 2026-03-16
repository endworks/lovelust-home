import type { Metadata } from "next";
import { cookies } from "next/headers";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "LoveLust: Sexual Health",
  description:
    "LoveLust lets you track your sexual encounters and birth control methods, ensuring a healthier sexual life. Available on iOS and Android.",
  openGraph: {
    url: "/",
  },
};

export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  return <HomeClient initialDark={isDark} />;
}
