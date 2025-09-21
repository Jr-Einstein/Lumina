"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const developers = [
  {
    name: "Aman Kumar Singh",
    role: "AI/Integration Engineer",
    details:
      "Integrated AI agents, built prompt-to-code generation, and enabled live preview within Lumina.",
    image: "/developers/aman.jpg",
  },
  {
    name: "Mahi Jain",
    role: "Frontend/UI Engineer",
    details:
      "Developed responsive UI components, page layouts, and interactive flows using Tailwind and Next.js.",
    image: "/developers/mahi.jpg",
  },
  {
    name: "Subham Agarwal",
    role: "Backend/API Engineer",
    details:
      "Implemented API endpoints, managed data/business logic, and worked with Neon + TypeScript models.",
    image: "/developers/subham.jpg",
  },
  {
    name: "Gaurav Garg",
    role: "DevOps/Deployment Engineer",
    details:
      "Handled Vercel pipeline, deployment configs, infra & secrets setup, ensuring smooth production builds.",
    image: "/developers/gaurav.jpg",
  },
]

export default function DevelopersPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden">
      {/* Full-screen dotted background */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-background 
        dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] 
        bg-[radial-gradient(#dadde2_1px,transparent_1px)] 
        [background-size:16px_16px]"
      />

      {/* Section Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Meet the Developers</h1>
        <p className="text-muted-foreground mb-6">
          Lumina AI SaaS is a project under the supervision of{" "}
          <span className="font-semibold">Professor Ajay Kumar Phulre</span> and
          the students of the <span className="font-semibold">2022 Batch</span>{" "}
          of VIT Bhopal University. The project started in{" "}
          <span className="font-semibold">August 2025</span>.
        </p>
        <p className="text-muted-foreground">
          Lumina helps users build apps and websites simply by chatting with AI —
          making development faster, smarter, and more accessible.
        </p>
      </motion.div>

      {/* Developer Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {developers.map((dev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group [perspective:1000px]"
          >
            <div className="relative h-80 w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)]">
              {/* Front */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border bg-white/5 dark:bg-black/30 shadow-lg p-4 [backface-visibility:hidden]">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  width={120}
                  height={120}
                  className="rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold">{dev.name}</h3>
                <p className="text-sm text-violet-500">{dev.role}</p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border bg-violet-600 text-white shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold mb-2">{dev.name}</h3>
                <p className="text-sm text-center">{dev.details}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
