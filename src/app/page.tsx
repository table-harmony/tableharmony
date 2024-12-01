import { projects, techs } from "@/config/site";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function LandingPage() {
  return (
    <>
      <SiteHeader />
      <div className="flex-1 space-y-10">
        <div className="animate-slide-from-down-and-fade-2 space-y-3">
          <span className="font-semibold">About me</span>
          <p className="text-balance text-muted-foreground">
            Hi! I am Liron. I am based at Haifa, Israel.
          </p>
        </div>

        <div className="animate-slide-from-down-and-fade-3 space-y-3">
          <span className="font-semibold">Featured projects</span>
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Link
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label="project"
                className={`flex items-center gap-4 rounded-md p-3 px-4 transition hover:bg-muted`}
              >
                <Image
                  src={project.image}
                  alt="project"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col">
                  <span>{project.name}</span>
                  <span className="text-muted-foreground">
                    {project.description}
                  </span>
                </div>
              </Link>
            ))}

          <Button variant="link" className="w-full justify-end" asChild>
            <Link href="/projects">All projects</Link>
          </Button>
        </div>

        <div className="animate-slide-from-down-and-fade-4 space-y-3">
          <span className="font-semibold">Featured techs</span>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {techs
              .filter((tech) => tech.featured)
              .map((tech) => (
                <div
                  key={tech.name}
                  className="cursor-pointer rounded-lg border p-4 hover:border-primary hover:duration-200"
                >
                  <div className="flex flex-row items-center space-x-4">
                    <Image
                      alt="tech picture"
                      src={tech.image}
                      width="50"
                      height="50"
                    />
                    <div className="flex flex-col overflow-hidden">
                      <span className="font-bold text-primary">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <Button variant="link" className="w-full justify-end" asChild>
            <Link href="/techs">All techs</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
