import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business, goals, challenges, and market position through in-depth consultations and research.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Our team creates a customized strategy tailored to your specific needs, leveraging our expertise and industry best practices.",
    },
    {
      number: "03",
      title: "Implementation",
      description:
        "We work closely with your team to implement the strategy, providing guidance and support throughout the process.",
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description:
        "We continuously monitor progress, measure results, and make adjustments to ensure optimal performance and outcomes.",
    },
  ];

  return (
    <section
      id="process"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">Our Process</span>
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              How we deliver exceptional results
            </h2>
            <p className="text-muted-foreground">
              Our proven four-step process ensures we consistently deliver value
              and achieve your business objectives.
            </p>
          </div>
          <Button variant="outline" className="group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="relative mt-16">
          {/* Process line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-1/2 md:-ml-px"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative grid items-start md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`mb-8 md:mb-0 ${
                    index % 2 === 0 ? "md:text-right md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="space-y-4">
                    <span className="font-serif text-5xl font-light text-primary/50">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-medium">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                <div
                  className={`absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-full border bg-background md:left-1/2 md:-ml-8 ${
                    index % 2 === 0 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <span className="font-serif text-xl font-medium">
                    {step.number}
                  </span>
                </div>

                <div
                  className={index % 2 === 0 ? "md:order-2" : "md:order-1"}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
