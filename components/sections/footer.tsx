"use client"

import { motion, Variants } from "framer-motion"
import { 
  Mail, 
  ArrowUpRight, 
  Terminal, 
  Heart, 
  Sparkles, 
  Copy, 
  Check 
} from "lucide-react"
import { useState } from "react"

// SVG Icons for GitHub & LinkedIn to bypass lucide-react import mismatches
function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
    </svg>
  )
}

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.3, ease: "linear" } 
  }
}

export function FooterSection() {
  const [copied, setCopied] = useState(false)
  const email = "contact@dali.dev"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#121214] text-white font-mono select-none overflow-hidden border-t-4 border-foreground">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_2px,transparent_2px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_2px,transparent_2px)] bg-[size:32px_32px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        

        {/* FOOTER LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-4 border-dashed border-white/20">
          
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 border-2 border-white bg-[#4D96FF] text-black px-3 py-1 font-black text-sm uppercase shadow-[3px_3px_0px_0px_#FFF]">
              <Terminal className="size-4 stroke-[3px]" />
              <span>DALI.DEV</span>
            </div>
            
            <p className="text-xs font-bold text-neutral-400 leading-relaxed max-w-sm">
              Engineering web apps with modern stacks, retro pixel aesthetics, and zero filler code.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-bold text-green-400 bg-green-950/60 border border-green-500/40 px-3 py-1.5">
              <span className="size-2 bg-green-500 animate-pulse rounded-full" />
              SYSTEM OPERATIONAL // 2026
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FFDE4D] flex items-center gap-1.5">
              <Sparkles className="size-3.5" /> NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-bold text-neutral-300">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#4D96FF] hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span className="text-neutral-600">&gt;</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#FF6B6B]">
              CONNECT PROTOCOLS
            </h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="https://github.com/DaliTesfaye" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between border-2 border-white bg-neutral-900 p-2.5 text-xs font-bold hover:bg-[#4D96FF] hover:text-black hover:border-black transition-all shadow-[3px_3px_0px_0px_#FFF] hover:shadow-[3px_3px_0px_0px_#000]"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="size-4" />
                  <span>GITHUB</span>
                </div>
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a 
                href="https://www.linkedin.com/in/dridimedali/" 
                target="_blank" 
                rel="noreferrer"
                className="group flex items-center justify-between border-2 border-white bg-neutral-900 p-2.5 text-xs font-bold hover:bg-[#FFDE4D] hover:text-black hover:border-black transition-all shadow-[3px_3px_0px_0px_#FFF] hover:shadow-[3px_3px_0px_0px_#000]"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="size-4" />
                  <span>LINKEDIN</span>
                </div>
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>BUILT BY</span>
            <span>DRIDI DALI</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="border-2 border-white bg-neutral-900 text-white px-3 py-1.5 text-[11px] font-black uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-[2px_2px_0px_0px_#FFF]"
          >
            [ TOP ▲ ]
          </button>
        </div>

      </div>
    </footer>
  )
}