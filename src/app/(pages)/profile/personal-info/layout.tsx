import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "اطلاعات شما",
  description: "اطلاعات دقیق و کامل در این صفحه",
};

export default function PersonalnfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
