import { projects } from "@/config/site";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="space-y-3">
      <span className="font-semibold">All projects</span>
      {projects.map((project) => (
        <Link
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label="project"
          className="flex items-center gap-4 rounded-md p-3 px-4 transition hover:bg-muted"
        >
          <Image src={project.image} alt="project" width="45" height="45" />
          <div className="flex flex-col">
            <span>{project.name}</span>
            <span className="text-muted-foreground">{project.description}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
