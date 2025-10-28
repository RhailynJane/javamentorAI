import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "Syntax & Basics", level: 95 },
  { name: "OOP Concepts", level: 60 },
  { name: "Data Structures", level: 40 },
  { name: "Algorithms", level: 30 },
  { name: "Exception Handling", level: 0 },
]

export function SkillsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skill Levels</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
