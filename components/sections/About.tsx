import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import XPost from "@/public/x_post.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src={XPost}
                  width={300}
                  height={400}
                  alt="Office"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
                <Image
                  src={XPost}
                  width={300}
                  height={300}
                  alt="Team meeting"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
              </div>
              <div className="pt-8 space-y-4">
                <Image
                  src={XPost}
                  width={300}
                  height={300}
                  alt="Workspace"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
                <Image
                  src={XPost}
                  width={300}
                  height={400}
                  alt="Collaboration"
                  className="rounded-lg shadow-md h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">About Us</span>
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              We've been helping businesses succeed since 2010
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Prestige Business Solutions was founded with a simple mission: to
              help businesses reach their full potential. Over the past decade,
              we've worked with hundreds of companies across various industries,
              from startups to Fortune 500 corporations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experts brings decades of combined experience in
              business strategy, marketing, finance, and operations. We take
              pride in our personalized approach, tailoring our solutions to
              meet the unique needs of each client.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <p className="font-serif text-4xl font-medium text-primary">
                  250+
                </p>
                <p className="text-sm text-muted-foreground">
                  Clients worldwide
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-primary">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">
                  Client satisfaction
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-primary">
                  15+
                </p>
                <p className="text-sm text-muted-foreground">
                  Years of experience
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl font-medium text-primary">
                  40+
                </p>
                <p className="text-sm text-muted-foreground">
                  Industry experts
                </p>
              </div>
            </div>
            <Button className="group mt-4">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
