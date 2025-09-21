"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ProjectForm } from "@/modules/home/ui/components/project-form"
import { ProjectsList } from "@/modules/home/ui/components/projects-list"

// Sections
import PricingPage from "./pricing/page"
import FAQPage from "./faq/page"
import DevelopersPage from "./developers/page"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-[16vh] 2xl:py-48 max-w-5xl mx-auto"
      >
        <Image
          src="/logo.svg"
          alt="Lumina"
          width={80}
          height={80}
          className="hidden md:block mb-6"
        />
        <h1 className="text-3xl md:text-6xl font-bold">
          Build something with Lumina
        </h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Create apps and websites simply by chatting with AI
        </p>
        <div className="mt-10 w-full max-w-3xl">
          <ProjectForm />
        </div>
      </motion.section>

      {/* Projects List */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto w-full py-16"
      >
        <ProjectsList />
      </motion.section>

      {/* Pricing */}
      <AnimatedSection>
        <PricingPage />
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection>
        <FAQPage />
      </AnimatedSection>

      {/* Developers */}
      <AnimatedSection>
        <DevelopersPage />
      </AnimatedSection>

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-sm text-gray-400 border-t">
        © {new Date().getFullYear()} Lumina — Built by Team No.39 From VIT Bhopal University
      </footer>
    </div>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto w-full py-20 border-t"
    >
      {children}
    </motion.section>
  )
}
