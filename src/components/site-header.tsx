import { ModeToggle } from "@/components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="flex h-14 items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="font-black text-2xl">TableHarmony</h1>
        <h2 className="text-sm font-semibold text-muted-foreground">
          Web developer
        </h2>
      </div>
      <ModeToggle />
    </header>
  );
}
