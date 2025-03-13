"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Essential",
      description:
        "For small businesses looking to establish a strategic foundation.",
      monthlyPrice: "$1,499",
      annualPrice: "$14,990",
      features: [
        "Initial business assessment",
        "Basic strategic planning",
        "Monthly consultation (2 hours)",
        "Quarterly performance review",
        "Email support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description:
        "For growing businesses seeking comprehensive strategic support.",
      monthlyPrice: "$2,999",
      annualPrice: "$29,990",
      features: [
        "Comprehensive business assessment",
        "Advanced strategic planning",
        "Weekly consultation (4 hours)",
        "Monthly performance review",
        "Priority email and phone support",
        "Market research and analysis",
        "Competitor benchmarking",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description:
        "For established organizations requiring premium strategic partnership.",
      monthlyPrice: "$5,999",
      annualPrice: "$59,990",
      features: [
        "Enterprise-wide assessment",
        "Comprehensive strategic planning",
        "Dedicated strategic advisor",
        "Unlimited consultation hours",
        "Weekly performance review",
        "24/7 priority support",
        "Custom market research",
        "Executive team workshops",
        "Board presentation support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
            <span className="block h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-2 font-medium">Pricing</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Transparent pricing for your business needs
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Choose the plan that's right for your business. All plans include
            our core strategic services and can be customized to meet your
            specific requirements.
          </p>

          <div className="flex items-center space-x-4 mt-6">
            <span
              className={`text-sm ${
                !isAnnual
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              id="billing-toggle"
            />
            <div className="flex items-center">
              <Label
                htmlFor="billing-toggle"
                className={`text-sm ${
                  isAnnual
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Annual
              </Label>
              <span className="ml-2 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border ${
                plan.popular ? "border-primary shadow-lg relative" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-serif text-2xl">
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <span className="font-serif text-4xl font-medium">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {isAnnual ? "/year" : "/month"}
                  </span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
