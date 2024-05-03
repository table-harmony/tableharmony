"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "./ui/tooltip";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
