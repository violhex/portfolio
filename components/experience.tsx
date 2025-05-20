import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Founder & Software Engineer",
      company: "IHance",
      period: "Jan 2025 – Present",
      location: "Remote",
      achievements: [
        "Built and maintained an AI-powered suite for image generation, enhancement, and facial restoration",
        "Implemented scalable backend services and user-facing tools using FastAPI and Next.js",
        "Integrated third-party APIs and cloud services to power advanced image workflows",
      ],
    },
    {
      title: "Developer & Creator",
      company: "A1Beam",
      period: "Nov 2024 – Present",
      location: "Remote",
      achievements: [
        "Developed a high-performance media downloader combining yt-dlp and gallery-dl, supporting over 350 unique platforms",
        "Designed a modern UI and CLI for seamless user experience and flexibility",
        "Handled edge cases and media parsing challenges across diverse media types and websites",
      ],
    },
    {
      title: "Co-Founder & Developer",
      company: "EdgyClip",
      period: "Sep 2024 – Present",
      location: "Remote",
      achievements: [
        "Created a platform that helps struggling students with tutoring, writing, and academic support",
        "Integrated chat-based help, file upload, and tutoring request tools",
        "Ensured data privacy and scalable infrastructure for handling student workloads",
      ],
    },
    {
      title: "Creator & Engineer",
      company: "Phauve",
      period: "Aug 2024 – Present",
      location: "Remote",
      achievements: [
        "Built a visually elegant image enhancement and facial correction web app",
        "Implemented advanced enhancement models via third-party APIs and local inference",
        "Focused on UI/UX design, performance optimization, and fast client-side rendering",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      period: "2023 – Present",
      location: "Atlanta, GA, US",
      achievements: [
        "Worked with clients to build fullstack web applications using React, Next.js, FastAPI, and TailwindCSS",
        "Collaborated with other developers on experimental projects and internal tools",
        "Delivered clean, maintainable code with an emphasis on performance and usability",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
