"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface BadgeProps {
  href: string;
  content: string;
  icon?: React.ReactElement;
}

export function Badge({ href, content, icon }: BadgeProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link href={href} target="_blank" rel="noreferrer">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "w-6 h-6 px-0"
            )}
          >
            {icon}
            <span className="sr-only">badge</span>
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </Tooltip>
  );
}
