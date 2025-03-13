"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real implementation, you would send the form data to your API
      console.log("Form submitted:", formData);

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="block h-2 w-2 rounded-full bg-primary"></span>
              <span className="ml-2 font-medium">Contact Us</span>
            </div>
            <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
              Let's discuss how we can help your business
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below to get in touch with our team. We'll get
              back to you within 24 hours to schedule a consultation.
            </p>

            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Visit our office</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    123 Business Avenue, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email us</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    info@prestige.com
                    <br />
                    support@prestige.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call us</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    +1 (555) 123-4567
                    <br />
                    Mon-Fri from 9am to 6pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border">
            <CardHeader>
              <CardTitle className="font-serif">Send us a message</CardTitle>
              <CardDescription>
                We'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center space-y-4 py-12">
                  <div className="rounded-full bg-primary/10 p-3">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium">Message Sent!</h3>
                  <p className="text-center text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSuccess(false)} className="mt-4">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.service}
                    >
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategic-planning">
                          Strategic Planning
                        </SelectItem>
                        <SelectItem value="financial-analysis">
                          Financial Analysis
                        </SelectItem>
                        <SelectItem value="organizational-development">
                          Organizational Development
                        </SelectItem>
                        <SelectItem value="business-consulting">
                          Business Consulting
                        </SelectItem>
                        <SelectItem value="market-research">
                          Market Research
                        </SelectItem>
                        <SelectItem value="performance-optimization">
                          Performance Optimization
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  {error && (
                    <div className="rounded-md bg-destructive/10 p-3 text-destructive">
                      {error}
                    </div>
                  )}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
