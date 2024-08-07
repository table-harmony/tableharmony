import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-4">
      <Item
        title="One Million Checkboxes"
        subtitle="Inspired by eieio.games"
        to="https://onemillioncheckboxes.vercel.app/"
      />
      <section className="flex flex-col gap-4">
        <p className="text-lg font-semibold">Harmonial Projects</p>
        <Item
          title="DevHarmony"
          subtitle="Final project at the Alliance computer science program"
          to="https://devharmony.vercel.app/"
        />
        <Item
          title="KitHarmony"
          subtitle="Starter kits for developers"
          to="https://kitharmony.vercel.app"
        />
        <Item
          title="BlogHarmony"
          subtitle="Blog with authors followers and more"
          to="https://blogharmony.vercel.app"
        />
        <Item
          title="AspHarmony"
          subtitle="ASP.NET web application project"
          to="https://github.com/table-harmony/aspharmony"
        />
        <Item
          title="DisHarmony"
          subtitle="Socialize via voice chats and more"
          to="https://disharmony.vercel.app"
        />
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Game Projects</h3>
        <Item
          title="GamingAdventures"
          subtitle="Cool games using python library PYGAME"
          to="https://github.com/table-harmony/gamingadventures"
        />
      </section>
      <Separator />
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Extra Projects</h3>
        <Item
          title="NyanCat"
          subtitle="Made only using CSS and HTML"
          to="https://table-harmony.github.io/nyan-cat/"
        />
        <Item
          title="Cards"
          subtitle="Followed from Hyperplexed, Made from HTML, CSS and JS"
          to="https://table-harmony.github.io/cards"
        />
      </section>
    </main>
  );
}

interface ItemProps {
  title: string;
  subtitle: string;
  to: string;
}

function Item({ title, subtitle, to }: ItemProps) {
  return (
    <div>
      <Link
        href={to}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-4"
      >
        {title}
      </Link>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
