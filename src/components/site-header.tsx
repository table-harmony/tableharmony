import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-lg">TableHarmony</h1>
        <h2 className="text-sm text-muted-foreground">web developer</h2>
      </div>
      <nav className="flex gap-1">
        <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.linkedin className="h-4 w-4" />
            <span className="sr-only">Linkedin</span>
          </div>
        </Link>
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-9 px-0"
            )}
          >
            <Icons.gitHub className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </div>
        </Link>
        <ModeToggle />
      </nav>
    </header>
  );
}
