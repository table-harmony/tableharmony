import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <p className="font-semibold text-lg">Harmonial Projects</p>
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
      </section>
      <section className="flex flex-col gap-4">
        <p className="font-semibold text-lg">Adventurous Games</p>
        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/table-harmony/breakoutadventure"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            BreakoutAdventure
          </Link>
          <span className="text-muted-foreground text-sm">
            My first game using pygame.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/table-harmony/chessadventure"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            ChessAdventure
          </Link>
          <span className="text-muted-foreground text-sm">
            Very poorly designed Chess application.
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <p className="font-semibold text-lg">Others</p>
        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/table-harmony/nyan-cat"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            NyanCat
          </Link>
          <span className="text-muted-foreground text-sm">
            Made out of pure CSS and HTML.
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/table-harmony/cards"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Cards
          </Link>
          <span className="text-muted-foreground text-sm">
            Made of HTML, CSS and JS. Heavily inspired from Hyperplexed.
          </span>
        </div>
      </section>
    </main>
  );
}
