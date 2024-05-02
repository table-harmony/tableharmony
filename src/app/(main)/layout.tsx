import { SiteHeader } from "@/components/site-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container max-w-2xl mt-16 flex flex-col gap-10">
      <SiteHeader />
      {children}
    </div>
  );
}
