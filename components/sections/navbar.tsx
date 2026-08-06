"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-foreground bg-background font-mono text-foreground select-none">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-22 items-center justify-between md:grid md:grid-cols-3">

          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link
              href="/home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
              className="relative inline-flex items-center transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="
                  h-24
                  w-auto
                  object-contain
                  -my-8
                  drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]
                  dark:drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)]
                "
              />
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  relative 
                  border-2 
                  border-transparent 
                  px-4 
                  py-1.5 
                  text-sm 
                  font-bold 
                  uppercase 
                  transition-all 
                  duration-75
                  hover:border-foreground 
                  hover:bg-muted/50
                  hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                  active:translate-x-[2px]
                  active:translate-y-[2px]
                  active:shadow-none
                "
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right side: Desktop Download CV Button & Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-3">
            {/* Desktop Download CV Button */}
            <a
              href="/cv.pdf"
              download="Dali_CV.pdf"
              className="
                hidden md:inline-flex items-center gap-2
                border-2 
                border-foreground 
                bg-[#D80075] 
                text-white
                px-4 
                py-1.5 
                text-xs 
                font-bold 
                uppercase 
                shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                transition-all
                hover:translate-x-[1px]
                hover:translate-y-[1px]
                active:translate-x-[2px]
                active:translate-y-[2px]
                active:shadow-none
              "
            >
              <Download className="size-4" />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="
                  border-2 
                  border-foreground 
                  bg-muted 
                  p-1.5
                  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                  dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]
                  active:translate-x-[1px]
                  active:translate-y-[1px]
                  active:shadow-none
                "
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute left-0 w-full border-t-4 border-foreground bg-background shadow-[0_10px_0px_0px_rgba(0,0,0,0.1)] md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="
                  w-full
                  text-left
                  border-2
                  border-foreground
                  bg-background
                  px-4
                  py-3
                  text-sm
                  font-bold
                  uppercase
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]
                  active:translate-x-[2px]
                  active:translate-y-[2px]
                  active:shadow-none
                "
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Download CV Link */}
            <a
              href="/cv.pdf"
              download="Dali_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="
                w-full
                flex items-center justify-center gap-2
                border-2
                border-foreground
                bg-[#D80075]
                text-white
                px-4
                py-3
                text-sm
                font-bold
                uppercase
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]
                active:translate-x-[2px]
                active:translate-y-[2px]
                active:shadow-none
              "
            >
              <Download className="size-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}