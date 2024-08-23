import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mb-20 mt-10 flex flex-col items-center gap-2 py-6 md:mt-16 md:px-8 md:py-0">
      <div className="flex items-center justify-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <GithubIcon className="size-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon className="size-4" />
          </Link>
        </Button>
      </div>
      <Button className="w-fit" variant="link">
        <Link href="mailto:lironkaner2007@gmail.com">
          lironkaner2007@gmail.com
        </Link>
      </Button>
    </footer>
  );
}
