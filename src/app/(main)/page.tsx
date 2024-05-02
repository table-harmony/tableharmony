import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-4">
      <p className="font-semibold text-lg">Harmonial Projects</p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link
            href="https://devharmony.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            DevHarmony
          </Link>
          <span className="text-muted-foreground text-sm">
            Bagrut project at the Alliance computer science program.
          </span>
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
          <span className="text-muted-foreground text-sm">
            Blog project with posts about the process of web development.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/table-harmony/aspharmony"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            AspHarmony
          </Link>
          <span className="text-muted-foreground text-sm">
            ASP.NET web application project.
          </span>
        </div>
      </div>
    </section>
  );
}
