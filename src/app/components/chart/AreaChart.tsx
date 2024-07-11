"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-04-01", consumed: 2200, burned: 1800 },
  { date: "2024-04-02", consumed: 2100, burned: 1900 },
  { date: "2024-04-03", consumed: 2000, burned: 1700 },
  { date: "2024-04-04", consumed: 2300, burned: 2000 },
  { date: "2024-04-05", consumed: 2400, burned: 2100 },
  { date: "2024-04-06", consumed: 2200, burned: 1900 },
  { date: "2024-04-07", consumed: 2500, burned: 2200 },
  { date: "2024-04-08", consumed: 2600, burned: 2300 },
  { date: "2024-04-09", consumed: 1800, burned: 1600 },
  { date: "2024-04-10", consumed: 2200, burned: 1900 },
  { date: "2024-04-11", consumed: 2300, burned: 2100 },
  { date: "2024-04-12", consumed: 2100, burned: 1800 },
  { date: "2024-04-13", consumed: 2400, burned: 2200 },
  { date: "2024-04-14", consumed: 2000, burned: 1700 },
  { date: "2024-04-15", consumed: 1900, burned: 1600 },
  { date: "2024-04-16", consumed: 2000, burned: 1800 },
  { date: "2024-04-17", consumed: 2600, burned: 2300 },
  { date: "2024-04-18", consumed: 2400, burned: 2200 },
  { date: "2024-04-19", consumed: 2100, burned: 1800 },
  { date: "2024-04-20", consumed: 1900, burned: 1700 },
  { date: "2024-04-21", consumed: 2000, burned: 1800 },
  { date: "2024-04-22", consumed: 2200, burned: 2000 },
  { date: "2024-04-23", consumed: 2000, burned: 1900 },
  { date: "2024-04-24", consumed: 2400, burned: 2200 },
  { date: "2024-04-25", consumed: 2100, burned: 2000 },
  { date: "2024-04-26", consumed: 1800, burned: 1700 },
  { date: "2024-04-27", consumed: 2500, burned: 2300 },
  { date: "2024-04-28", consumed: 1900, burned: 1700 },
  { date: "2024-04-29", consumed: 2300, burned: 2100 },
  { date: "2024-04-30", consumed: 2600, burned: 2300 },
  { date: "2024-05-01", consumed: 2000, burned: 1800 },
  { date: "2024-05-02", consumed: 2300, burned: 2100 },
  { date: "2024-05-03", consumed: 2200, burned: 2000 },
  { date: "2024-05-04", consumed: 2500, burned: 2300 },
  { date: "2024-05-05", consumed: 2600, burned: 2400 },
  { date: "2024-05-06", consumed: 2700, burned: 2500 },
  { date: "2024-05-07", consumed: 2400, burned: 2200 },
  { date: "2024-05-08", consumed: 2000, burned: 1800 },
  { date: "2024-05-09", consumed: 2100, burned: 1900 },
  { date: "2024-05-10", consumed: 2300, burned: 2100 },
  { date: "2024-05-11", consumed: 2200, burned: 2000 },
  { date: "2024-05-12", consumed: 2100, burned: 1900 },
  { date: "2024-05-13", consumed: 2000, burned: 1700 },
  { date: "2024-05-14", consumed: 2600, burned: 2400 },
  { date: "2024-05-15", consumed: 2500, burned: 2300 },
  { date: "2024-05-16", consumed: 2400, burned: 2200 },
  { date: "2024-05-17", consumed: 2700, burned: 2500 },
  { date: "2024-05-18", consumed: 2300, burned: 2100 },
  { date: "2024-05-19", consumed: 2200, burned: 1900 },
  { date: "2024-05-20", consumed: 2000, burned: 1800 },
  { date: "2024-05-21", consumed: 1800, burned: 1600 },
  { date: "2024-05-22", consumed: 1700, burned: 1500 },
  { date: "2024-05-23", consumed: 2300, burned: 2100 },
  { date: "2024-05-24", consumed: 2200, burned: 2000 },
  { date: "2024-05-25", consumed: 2100, burned: 1900 },
  { date: "2024-05-26", consumed: 2000, burned: 1800 },
  { date: "2024-05-27", consumed: 2500, burned: 2300 },
  { date: "2024-05-28", consumed: 2100, burned: 1900 },
  { date: "2024-05-29", consumed: 1700, burned: 1500 },
  { date: "2024-05-30", consumed: 2300, burned: 2100 },
  { date: "2024-05-31", consumed: 2000, burned: 1800 },
  { date: "2024-06-01", consumed: 2100, burned: 1900 },
  { date: "2024-06-02", consumed: 2600, burned: 2300 },
  { date: "2024-06-03", consumed: 1800, burned: 1600 },
  { date: "2024-06-04", consumed: 2400, burned: 2200 },
  { date: "2024-06-05", consumed: 1700, burned: 1500 },
  { date: "2024-06-06", consumed: 2200, burned: 2000 },
  { date: "2024-06-07", consumed: 2500, burned: 2300 },
  { date: "2024-06-08", consumed: 2400, burned: 2200 },
  { date: "2024-06-09", consumed: 2600, burned: 2400 },
  { date: "2024-06-10", consumed: 2000, burned: 1800 },
  { date: "2024-06-11", consumed: 1800, burned: 1600 },
  { date: "2024-06-12", consumed: 2600, burned: 2300 },
  { date: "2024-06-13", consumed: 1700, burned: 1500 },
  { date: "2024-06-14", consumed: 2500, burned: 2300 },
  { date: "2024-06-15", consumed: 2300, burned: 2100 },
  { date: "2024-06-16", consumed: 2400, burned: 2200 },
  { date: "2024-06-17", consumed: 2700, burned: 2500 },
  { date: "2024-06-18", consumed: 1800, burned: 1600 },
  { date: "2024-06-19", consumed: 2300, burned: 2100 },
  { date: "2024-06-20", consumed: 2600, burned: 2400 },
  { date: "2024-06-21", consumed: 2000, burned: 1800 },
  { date: "2024-06-22", consumed: 2400, burned: 2200 },
  { date: "2024-06-23", consumed: 2700, burned: 2500 },
  { date: "2024-06-24", consumed: 1900, burned: 1700 },
  { date: "2024-06-25", consumed: 2000, burned: 1800 },
  { date: "2024-06-26", consumed: 2600, burned: 2300 },
  { date: "2024-06-27", consumed: 2700, burned: 2400 },
  { date: "2024-06-28", consumed: 1900, burned: 1700 },
  { date: "2024-06-29", consumed: 1800, burned: 1600 },
  { date: "2024-06-30", consumed: 2500, burned: 2300 },
  { date: "2024-07-01", consumed: 2200, burned: 1900 },
  { date: "2024-07-02", consumed: 2300, burned: 2000 },
  { date: "2024-07-03", consumed: 2400, burned: 2100 },
  { date: "2024-07-04", consumed: 2500, burned: 2200 },
  { date: "2024-07-05", consumed: 2300, burned: 2000 },
  { date: "2024-07-06", consumed: 2400, burned: 2100 },
  { date: "2024-07-07", consumed: 2200, burned: 1900 },
  { date: "2024-07-08", consumed: 2500, burned: 2200 },
  { date: "2024-07-09", consumed: 2400, burned: 2100 },
  { date: "2024-07-10", consumed: 1800, burned: 1600 },
  { date: "2024-07-11", consumed: 2000, burned: 1700 },
  { date: "2024-07-12", consumed: 2300, burned: 2000 },
  { date: "2024-07-13", consumed: 2100, burned: 1800 },
  { date: "2024-07-14", consumed: 2500, burned: 2200 },
  { date: "2024-07-15", consumed: 2200, burned: 1900 },
  { date: "2024-07-16", consumed: 2100, burned: 1800 },
  { date: "2024-07-17", consumed: 2200, burned: 1900 },
  { date: "2024-07-18", consumed: 2600, burned: 2300 },
  { date: "2024-07-19", consumed: 2400, burned: 2100 },
  { date: "2024-07-20", consumed: 2500, burned: 2200 },
  { date: "2024-07-21", consumed: 2200, burned: 1900 },
  { date: "2024-07-22", consumed: 2400, burned: 2100 },
  { date: "2024-07-23", consumed: 2500, burned: 2200 },
  { date: "2024-07-24", consumed: 1900, burned: 1700 },
  { date: "2024-07-25", consumed: 2000, burned: 1800 },
  { date: "2024-07-26", consumed: 2600, burned: 2300 },
  { date: "2024-07-27", consumed: 2700, burned: 2400 },
  { date: "2024-07-28", consumed: 1900, burned: 1700 },
  { date: "2024-07-29", consumed: 1800, burned: 1600 },
  { date: "2024-07-30", consumed: 2500, burned: 2300 },
  { date: "2024-07-31", consumed: 2400, burned: 2100 },
  { date: "2024-08-01", consumed: 2300, burned: 2000 },
]


const chartConfig = {
  calories: {
    label: "Calories",
  },
  consumed: {
    label: "Conso",
    color: "hsl(var(--chart-1))",
  },
  burned: {
    label: "Brulés",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function AreaChartTest() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const now = new Date()
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    now.setDate(now.getDate() - daysToSubtract)
    return date >= now
  })

  return (
    <Card className="mt-4">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Calories consommées vs Calories brûlées</CardTitle>
          <CardDescription>
            Données quotidiennes 2024
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="3 mois" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              3 mois
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              30 jours
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              7 jours
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillConsumed" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-consumed)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-consumed)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBurned" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-burned)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-burned)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="burned"
              type="natural"
              fill="url(#fillBurned)"
              stroke="var(--color-burned)"
              stackId="a"
            />
            <Area
              dataKey="consumed"
              type="natural"
              fill="url(#fillConsumed)"
              stroke="var(--color-consumed)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
