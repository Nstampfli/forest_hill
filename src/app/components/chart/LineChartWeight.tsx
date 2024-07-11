"use client"

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
  { month: "Janvier", poids: 78},
  { month: "Février", poids: 80},
  { month: "Mars", poids: 79},
  { month: "Avril", poids: 83},
  { month: "Mai", poids: 87},
  { month: "Juin", poids: 84},
  { month: "Juillet", poids: 81},
]

const chartConfig = {
  poids: {
    label: "Poids (Kg)",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function LineChartWeight() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution de votre poids</CardTitle>
        <CardDescription>en 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="poids"
              type="natural"
              stroke="var(--color-poids)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-poids)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
