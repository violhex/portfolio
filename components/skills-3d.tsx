"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Skill {
  name: string
  icon: React.ReactNode
  skills: string[]
}

export default function Skills3D() {
  const skillCategories: Skill[] = [
    {
      name: "Frontend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
          <path d="M16 19h6" />
          <path d="M19 16v6" />
          <path d="M12 15V9" />
          <path d="m9 13 3 2 3-2" />
        </svg>
      ),
      skills: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "HTML/CSS"],
    },
    {
      name: "Backend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6" y1="6" y2="6" />
          <line x1="6" x2="6" y1="18" y2="18" />
        </svg>
      ),
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs"],
    },
    {
      name: "Database",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      skills: ["MySQL", "PostgreSQL", "SQLAlchemy", "MongoDB", "Neon", "Supabase", "Redis"],
    },
    {
      name: "DevOps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Kubernetes"],
    },
    {
      name: "Architecture",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      skills: ["Domain-Driven Design", "Clean Architecture", "SOLID Principles", "Microservices", "Event-Driven"],
    },
    {
      name: "Tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 3h18v18H3z" />
          <path d="M13 3v18" />
          <path d="M8 7h.01" />
          <path d="M8 12h.01" />
          <path d="M8 17h.01" />
          <path d="M18 7h.01" />
          <path d="M18 12h.01" />
          <path d="M18 17h.01" />
        </svg>
      ),
      skills: ["Git", "Agile", "Scrum", "JIRA", "Figma"],
    },
  ]

  return (
    <div className="py-12">
      <div className="space-y-4 text-center mb-12">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Skills</h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          My expertise and technical proficiencies
        </p>
        <span className="text-sm text-muted-foreground">[Hover and move your cursor to see the 3D effect]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <TiltCard key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

interface TiltCardProps {
  category: Skill
}

function TiltCard({ category }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for the tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smoother movement
  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  // Transform the motion values to rotation values
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-15, 15])

  // Handle mouse move on the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()

    // Calculate the position of the mouse relative to the card center
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate the normalized position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    // Update motion values
    x.set(normalizedX)
    y.set(normalizedY)
  }

  // Reset the card position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative perspective-1000 w-full h-[300px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className={cn(
          "w-full h-full rounded-xl p-6 border-2 shadow-lg flex flex-col",
          "transition-colors duration-300",
          "bg-card border-primary/30 dark:border-primary/50",
          isHovered ? "shadow-xl border-primary/80" : "border-primary/30",
        )}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0"
          style={{
            opacity: isHovered ? 0.05 : 0,
            backgroundImage: "linear-gradient(135deg, transparent, hsl(var(--primary)))",
            transition: "opacity 0.3s ease",
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="p-3 rounded-full mr-3 bg-primary/10 text-primary">{category.icon}</div>
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>

          <div className="flex flex-wrap gap-2 mt-2 flex-1">
            {category.skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={isHovered ? { y: 0, opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                style={{ transformStyle: "preserve-3d", translateZ: isHovered ? 20 : 0 }}
              >
                <Badge className="text-sm bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 rounded-full px-3">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
