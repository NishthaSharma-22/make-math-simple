"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const chartData = [
  { student: "Emma", sessions: 12 },
  { student: "Alex", sessions: 9 },
  { student: "Sophia", sessions: 7 },
  { student: "Noah", sessions: 5 },
  { student: "Olivia", sessions: 3 },
];

const chartConfig = {
  sessions: {
    label: "Sessions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function TotalSessions() {
  return (
    <Card className="bg-card p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Sessions by Student</CardTitle>
        <ToggleGroup type="single" defaultValue="week" className="gap-2">
          <ToggleGroupItem value="week" className="rounded-full px-4">
            Week
          </ToggleGroupItem>

          <ToggleGroupItem value="month" className="rounded-full px-4">
            Month
          </ToggleGroupItem>

          <ToggleGroupItem value="year" className="rounded-full px-4">
            Year
          </ToggleGroupItem>

          <ToggleGroupItem value="custom" className="rounded-full px-4">
            Custom
          </ToggleGroupItem>
        </ToggleGroup>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              top: 10,
              right: 30,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid horizontal={false} />

            <XAxis type="number" hide />

            <YAxis
              dataKey="student"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              width={70}
              className="text-sm"
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Bar
              dataKey="sessions"
              fill="hsl(var(--chart-2))"
              radius={8}
              barSize={24}
            >
              <LabelList
                dataKey="sessions"
                position="right"
                offset={8}
                fill="hsl(var(--foreground))"
                fontSize={13}
                className="font-mono"
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
