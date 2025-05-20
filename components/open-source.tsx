import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, GitPullRequest } from "lucide-react"
import Link from "next/link"

export default function OpenSource() {
  const contributions = [
    {
      title: "Unixporn & Arch Linux Configs",
      description:
        "Active participant in the Unixporn community, sharing and designing custom Arch Linux configurations for others. Helped beginners set up and theme their Linux desktops.",
      tags: ["Arch Linux", "Unixporn", "Dotfiles", "Theming"],
      link: "https://www.reddit.com/r/unixporn/",
    },
    {
      title: "Amberol & Linux Audio Tools",
      description:
        "Contributed feedback, bug reports, and small patches to Amberol and other open source Linux audio programs. Enjoy tinkering with open source music players and improving the Linux desktop experience.",
      tags: ["Amberol", "Linux", "Open Source", "Audio"],
      link: "https://github.com/amberol-player/amberol",
    },
    {
      title: "Python & customtkinter Widgets",
      description:
        "Created and shared custom widgets for the customtkinter library, and contributed small utilities to the Python ecosystem. Enjoy building simple desktop apps and tools in Python.",
      tags: ["Python", "customtkinter", "Widgets", "Beginner Friendly"],
      link: "https://github.com/TomSchimansky/CustomTkinter",
    },
    {
      title: "Rust CLI & Learning Projects",
      description:
        "Experimented with Rust by building small CLI tools and learning projects. Shared code and helped others get started with Rust basics.",
      tags: ["Rust", "CLI", "Learning", "Beginner"],
      link: "https://github.com/rust-lang/rustlings",
    },
    {
      title: "Neovim Plugin Development",
      description:
        "Developed a personal Neovim plugin to enhance my workflow, and shared it with the community. Learned a lot about Lua and plugin development in the process.",
      tags: ["Neovim", "Plugin", "Lua", "Editor"],
      link: "https://github.com/neovim/neovim",
    },
  ]

  return (
    <div id="open-source">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Open Source Contributions</h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
            {"Projects I've contributed to in the open source community"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contributions.map((contribution, index) => (
            <div key={index}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <GitPullRequest className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{contribution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{contribution.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {contribution.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary/10 px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={contribution.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
