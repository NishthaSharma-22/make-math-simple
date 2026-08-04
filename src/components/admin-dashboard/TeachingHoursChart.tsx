"use client";
import { useState } from "react";
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

const weeklyData = [
  { label: "Monday", hours: 4 },
  { label: "Tuesday", hours: 6 },
  { label: "Wednesday", hours: 5 },
  { label: "Thursday", hours: 7 },
  { label: "Friday", hours: 3 },
  { label: "Saturday", hours: 4 },
  { label: "Sunday", hours: 2 },
];

const monthlyData = [
  { label: "January", hours: 42 },
  { label: "February", hours: 38 },
  { label: "March", hours: 51 },
  { label: "April", hours: 46 },
  { label: "May", hours: 48 },
  { label: "June", hours: 40 },
  { label: "July", hours: 54 },
  { label: "August", hours: 36 },
  { label: "September", hours: 47 },
  { label: "October", hours: 44 },
  { label: "November", hours: 39 },
  { label: "December", hours: 50 },
];

const yearlyData = [{ label: "2026", hours: 620 }];

const chartConfig = {
  hours: {
    label: "Hours",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function TeachingHoursChart() {
  const [period, setPeriod] = useState("week");
  const chartData =
    period === "week"
      ? weeklyData
      : period === "month"
        ? monthlyData
        : yearlyData;

  return (
    <Card className="bg-card p-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-heading text-lg">Teaching Hours</CardTitle>

        <ToggleGroup
          type="single"
          value={period}
          onValueChange={(value) => {
            if (value) setPeriod(value);
          }}
        >
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
        <div className="max-h-[320px] overflow-y-auto">
          <ChartContainer
            config={chartConfig}
            className="w-full"
            style={{
              height: `${Math.max(chartData.length * 40, 320)}px`,
            }}
          >
            {" "}
            <BarChart
              accessibilityLayer
              data={chartData}
              layout="vertical"
              margin={{
                top: 10,
                right: 30,
                left: 30,
                bottom: 10,
              }}
            >
              <CartesianGrid horizontal={false} />

              <XAxis type="number" hide />

              <YAxis
                dataKey="label"
                type="category"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                width={80}
              />

              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              <Bar
                dataKey="hours"
                fill="hsl(var(--chart-3))"
                radius={8}
                barSize={22}
              >
                <LabelList
                  dataKey="hours"
                  position="right"
                  offset={8}
                  fill="hsl(var(--foreground))"
                  fontSize={13}
                  formatter={(value: number) => `${value}h`}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
