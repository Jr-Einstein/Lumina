"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ParticlesBackground from "@/components/global/particles-background"

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Great for getting started with Lumina",
      features: ["Basic AI generations", "Community support", "Limited history"],
      highlight: false,
      image: "/pricing/free.png",
    },
    {
      name: "Pro",
      price: "$19/mo",
      description: "For professionals who need more power",
      features: [
        "Unlimited generations",
        "Priority support",
        "Custom exports",
        "Collaboration tools",
      ],
      highlight: true,
      image: "/pricing/pro.png",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for companies",
      features: [
        "Dedicated manager",
        "Admin dashboard",
        "Custom integrations",
        "24/7 premium support",
      ],
      highlight: false,
      image: "/pricing/enterprise.png",
    },
  ]

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Dotted Background */}
      <div className="absolute inset-0 -z-10 size-full bg-background 
        dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] 
        bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
        [background-size:16px_16px]" 
      />

      {/* Content */}
      <div className="text-center max-w-2xl mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the plan that fits your workflow and scale as you grow.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl w-full relative z-10">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 ${
              plan.highlight ? "border-violet-500 shadow-lg" : ""
            }`}
          >
            {/* Image */}
            <Image
              src={plan.image}
              alt={plan.name}
              width={80}
              height={80}
              className="mb-4 rounded-lg"
            />

            {/* Title */}
            <h2 className="text-2xl font-semibold">{plan.name}</h2>
            <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

            {/* Price */}
            <p className="text-3xl font-bold mb-6">{plan.price}</p>

            {/* Features */}
            <ul className="text-sm text-left space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              className={`w-full ${
                plan.highlight
                  ? "bg-violet-600 hover:bg-violet-700 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-white"
              }`}
            >
              {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
