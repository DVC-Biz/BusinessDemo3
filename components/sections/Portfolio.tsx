import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectImage from "@/public/hero.png";

export default function Portfolio() {
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "strategy", label: "Strategy" },
    { id: "consulting", label: "Consulting" },
    { id: "finance", label: "Finance" },
  ];

  const projects = [
    {
      id: 1,
      title: "Global Expansion Strategy",
      category: "strategy",
      image: "/placeholder.svg?height=400&width=600",
      client: "TechCorp International",
    },
    {
      id: 2,
      title: "Operational Efficiency Improvement",
      category: "consulting",
      image: "/placeholder.svg?height=400&width=600",
      client: "Manufacturing Solutions Inc.",
    },
    {
      id: 3,
      title: "Financial Restructuring",
      category: "finance",
      image: "/placeholder.svg?height=400&width=600",
      client: "Global Retail Group",
    },
    {
      id: 4,
      title: "Market Entry Analysis",
      category: "strategy",
      image: "/placeholder.svg?height=400&width=600",
      client: "Innovative Startups Ltd.",
    },
    {
      id: 5,
      title: "Merger & Acquisition Advisory",
      category: "finance",
      image: "/placeholder.svg?height=400&width=600",
      client: "Enterprise Holdings",
    },
    {
      id: 6,
      title: "Business Process Optimization",
      category: "consulting",
      image: "/placeholder.svg?height=400&width=600",
      client: "Healthcare Systems Corp.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="w-full py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">Our Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Featured case studies
            </h2>
            <p className="text-muted-foreground">
              Explore our successful projects and see how we've helped
              businesses like yours achieve their goals.
            </p>
          </div>
          <Button variant="outline" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-start gap-2">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="rounded-full"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <Image
                    src={ProjectImage}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      Client: {project.client}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category.id)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={ProjectImage}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <h3 className="text-lg font-medium text-white">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          Client: {project.client}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
