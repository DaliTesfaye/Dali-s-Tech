export interface Project {
  id: string
  title: string
  description: string
  image: string
  level: "Beginner" | "Intermediate" | "Hard"
  category: "Web Apps" | "Mobile" | "SaaS" | "AI Agents" | "Games"
  skills: string[]
  liveDemo: string
  github: string
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "XO Store - Clothing Store (Full Stack)",
    description: "A full-stack clothing e-commerce store with product browsing, cart management, and a modern shopping experience across client and server.",
    image: "https://i.ibb.co/LDd6yNdp/1.png",
    level: "Intermediate",
    category: "Web Apps",
    skills: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://xostore.netlify.app/",
    github: "https://github.com/DaliTesfaye/xo-store-frontend",
  },
  {
    id: "project-2",
    title: "Guerilla Com - Communication Agency",
    description: "A modern agency website focused on digital communication services, clean branding, and a smooth user experience.",
    image: "https://i.ibb.co/xSYWxJQr/6485838-A-7823-4-EE3-8-E01-9-CD30-F2-D5313.png",
    level: "Hard",
    category: "Web Apps",
    skills: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://example.com",
    github: "https://github.com/DaliTesfaye/guerrilla-com-frontend",
  },
  {
    id: "project-3",
    title: "Spin Wheel Game for Jadida Company",
    description: "An interactive spin wheel web game built for Jadida Company with offline-ready behavior and local data persistence.",
    image: "https://i.ibb.co/9kqtQV2B/cadre-jeu.png",
    level: "Intermediate",
    category: "Games",
    skills: ["React.js", "PWA", "IndexedDB"],
    liveDemo: "https://jadida-jeu-de-roue.netlify.app/",
    github: "https://github.com/DaliTesfaye/Spin-Wheel",
  },
]
