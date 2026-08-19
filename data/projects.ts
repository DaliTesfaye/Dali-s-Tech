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
    image: "https://plain-weur-prod-public.komododecks.com/202608/12/xzu7di5Vdn3IebGAjhOX/image.png",
    level: "Hard",
    category: "Web Apps",
    skills: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://guerrilla-com-frontend.vercel.app/",
    github: "https://github.com/DaliTesfaye/guerrilla-com-frontend",
  },
  {
    id: "project-3",
    title: "Spin Wheel Game for El Mazaraa Company",
    description: "An interactive spin wheel web game built for El Mazaraa Company with offline-ready behavior and local data persistence.",
    image: "https://plain-weur-prod-public.komododecks.com/202608/12/S1Cqlc9DFQClIylvqcOd/image.png",
    level: "Intermediate",
    category: "Games",
    skills: ["React.js", "PWA", "IndexedDB"],
    liveDemo: "https://mazraa-roue.netlify.app/",
    github: "https://github.com/DaliTesfaye/Spin-Wheel",
  },
    {
    id: "project-4",
    title: "Shelfie App Mobile App ",
    description: "A mobile application that allows users to manage their personal library, track reading progress, and discover new books.",
    image: "https://plain-weur-prod-public.komododecks.com/202608/15/PlGhKJx9egfh2Uk2BT2y/image.jpg",
    level: "Intermediate",
    category: "Mobile",
    skills: ["React.js", "Appwrite", "Javascript"],
    liveDemo: "https://dalixtech.me/",
    github: "https://github.com/DaliTesfaye/Shelfie-App",
  },

]
