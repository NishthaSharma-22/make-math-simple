"use client";

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", revenue: 300 },
  { month: "Feb", revenue: 130 },
  { month: "Mar", revenue: 100 },
  { month: "Apr", revenue: 180 },
  { month: "May", revenue: 200 },
  { month: "Jun", revenue: 250 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function RevenueChart() {
  return (
    <Card className="p-4 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl">Revenue Chart</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[320px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 25,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              className="text-xs"
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            <Line
              dataKey="revenue"
              type="monotone"
              stroke="hsl(var(--chart-3))"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "hsl(var(--chart-3))",
              }}
              activeDot={{
                r: 7,
              }}
            >
              <LabelList
                dataKey="revenue"
                position="top"
                offset={10}
                fill="hsl(var(--foreground))"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
