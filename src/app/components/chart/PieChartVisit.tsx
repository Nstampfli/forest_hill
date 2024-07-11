"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

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
  { type: "muscu", visitors: 275, fill: "var(--color-muscu)" },
  { type: "yoga", visitors: 200, fill: "var(--color-yoga)" },
  { type: "boxe", visitors: 287, fill: "var(--color-boxe)" },
  { type: "cardio", visitors: 173, fill: "var(--color-cardio)" },
  { type: "autre", visitors: 190, fill: "var(--color-autre)" },
]

const chartConfig = {
  visitors: {
    label: "Nombre de visite",
  },
  muscu: {
    label: "Muscu",
    color: "hsl(var(--chart-1))",
  },
  yoga: {
    label: "Yoga",
    color: "hsl(var(--chart-2))",
  },
  boxe: {
    label: "Boxe",
    color: "hsl(var(--chart-3))",
  },
  cardio: {
    label: "Cardio",
    color: "hsl(var(--chart-4))",
  },
  autre: {
    label: "Autres",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export default function PieChartVisit() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Nombres de visites</CardTitle>
        <CardDescription>cette années (2024)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Nb. visites
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Une augmentation de 5.2% cette année <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
