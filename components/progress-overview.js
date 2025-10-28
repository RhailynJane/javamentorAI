import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Trophy, Target, Flame, Clock } from "lucide-react"

export function ProgressOverview() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Learning Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Overall Completion</span>
              <span className="text-sm text-muted-foreground">40%</span>
            </div>
            <Progress value={40} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">4 of 10 lessons completed</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-xs text-muted-foreground">Lessons Done</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="size-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">6</p>
                  <p className="text-xs text-muted-foreground">Remaining</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Flame className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="size-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24h</p>
                  <p className="text-xs text-muted-foreground">Study Time</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
