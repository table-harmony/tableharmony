"use client";

import { MenuIcon, SquareGanttChartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import useMediaQuery from "@/hooks/use-media-query";
import { usePathname } from "next/navigation";

export function MenuButton() {
  const { isMobile } = useMediaQuery();
  const path = usePathname();

  if (!isMobile)
    return (
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="ghost"
          className={path === "/projects" ? "bg-muted" : ""}
          asChild
        >
          <Link
            href="/projects"
            className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
          >
            <SquareGanttChartIcon className="size-4" />
            Projects
          </Link>
        </Button>
      </div>
    );

  return (
    <Popover>
      <PopoverTrigger>
        <Button size="icon" variant="ghost" aria-label="menu">
          <MenuIcon className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="grid space-y-4 text-sm text-muted-foreground"
        align="end"
      >
        <Link
          href="/projects"
          className="flex items-center gap-2 hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <SquareGanttChartIcon className="size-4" />
          Projects
        </Link>
      </PopoverContent>
    </Popover>
  );
}
