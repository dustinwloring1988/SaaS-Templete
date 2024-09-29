"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
} from "@/components/ui/chart"
import { Sidebar } from "@/components/Sidebar"

export const description = "An interactive bar chart showing API usage"

const chartData = [
  { date: "2024-04-01", messages: 322 },
  { date: "2024-04-02", messages: 277 },
  { date: "2024-04-03", messages: 287 },
  { date: "2024-04-04", messages: 502 },
  { date: "2024-04-05", messages: 663 },
  { date: "2024-04-06", messages: 641 },
  { date: "2024-04-07", messages: 425 },
  { date: "2024-04-08", messages: 729 },
  { date: "2024-04-09", messages: 169 },
  { date: "2024-04-10", messages: 451 },
  { date: "2024-04-11", messages: 677 },
  { date: "2024-04-12", messages: 502 },
  { date: "2024-04-13", messages: 722 },
  { date: "2024-04-14", messages: 357 },
  { date: "2024-04-15", messages: 290 },
]

const chartConfig = {
  messages: {
    label: "Messages Sent",
    color: "hsl(var(--chart-1))",
  },
}

export default function Page() {
  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.messages, 0),
    []
  )

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-6">API Usage</h1>
        <Card>
          <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-6">
            <div className="flex flex-1 flex-col justify-center gap-1">
              <CardTitle>Bar Chart - API Usage</CardTitle>
              <CardDescription>
                Showing total messages sent to AI for the last 15 days
              </CardDescription>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold">Total Messages:</span>
              <span className="text-3xl font-bold">{total.toLocaleString()}</span>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <ChartContainer className="aspect-[32/9] w-full" config={{}}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                />
                <YAxis />
                <Tooltip
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                  formatter={(value) => [`${value} messages`, "Messages Sent"]}
                />
                <Bar dataKey="messages" fill={chartConfig.messages.color} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}