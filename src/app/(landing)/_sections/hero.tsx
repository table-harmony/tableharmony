import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container py-8 md:py-12 md:pb-8 lg:py-20">
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="space-y-8">
          <Separator className="h-1 w-[100px] rounded-md bg-orange-500" />

          <div className="space-y-2">
            <h1 className="text-3xl font-semibold md:text-4xl xl:text-5xl">
              Hi, I am <span className="text-gradient">TableHarmony</span>
            </h1>
            <p className="max-w-lg text-balance text-sm text-muted-foreground md:text-base">
              I&apos;m a fullstack engineer and game developer.
            </p>
          </div>

          <Button size="lg">Button</Button>
        </div>

        <Image src="/logo.jpg" alt="hero" width="400" height="400" />
      </div>
    </section>
  );
}
