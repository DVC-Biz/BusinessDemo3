"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We have experience working with clients across a wide range of industries, including technology, healthcare, finance, manufacturing, retail, and professional services. Our team includes experts with specialized knowledge in various sectors, allowing us to provide tailored solutions regardless of your industry.",
    },
    {
      question: "How long does the typical engagement last?",
      answer:
        "The duration of our engagements varies depending on the scope and complexity of the project. Initial strategic consultations typically last 2-3 months, while comprehensive business transformations may extend to 12 months or more. We work with you to establish clear timelines and milestones at the outset of our engagement.",
    },
    {
      question: "Do you work with small businesses or only large enterprises?",
      answer:
        "We work with businesses of all sizes, from startups and small businesses to mid-market companies and large enterprises. Our solutions are scalable and can be tailored to meet the specific needs and budget constraints of your organization, regardless of its size.",
    },
    {
      question: "What is your approach to client confidentiality?",
      answer:
        "We take client confidentiality extremely seriously. All our consultants sign strict confidentiality agreements, and we implement robust data security measures to protect your sensitive information. We never share client information without explicit permission, and we're happy to sign custom NDAs if required.",
    },
    {
      question: "How do you measure the success of your engagements?",
      answer:
        "We establish clear, measurable objectives at the beginning of each engagement and track progress against these metrics throughout our work together. Depending on the nature of the project, success metrics might include revenue growth, cost reduction, improved operational efficiency, enhanced customer satisfaction, or other key performance indicators relevant to your business goals.",
    },
    {
      question:
        "Can we customize the service packages to fit our specific needs?",
      answer:
        "Absolutely. While we offer structured service packages to provide clarity on our offerings, we understand that every business has unique challenges and requirements. We're happy to customize our services to address your specific needs and create a tailored solution that aligns with your objectives and budget.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
            <span className="block h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-2 font-medium">FAQ</span>
          </div>
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Find answers to common questions about our services, process, and
            how we can help your business succeed.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
