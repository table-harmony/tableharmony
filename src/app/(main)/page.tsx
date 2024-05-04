import { Badge } from "@/components/badge";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Harmonial Projects</h3>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">DevHarmony</h4>
            <div className="flex gap-2">
              <Badge
                href="https://github.com/table-harmony/devharmony"
                icon={<Icons.github className="h-3 w-3" />}
                content="Github"
              />
              <Badge
                href="https://devharmony.vercel.app/"
                icon={<Icons.vercel className="h-3 w-3" />}
                content="Vercel"
              />
            </div>
          </header>
          <footer className="text-muted-foreground text-sm">
            Bagrut project at the Alliance computer science program
          </footer>
        </article>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">BlogHarmony</h4>
            <div className="flex gap-2">
              <Badge
                href="https://github.com/table-harmony/blogharmony"
                icon={<Icons.github className="h-3 w-3" />}
                content="Github"
              />
              <Badge
                href="https://blogharmony.vercel.app/"
                icon={<Icons.vercel className="h-3 w-3" />}
                content="Vercel"
              />
            </div>
          </header>
          <footer className="text-muted-foreground text-sm">
            Blog project with posts about the process of web development
          </footer>
        </article>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">AspHarmony</h4>
            <Badge
              href="https://github.com/table-harmony/aspharmony"
              icon={<Icons.github className="h-3 w-3" />}
              content="Github"
            />
          </header>
          <footer className="text-muted-foreground text-sm">
            ASP.NET web application project
          </footer>
        </article>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">GamingHarmony</h4>
            <div className="flex gap-2">
              <Badge
                href="https://github.com/table-harmony/gamingharmony"
                icon={<Icons.github className="h-3 w-3" />}
                content="Github"
              />
              <Badge
                href="https://gamingharmony.vercel.app/"
                icon={<Icons.vercel className="h-3 w-3" />}
                content="Vercel"
              />
            </div>
          </header>
          <footer className="text-muted-foreground text-sm">
            Gaming hub plenty of games
          </footer>
        </article>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Adventurous Games</h3>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">GamingAdventures</h4>
            <Badge
              href="https://github.com/table-harmony/gamingadventures"
              icon={<Icons.github className="h-3 w-3" />}
              content="Github"
            />
          </header>
          <footer className="text-muted-foreground text-sm">
            Lots of cool games with python library PYGAME
          </footer>
        </article>
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <h3 className="font-semibold text-lg">Others</h3>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">NyanCat</h4>
            <div className="flex gap-2">
              <Badge
                href="https://github.com/table-harmony/nyan-cat"
                icon={<Icons.github className="h-3 w-3" />}
                content="Github"
              />
              <Badge
                href="https://table-harmony.github.io/nyan-cat/"
                icon={<Icons.html className="h-3 w-3" />}
                content="Github pages"
              />
            </div>
          </header>
          <footer className="text-muted-foreground text-sm">
            Awesome and made of only CSS and HTML
          </footer>
        </article>
        <article className="flex flex-col gap-2">
          <header className="flex items-center justify-between">
            <h4 className="underline underline-offset-4">Cards</h4>
            <div className="flex gap-2">
              <Badge
                href="https://github.com/table-harmony/cards"
                icon={<Icons.github className="h-3 w-3" />}
                content="Github"
              />
              <Badge
                href="https://table-harmony.github.io/cards"
                icon={<Icons.html className="h-3 w-3" />}
                content="Github pages"
              />
            </div>
          </header>
          <footer className="text-muted-foreground text-sm">
            Heavily inspired from Hyperplexed, Made from HTML, CSS and JS
          </footer>
        </article>
      </section>
    </main>
  );
}
