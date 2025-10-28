import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const modules = [
  { name: "Java Basics", completed: 4, total: 4, progress: 100 },
  { name: "Object-Oriented Programming", completed: 1, total: 3, progress: 33 },
  { name: "Advanced Concepts", completed: 0, total: 3, progress: 0 },
]

export function LearningProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Learning Progress by Module</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {modules.map((module) => (
          <div key={module.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{module.name}</span>
              <span className="text-sm text-muted-foreground">
                {module.completed}/{module.total} lessons
              </span>
            </div>
            <Progress value={module.progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-1">{module.progress}% complete</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
