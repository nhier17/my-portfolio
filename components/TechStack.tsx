import Image from "next/image";
import { Card } from "./ui/card";
import { techStackIcons } from "@/data";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const TechStack = () => {
  return (
    <section className="section-padding">
    <h2 className="heading mb-4">
    My Tech Stack
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <TooltipProvider> 
    {techStackIcons.map((category) => (
            <Card
              key={category.name}
              className="tech-category p-6 transform-gpu will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.imgSrc.map((src, index) => (
                  <Tooltip key={src}>
                    <TooltipTrigger asChild>
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-secondary/30 hover:bg-secondary/50 transition-colors p-2 flex items-center justify-center">
                        <Image
                          src={src}
                          alt={`${category.name} technology ${index + 1}`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{src.split("/").pop()?.replace(".svg", "")}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </Card>
          ))}
        </TooltipProvider>
    </div>
  </section>
  );
};

export default TechStack;