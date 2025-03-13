import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImage from "@/public/hero.png";

export default function Hero() {
  return (
    <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">
                Premium Business Solutions
              </span>
            </div>
            <h1 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl">
              Elevate your business with strategic excellence
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-relaxed">
              We help ambitious businesses like yours generate more profits by
              building awareness, driving web traffic, connecting with
              customers, and growing overall sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 via-primary/0 to-primary/20 rounded-2xl blur-2xl opacity-50 -z-10"></div>
            <Image
              src={HeroImage}
              width={600}
              height={600}
              alt="Business Strategy"
              className="rounded-2xl border shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm -z-10"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
