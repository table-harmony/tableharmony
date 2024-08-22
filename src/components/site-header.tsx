import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="mb-10 flex items-center justify-between md:mb-16 md:px-6">
      <div className="flex items-center space-x-3">
        <Image
          src="/logo.jpg"
          alt="profile"
          width={100}
          height={100}
          className="size-12 select-none rounded-md"
          priority
        />
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{siteConfig.name}</span>
          <span className="text-muted-foreground">Software engineer</span>
        </div>
      </div>
      <div className="px-1">
        <ModeToggle />
      </div>
    </header>
  );
}
