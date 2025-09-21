"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Is Lumina free to use?",
      answer:
        "Yes, Lumina offers a Free plan to help you get started. Upgrade to Pro or Enterprise for advanced features and unlimited generations.",
    },
    {
      question: "Do I need coding skills?",
      answer:
        "No coding is required! Lumina generates apps and websites from your prompts. Developers can still customize the generated projects if they want to.",
    },
    {
      question: "Can I deploy my projects?",
      answer:
        "Yes, you can deploy directly from Lumina or export your code to host it anywhere you prefer.",
    },
    {
      question: "What platforms does Lumina support?",
      answer:
        "Lumina generates responsive websites and apps that run across web, desktop, and mobile platforms.",
    },
  ]

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
      {/* Background dots (like homepage) */}
      <div className="absolute inset-0 -z-10 size-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Heading */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">
          Everything you need to know about Lumina. Still have questions? Reach
          out below.
        </p>
      </div>

      {/* Accordion FAQ */}
      <div className="w-full max-w-2xl space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border bg-white/5 dark:bg-black/20 px-4"
            >
              <AccordionTrigger className="text-lg font-medium py-4 hover:text-violet-500 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact Email */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Still have questions? Contact us at{" "}
          <a
            href="mailto:luminavitbhopal@gmail.com"
            className="text-violet-500 hover:underline"
          >
            luminavitbhopal@gmail.com
          </a>
        </p>
      </div>
    </main>
  )
}
