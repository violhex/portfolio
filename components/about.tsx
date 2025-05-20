import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Domain-Driven Development",
      description: "Expert in Python and TypeScript with focus on domain modeling and clean architecture",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Modern Backend Systems",
      description: "Building scalable APIs with FastAPI, Django, Node.js, and type-safe database layers",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Technical Architecture",
      description: "Designing maintainable systems using SOLID principles and domain boundaries",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full-Stack TypeScript",
      description: "End-to-end type safety from React/Next.js frontends to Node.js backends",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Experienced Senior Software Engineer with over three years of expertise as a Full Stack Developer,
                specializing in JavaScript, TypeScript, React.js, Node.js, Python, AWS, and Cloudflare.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Skilled in designing scalable, secure, and efficient systems, with a proven track record of
                collaborating with remote, cross-functional teams across the US, Australia, and Nepal. Demonstrated
                success in delivering impactful solutions within highly regulated environments, including healthcare
                projects, with expertise in HIPAA and SOC2 compliance. Proficient in optimizing system performance and
                mentoring teams to achieve sustained technical excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
