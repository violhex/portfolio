import Skills3D from "./skills-3d"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React.js", "HTML/CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "PHP", "Laravel", "Express.js", "RESTful APIs"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "DynamoDB", "MongoDB", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GitHub Actions", "Travis-CI", "Docker", "CI/CD"],
    },
    {
      category: "Tools & Methodologies",
      skills: ["Git", "Agile", "Scrum", "JIRA", "Figma"],
    },
  ]

  return (
    <div>
      <Skills3D />
    </div>
  )
}
