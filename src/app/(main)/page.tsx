import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-4">
      <p className="font-semibold text-lg">Projects</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link
            href={siteConfig.url}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            TableHarmony
          </Link>
          <span className="text-muted-foreground text-sm">My portfolio</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://devharmony.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            DevHarmony
          </Link>
          <span className="text-muted-foreground text-sm">Bagrut project</span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://blogharmony.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            BlogHarmony
          </Link>
          <span className="text-muted-foreground text-sm">Blog</span>
        </div>
      </div>
    </section>
  );
}
