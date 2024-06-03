import "./globals.css";
import { Rubik as FontSans } from "next/font/google";

import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ContextProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <div className="container mt-16 flex max-w-2xl flex-col gap-10">
              <SiteHeader />
              {children}
              <SiteFooter />
            </div>
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
