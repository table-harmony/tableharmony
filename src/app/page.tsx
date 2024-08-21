import { projects } from "@/config/projects";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <span className="font-semibold">About me</span>
        <p className="text-balance text-muted-foreground">
          Hi! I am Liron. I am based at Haifa, Israel.
        </p>
      </div>

      <div className="space-y-3">
        <span className="font-semibold">Features projects</span>
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
              <span className="text-muted-foreground">
                {project.description}
              </span>
            </div>
          </Link>
        ))}

        <Button variant="link" className="w-full justify-end">
          <Link href="/projects">All projects</Link>
        </Button>
      </div>
    </div>
  );
}
