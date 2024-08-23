export const siteConfig = {
  name: "TableHarmony",
  url: "https://tableharmony.io",
  author: "liron kaner",
  description: "portfolio",
  links: {
    github: "https://github.com/table-harmony",
    linkedin:
      "https://www.linkedin.com/in/%D7%9C%D7%99%D7%A8%D7%95%D7%9F-%D7%9B%D7%A0%D7%A8-2a65892b7/",
  },
};

export type SiteConfig = typeof siteConfig;

export const projects = [
  {
    featured: true,
    name: "DevHarmony",
    description: "Manage your schools in one place.",
    image: "/icons/default.png",
    link: "https://devharmony.io/",
  },
  {
    featured: true,
    name: "KitHarmony",
    description: "Modern, fully built and polished stacks.",
    image: "/icons/default.png",
    link: "https://kitharmony.vercel.app/",
  },
  {
    featured: true,
    name: "OneMillionCheckboxes",
    description: "Inspired by eieio games.",
    image: "/icons/default.png",
    link: "https://onemillioncheckboxes.vercel.app/",
  },
  {
    featured: true,
    name: "Gaming Adventures",
    description: "All my old python games.",
    image: "/icons/default.png",
    link: "https://github.com/table-harmony/gamingadventures",
  },
];

export const techs = [
  {
    featured: true,
    name: "React",
    description:
      "Building interactive UIs for dynamic web applications over 2 years.",
    image: "/icons/techs/react.svg",
    category: "frontend",
  },
  {
    featured: true,
    name: "Next.js",
    description:
      "Developing server-side rendered and statically generated web apps for 2 years.",
    image: "/icons/techs/nextjs.svg",
    category: "frontend",
  },
  {
    featured: false,
    name: "Astro",
    description:
      "Crafting high-performance, content-focused websites with Astro.",
    image: "/icons/techs/astro.svg",
    category: "frontend",
  },
  {
    featured: false,
    name: "Drizzle",
    description: "Creating scalable backend solutions with Drizzle ORM.",
    image: "/icons/techs/drizzle.svg",
    category: "backend",
  },
  {
    featured: false,
    name: "Prisma",
    description: "Designing and managing robust databases with Prisma.",
    image: "/icons/techs/prisma.svg",
    category: "backend",
  },
  {
    featured: true,
    name: "Postgresql",
    description:
      "Implementing and maintaining relational databases with PostgreSQL.",
    image: "/icons/techs/postgres.svg",
    category: "database",
  },
  {
    featured: false,
    name: "Mongodb",
    description: "Utilizing MongoDB for flexible, scalable NoSQL data storage.",
    image: "/icons/techs/mongo.svg",
    category: "database",
  },
  {
    featured: true,
    name: "Convex",
    description:
      "Developing real-time, serverless database applications with Convex.",
    image: "/icons/techs/convex.svg",
    category: "database",
  },
];
