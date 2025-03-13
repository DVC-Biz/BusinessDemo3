import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  LineChart,
  PieChart,
  Target,
  Users,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Strategic Planning",
      description:
        "Develop comprehensive business strategies aligned with your goals and market opportunities.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Financial Analysis",
      description:
        "Gain insights into your financial performance and identify opportunities for improvement.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Organizational Development",
      description:
        "Build high-performing teams and optimize your organizational structure.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Business Consulting",
      description:
        "Expert guidance to solve complex business challenges and drive sustainable growth.",
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Market Research",
      description:
        "Comprehensive analysis of market trends, competitors, and customer preferences.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description:
        "Streamline operations and improve efficiency across all business functions.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">Our Services</span>
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Comprehensive solutions for your business needs
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of services designed to help your business
              thrive in today's competitive landscape.
            </p>
          </div>
          <Button variant="outline" className="group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border transition-all hover:shadow-md hover:border-primary/50"
            >
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
