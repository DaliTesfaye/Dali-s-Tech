"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Sparkles } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si"
import { TbDatabase } from "react-icons/tb"

interface SkillLogo {
  name: string
  Icon: IconType
  colorClass: string
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
}

const skills: SkillLogo[] = [
  { name: "React.js", Icon: SiReact, colorClass: "text-[#4D96FF]" },
  { name: "Next.js", Icon: SiNextdotjs, colorClass: "text-current" },
  { name: "JavaScript", Icon: SiJavascript, colorClass: "text-[#FFDE4D]" },
  { name: "TypeScript", Icon: SiTypescript, colorClass: "text-[#4D96FF]" },
  { name: "Node.js", Icon: SiNodedotjs, colorClass: "text-green-500" },
  { name: "Express", Icon: SiExpress, colorClass: "text-current" },
  { name: "MongoDB", Icon: SiMongodb, colorClass: "text-green-600" },
  { name: "SQL", Icon: TbDatabase, colorClass: "text-purple-400" },
  { name: "Git", Icon: SiGit, colorClass: "text-orange-500" },
  { name: "GitHub", Icon: SiGithub, colorClass: "text-current" },
  { name: "Python", Icon: SiPython, colorClass: "text-[#FFDE4D]" },
  { name: "FastAPI", Icon: SiFastapi, colorClass: "text-teal-400" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-24 bg-background border-b-4 border-foreground font-mono text-foreground select-none">
      {/* Blueprint Accent Lines */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Header Block */}
          <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-flex items-center gap-2 border-2 border-foreground bg-[#A855F7] text-white px-4 py-1.5 text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)]">
              <Sparkles className="size-3.5 fill-current" />
              Inventory
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-foreground sm:text-5xl">
              Tech I Work With
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm font-bold text-muted-foreground leading-relaxed">
              A comprehensive toolkit of core engineering frameworks and modern language stacks.
            </p>
          </motion.div>

          {/* Core Grid Matrix Card */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-full border-4 border-foreground bg-background p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] sm:p-10"
          >
            {/* Retro Top bar decoration layout */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-foreground border-b-2 border-foreground" />
            
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 mt-2">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative"
                  title={skill.name}
                  aria-label={skill.name}
                >
                  {/* Decorative background shadow grid card element */}
                  <div className="absolute inset-0 border-2 border-foreground bg-[#FF6B6B] translate-x-1.5 translate-y-1.5 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-75" />
                  
                  {/* Interactive Front Slot Item */}
                  <div className="relative flex flex-col items-center justify-center border-2 border-foreground bg-muted/60 p-4 transition-transform duration-75 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                    <skill.Icon className={`w-8 h-8 transition-transform duration-100 group-hover:scale-110 ${skill.colorClass}`} />
                    <span className="mt-3 text-[10px] font-black uppercase tracking-wider text-foreground block truncate max-w-full">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}