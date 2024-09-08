import "@/styles/globals.css";
import { Poppins as FontSans } from "next/font/google";

import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";

import NextToploader from "nextjs-toploader";
import { SiteFooter } from "@/components/site-footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TableHarmony",
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
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ContextProvider>
          <div className="mx-auto w-full max-w-3xl px-4 pt-4 md:pt-10 lg:px-20">
            <div className="relative flex min-h-screen flex-col bg-background">
              <NextToploader showSpinner={false} />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </div>

          <div className="pointer-events-none bottom-0 left-0 hidden h-28 w-full bg-primary-foreground [mask-image:linear-gradient(transparent,#000000)] dark:block md:fixed" />
        </ContextProvider>
      </body>
    </html>
  );
}
