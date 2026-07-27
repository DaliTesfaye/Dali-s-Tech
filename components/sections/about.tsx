"use client"

import { motion, Variants } from "framer-motion"
import { Check, Star, Wrench, Heart } from "lucide-react"

// Moved outside the component and explicitly typed to resolve TS compilation errors
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "linear" } 
  }
}

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#F4F4F0] dark:bg-[#121214] text-foreground py-24 border-b-4 border-foreground font-mono select-none overflow-hidden">
      {/* Background accent lines to give a terminal blueprint vibe */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_2px,transparent_2px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_2px,transparent_2px)] bg-[size:40px_100%]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* ASYMMETRICAL 3-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* COLUMN 1: THE FLOATING PROFILE STACK (4 Cols Wide) */}
          <motion.div 
            className="lg:col-span-5 relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* The Background Decorative Stack Effect */}
            <div className="absolute inset-0 border-4 border-foreground bg-[#FF6B6B] translate-x-3 translate-y-3" />
            
            {/* Main Interactive Card */}
            <div className="relative border-4 border-foreground bg-background p-6 flex flex-col items-center text-center h-full group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-75">
              
              {/* Sticker Label Badge */}
              <div className="absolute -top-4 -right-2 border-2 border-foreground bg-[#A855F7] text-white px-2 py-0.5 text-[10px] font-black uppercase tracking-wider rotate-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                LVL 2026
              </div>

              {/* Character Avatar Box */}
              <div className="w-28 h-28 border-4 border-foreground bg-[#FFDE4D] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-5xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px] opacity-20" />
                <span className="relative z-10">👨‍💻</span>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight text-foreground">DALI</h3>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-0.5 mb-6">Full-Stack Engineer</p>
              
              {/* Interactive Stat Sliders */}
              <div className="w-full space-y-4 text-left border-t-4 border-dashed border-foreground/30 pt-6">
                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>Frontend Architecture</span>
                    <span>90%</span>
                  </div>
                  <div className="border-2 border-foreground h-4 bg-muted p-0.5">
                    <div className="bg-[#4D96FF] h-full border-r-2 border-foreground w-[90%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>Backend & Databases</span>
                    <span>80%</span>
                  </div>
                  <div className="border-2 border-foreground h-4 bg-muted p-0.5">
                    <div className="bg-[#FF6B6B] h-full border-r-2 border-foreground w-[80%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-black uppercase mb-1">
                    <span>Clean Code / Patterns</span>
                    <span>85%</span>
                  </div>
                  <div className="border-2 border-foreground h-4 bg-muted p-0.5">
                    <div className="bg-[#FFDE4D] h-full border-r-2 border-foreground w-[85%]" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* COLUMN 2: THE MAIN CONTENT BLOCK (7 Cols Wide) */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Top Container: Bold Manifesto Statement */}
            <motion.div 
              className="border-4 border-foreground bg-[#4D96FF] text-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-start gap-3">
                <Star className="size-6 fill-black shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-lg font-black uppercase tracking-wide mb-2">The Mission Objective</h4>
                  <p className="text-sm font-bold leading-relaxed opacity-90">
                    I build fast, resilient web systems using tools like React, Next.js, and Supabase. I design platforms where logic meets strict, punchy UI. No filler text, no over-engineering. Just highly performant tech architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Row split into two grid panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch h-full">
              
              {/* Panel A: Core Traits */}
              <motion.div 
                className="border-4 border-foreground bg-background p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex items-center gap-2 mb-4 border-b-2 border-foreground pb-2">
                  <Wrench className="size-4 text-[#FF6B6B]" />
                  <span className="text-xs font-black uppercase tracking-wider">Operational Spec</span>
                </div>
                <ul className="space-y-2 text-xs font-bold text-muted-foreground">
                  <li className="flex items-center gap-2 text-foreground"><Check className="size-3.5 stroke-[3px] text-green-500" /> Next.js & Server Logic</li>
                  <li className="flex items-center gap-2 text-foreground"><Check className="size-3.5 stroke-[3px] text-green-500" /> State Management</li>
                  <li className="flex items-center gap-2 text-foreground"><Check className="size-3.5 stroke-[3px] text-green-500" /> Database Design</li>
                  <li className="flex items-center gap-2 text-foreground"><Check className="size-3.5 stroke-[3px] text-green-500" /> API Implementation</li>
                </ul>
              </motion.div>

              {/* Panel B: Status Card */}
              <motion.div 
                className="border-4 border-foreground bg-[#FFDE4D] text-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="size-4 fill-black" />
                  <span className="text-xs font-black uppercase tracking-wider">Status Update</span>
                </div>
                <p className="text-xs font-bold leading-relaxed mb-4">
                  Currently building interactive web tools and writing out production software reports.
                </p>
                <div className="bg-black text-white text-center py-1.5 text-[10px] font-black uppercase tracking-widest border-2 border-black">
                  Available for Projects
                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}