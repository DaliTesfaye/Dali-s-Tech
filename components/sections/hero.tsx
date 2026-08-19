"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

import { Button } from "@/components/ui/button"

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
}

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative isolate overflow-hidden bg-transparent text-foreground border-b-4 border-foreground selection:bg-[#FFDE4D] selection:text-black"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-4xl flex-col items-center justify-center px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <motion.div
          className="w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 flex justify-center"
          >
            <span className="border-2 border-foreground bg-[#4D96FF] px-4 py-1.5 text-xs font-mono font-bold tracking-wider text-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
              Full-Stack Developer
            </span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            variants={itemVariants}
            className="font-mono text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl uppercase"
          >
            Hi, I&apos;m{" "}
            <span className="bg-[#6109B5] text-white border-2 border-foreground px-3 py-1 inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] -rotate-1">
              Dali
            </span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="mt-10 font-mono text-xl font-bold sm:text-2xl lg:text-3xl max-w-2xl mx-auto"
          >
            Turning ideas into modern and scalable web applications.
          </motion.h2>

          {/* Paragraph Box */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl font-mono text-sm leading-relaxed border-2 border-dashed border-foreground/30 bg-black/40 backdrop-blur-xs p-4"
          >
            I build polished, responsive, and performant digital experiences
            with clean architecture, maintainable code, and user-first design.
          </motion.p>

          {/* Tactile Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col justify-center gap-5 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group h-auto rounded-none border-4 border-foreground bg-[#DC1CF9] px-8 py-4 font-mono text-base font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]"
            >
              View Projects
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="h-auto rounded-none border-4 border-foreground bg-background text-foreground px-8 py-4 font-mono text-base font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] hover:bg-background hover:text-foreground"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}