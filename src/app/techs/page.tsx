import { BackButton } from "@/components/back-button";
import { techs } from "@/config/site";
import Image from "next/image";

export default function TechsPage() {
  const categories: string[] = ["frontend", "backend", "database"];

  return (
    <div>
      <BackButton />
      <div className="animate-slide-from-down-and-fade-2 space-y-10">
        <span className="pb-4 text-2xl font-semibold">All techs</span>
        {categories.map((category, index) => (
          <div
            key={category}
            className={`animate-slide-from-down-and-fade-${index + 2} space-y-2`}
          >
            <span className="font-semibold capitalize">{category}</span>

            <div className="space-y-3">
              {techs
                .filter((tech) => tech.category === category)
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
                        <span className="h-10 truncate text-balance text-sm text-muted-foreground">
                          {tech.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
