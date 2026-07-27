"use client"

import { ExternalLink } from "lucide-react"
import type { IconType } from "react-icons"
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiDocker,
  SiPostgresql,
  SiRedux,
  SiStripe,
  SiSocketdotio,
  SiFirebase,
  SiWebrtc,
} from "react-icons/si"
import { TbDatabase } from "react-icons/tb"
import { projects } from "@/data/projects"

const skillIconMap: Record<string, { Icon: IconType; colorClass: string }> = {
  React: { Icon: SiReact, colorClass: "text-[#4D96FF]" },
  "React.js": { Icon: SiReact, colorClass: "text-[#4D96FF]" },
  "Next.js": { Icon: SiNextdotjs, colorClass: "text-current" },
  JavaScript: { Icon: SiJavascript, colorClass: "text-[#FFDE4D]" },
  TypeScript: { Icon: SiTypescript, colorClass: "text-[#4D96FF]" },
  "Node.js": { Icon: SiNodedotjs, colorClass: "text-green-500" },
  Express: { Icon: SiExpress, colorClass: "text-current" },
  MongoDB: { Icon: SiMongodb, colorClass: "text-green-600" },
  SQL: { Icon: TbDatabase, colorClass: "text-purple-400" },
  IndexedDB: { Icon: TbDatabase, colorClass: "text-purple-400" },
  PostgreSQL: { Icon: SiPostgresql, colorClass: "text-blue-600" },
  Git: { Icon: SiGit, colorClass: "text-orange-500" },
  GitHub: { Icon: SiGithub, colorClass: "text-current" },
  Python: { Icon: SiPython, colorClass: "text-[#FFDE4D]" },
  Docker: { Icon: SiDocker, colorClass: "text-blue-400" },
  Redux: { Icon: SiRedux, colorClass: "text-purple-500" },
  "Stripe API": { Icon: SiStripe, colorClass: "text-blue-600" },
  "Socket.io": { Icon: SiSocketdotio, colorClass: "text-current" },
  Firebase: { Icon: SiFirebase, colorClass: "text-amber-500" },
  "Tailwind CSS": { Icon: SiReact, colorClass: "text-cyan-400" },
  WebRTC: { Icon: SiWebrtc, colorClass: "text-orange-400" },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full py-24 bg-background border-b-4 border-foreground font-mono text-foreground select-none">
      {/* Background Blueprint Grid Layer */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-16 max-w-2xl">
          <div className="inline-block border-2 border-foreground bg-[#FF6B6B] text-black px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            DEPLOYED_LOGIC.EXE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-sm font-bold text-muted-foreground leading-relaxed">
            Explore my recent work showcasing modern layout structures, clean architectural code channels, and innovative full-stack digital solutions.
          </p>
        </div>

        {/* Projects Retro Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              {/* Overlapping back accent card layer shadow */}
              <div className="absolute inset-0 border-4 border-foreground bg-[#4D96FF] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-75" />
              
              {/* Main Content Window Frame */}
              <div className="relative h-full border-4 border-foreground bg-background overflow-hidden flex flex-col transition-transform duration-75 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                
                {/* Image Section Window */}
                <div className="relative h-52 border-b-4 border-foreground bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Retro dot grid mask on card hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.15)_1.5px,transparent_1.5px)] bg-[size:6px_6px] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                </div>

                {/* Body Details Block */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black text-foreground uppercase tracking-wide mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs font-medium leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills Mini-Badge Matrix slots */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => {
                        const skillInfo = skillIconMap[skill]
                        if (!skillInfo) return null
                        const { Icon, colorClass } = skillInfo
                        return (
                          <div 
                            key={skill}
                            title={skill}
                            className="border-2 border-foreground bg-muted p-1.5 shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1.5px_1.5px_0px_0px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform"
                          >
                            <Icon className={`w-4 h-4 ${colorClass}`} />
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Tactile Push-Down Link Buttons */}
                  <div className="flex gap-3 pt-4 border-t-2 border-dashed border-foreground/25">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-10 flex items-center justify-center gap-2 border-2 border-foreground bg-[#FFDE4D] text-black text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-75 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-10 flex items-center justify-center gap-2 border-2 border-foreground bg-background text-foreground text-xs font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] transition-all duration-75 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}