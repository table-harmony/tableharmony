import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="text-lg font-medium lg:text-2xl">
          Table Harmony
        </Link>
      </div>
    </header>
  );
}
