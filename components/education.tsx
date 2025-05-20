import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My self-taught and online learning journey
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Boot.dev Backend Engineering Program</h3>
                    <p className="text-muted-foreground">Completed: Backend Engineering Track (2024)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed the full backend engineering curriculum at Boot.dev, covering Python, Go, JavaScript, databases, and computer science fundamentals through hands-on projects and interactive lessons.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">The Odin Project: Frontend Course</h3>
                    <p className="text-muted-foreground">Completed: Foundations & JavaScript Path (2023)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Built a strong foundation in HTML, CSS, and JavaScript by following The Odin Project&apos;s open-source curriculum, focusing on real-world projects and best practices for frontend development.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Harvard CS50 & Udemy Courses</h3>
                    <p className="text-muted-foreground">Ongoing & Completed (2022–2024)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed Harvard&apos;s CS50 Introduction to Computer Science and a variety of Udemy courses on web development, Python, and software engineering topics to broaden my knowledge and practical skills.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
