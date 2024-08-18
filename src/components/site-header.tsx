import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col text-lg font-bold leading-[24px]">
            <span>Table</span>
            <span>Harmony</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
