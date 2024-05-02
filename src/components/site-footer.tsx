import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";

export function SiteFooter() {
  return (
    <footer className="flex h-14 items-center justify-end">
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
      </nav>
    </footer>
  );
}
