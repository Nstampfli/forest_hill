"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"
const chartData = [
  { type: "Endurance", condition: 186 },
  { type: "Force", condition: 305 },
  { type: "Fléxibilité", condition: 237 },
  { type: "Équilibre", condition: 273 },
  { type: "Agilité", condition: 209 },
  { type: "Vitesse", condition: 214 },
]

const chartConfig = {
  condition: {
    label: "Cdtn Phy.",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export default function RadarChartCategory() {
  return (
    <Card>
      <CardHeader className="items-center">
        <CardTitle>Profil de Condition Physique</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="type" />
            <PolarGrid />
            <Radar
              dataKey="condition"
              fill="var(--color-condition)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          En hausse de 1.3% cette année <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          2024
        </div>
      </CardFooter>
    </Card>
  )
}
