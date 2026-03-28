import React from "react";
import { View, Text } from "react-native";
import { DemoLayout } from "./DemoLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { AreaChart } from "../components/ui/area-chart";
import { BarChart } from "../components/ui/bar-chart";
import { LineChart } from "../components/ui/line-chart";
import { PieChart } from "../components/ui/pie-chart";
import { RadarChart } from "../components/ui/radar-chart";
import { RadialChart } from "../components/ui/radial-chart";

function Legend({ items }: { items: { color: string; label: string; value?: string }[] }) {
  return (
    <View className="flex-row flex-wrap gap-x-4 gap-y-1.5 mt-3">
      {items.map((item) => (
        <View key={item.label} className="flex-row items-center gap-1.5">
          <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: item.color }} />
          <Text className="text-muted-foreground text-xs">{item.label}</Text>
          {item.value && <Text className="text-foreground text-xs font-semibold">{item.value}</Text>}
        </View>
      ))}
    </View>
  );
}

function StatRow({ items }: { items: { label: string; value: string; sub?: string }[] }) {
  return (
    <View className="flex-row gap-4 mt-1">
      {items.map((item) => (
        <View key={item.label} className="flex-1">
          <Text className="text-foreground text-lg font-bold">{item.value}</Text>
          <Text className="text-muted-foreground text-xs">{item.label}</Text>
          {item.sub && <Text className="text-xs text-green-500 font-medium">{item.sub}</Text>}
        </View>
      ))}
    </View>
  );
}

const revenueData = [
  { label: "Jan", value: 32 },
  { label: "Feb", value: 48 },
  { label: "Mar", value: 41 },
  { label: "Apr", value: 73 },
  { label: "May", value: 62 },
  { label: "Jun", value: 88 },
];

const userGrowth = [
  { label: "Jan", value: 1200 },
  { label: "Feb", value: 1850 },
  { label: "Mar", value: 1600 },
  { label: "Apr", value: 2400 },
  { label: "May", value: 2100 },
  { label: "Jun", value: 3200 },
];

const weekSales = [
  { label: "Mon", value: 40, color: "#3b82f6" },
  { label: "Tue", value: 72, color: "#8b5cf6" },
  { label: "Wed", value: 55, color: "#10b981" },
  { label: "Thu", value: 88, color: "#f59e0b" },
  { label: "Fri", value: 64, color: "#ef4444" },
  { label: "Sat", value: 95, color: "#06b6d4" },
];

const frameworkData = [
  { label: "React Native", value: 88, color: "#3b82f6" },
  { label: "Flutter", value: 74, color: "#06b6d4" },
  { label: "SwiftUI", value: 66, color: "#f59e0b" },
  { label: "Kotlin", value: 60, color: "#10b981" },
  { label: "Xamarin", value: 32, color: "#9ca3af" },
];

const trafficData = [
  { value: 42, color: "#3b82f6", label: "42%" },
  { value: 28, color: "#10b981", label: "28%" },
  { value: 18, color: "#f59e0b", label: "18%" },
  { value: 12, color: "#8b5cf6", label: "12%" },
];

const budgetData = [
  { value: 38, color: "#3b82f6" },
  { value: 24, color: "#10b981" },
  { value: 20, color: "#f59e0b" },
  { value: 18, color: "#ef4444" },
];

export function ChartsDemo() {
  return (
    <DemoLayout title="Charts">
      {/* ─── Area Charts ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <CardTitle className="text-base">Revenue Trend</CardTitle>
              <CardDescription>Monthly revenue — Jan to Jun</CardDescription>
            </View>
            <Badge variant="secondary">+37%</Badge>
          </View>
          <StatRow items={[
            { label: "This month", value: "$88k", sub: "↑ 42% vs last month" },
            { label: "Average", value: "$57k" },
            { label: "Peak", value: "Jun" },
          ]} />
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <AreaChart data={revenueData} height={180} color="#3b82f6" showLabels curved />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <CardTitle className="text-base">User Acquisition</CardTitle>
              <CardDescription>New vs returning users</CardDescription>
            </View>
            <Badge>Live</Badge>
          </View>
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <AreaChart
            data={userGrowth}
            height={180}
            showLabels
            series={[
              { data: userGrowth, color: "#3b82f6" },
              { data: userGrowth.map((d) => ({ label: d.label, value: Math.round(d.value * 0.55) })), color: "#10b981" },
            ]}
          />
        </CardContent>
        <CardFooter className="pt-3">
          <Legend items={[
            { color: "#3b82f6", label: "New users", value: "3.2k" },
            { color: "#10b981", label: "Returning", value: "1.8k" },
          ]} />
        </CardFooter>
      </Card>

      {/* ─── Bar Charts ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Daily Sales</CardTitle>
          <CardDescription>Units sold this week</CardDescription>
          <StatRow items={[
            { label: "Total", value: "414", sub: "↑ 12% vs last week" },
            { label: "Best day", value: "Sat" },
            { label: "Avg/day", value: "69" },
          ]} />
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <BarChart data={weekSales} height={180} showLabels barRadius={6} />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <CardTitle className="text-base">Framework Popularity</CardTitle>
              <CardDescription>Developer survey 2024</CardDescription>
            </View>
            <Badge variant="outline">Survey</Badge>
          </View>
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <BarChart
            data={frameworkData}
            height={200}
            horizontal
            showLabels
            barRadius={4}
          />
        </CardContent>
        <CardFooter className="pt-3">
          <Text className="text-muted-foreground text-xs">Based on 12,400 developer responses</Text>
        </CardFooter>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Quarterly Revenue</CardTitle>
          <CardDescription>Year-over-year comparison</CardDescription>
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <BarChart
            height={190}
            showLabels
            grouped={[
              { key: "2023", color: "#94a3b8" },
              { key: "2024", color: "#3b82f6" },
            ]}
            groupedData={[
              { label: "Q1", values: [42, 58] },
              { label: "Q2", values: [67, 82] },
              { label: "Q3", values: [54, 71] },
              { label: "Q4", values: [78, 96] },
            ]}
          />
        </CardContent>
        <CardFooter className="pt-3">
          <Legend items={[
            { color: "#94a3b8", label: "2023" },
            { color: "#3b82f6", label: "2024" },
          ]} />
        </CardFooter>
      </Card>

      {/* ─── Line Charts ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <CardTitle className="text-base">Stock Price</CardTitle>
              <CardDescription>ANUI · Last 6 months</CardDescription>
            </View>
            <View className="items-end">
              <Text className="text-foreground font-bold text-base">$88.40</Text>
              <Text className="text-green-500 text-xs font-medium">+37.5%</Text>
            </View>
          </View>
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <LineChart data={revenueData} height={180} color="#8b5cf6" showLabels showDots curved />
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Performance Metrics</CardTitle>
          <CardDescription>App vs API response time (ms)</CardDescription>
        </CardHeader>
        <CardContent className="pt-3 pb-0">
          <LineChart
            height={180}
            showLabels
            showDots
            series={[
              { data: revenueData.map((d) => ({ label: d.label, value: d.value })), color: "#3b82f6" },
              { data: revenueData.map((d) => ({ label: d.label, value: Math.round(d.value * 0.65 + 8) })), color: "#ef4444", dashed: true },
            ]}
          />
        </CardContent>
        <CardFooter className="pt-3">
          <Legend items={[
            { color: "#3b82f6", label: "App latency", value: "88ms" },
            { color: "#ef4444", label: "API latency (p95)", value: "65ms" },
          ]} />
        </CardFooter>
      </Card>

      {/* ─── Pie / Donut ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Traffic Sources</CardTitle>
          <CardDescription>Sessions by channel · June</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <View className="flex-row items-center gap-4">
            <View style={{ flex: 1.2 }}>
              <PieChart data={trafficData} height={180} showLabels />
            </View>
            <View className="flex-1 gap-3">
              {[
                { color: "#3b82f6", label: "Organic", value: "42%", sub: "12.4k" },
                { color: "#10b981", label: "Direct", value: "28%", sub: "8.3k" },
                { color: "#f59e0b", label: "Social", value: "18%", sub: "5.3k" },
                { color: "#8b5cf6", label: "Referral", value: "12%", sub: "3.5k" },
              ].map((item) => (
                <View key={item.label} className="flex-row items-center gap-2">
                  <View style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: item.color }} />
                  <View className="flex-1">
                    <Text className="text-foreground text-xs font-semibold">{item.label}</Text>
                    <Text className="text-muted-foreground text-xs">{item.sub}</Text>
                  </View>
                  <Text className="text-foreground text-xs font-bold">{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Budget Allocation</CardTitle>
          <CardDescription>Q2 2024 · Total $240k</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <View className="flex-row items-center gap-4">
            <View style={{ flex: 1 }}>
              <PieChart data={budgetData} height={180} innerRadius={0.55} showLabels />
            </View>
            <View className="flex-1 gap-3">
              {[
                { color: "#3b82f6", label: "Engineering", value: "$91k" },
                { color: "#10b981", label: "Marketing", value: "$58k" },
                { color: "#f59e0b", label: "Operations", value: "$48k" },
                { color: "#ef4444", label: "R&D", value: "$43k" },
              ].map((item) => (
                <View key={item.label} className="flex-row items-center gap-2">
                  <View style={{ width: 10, height: 10, borderRadius: 3, backgroundColor: item.color }} />
                  <Text className="text-foreground text-xs font-semibold flex-1">{item.label}</Text>
                  <Text className="text-muted-foreground text-xs">{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>

      {/* ─── Radar Charts ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Skills Assessment</CardTitle>
          <CardDescription>Full-stack developer profile</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <RadarChart
            data={[
              { label: "Frontend", value: 88 },
              { label: "Backend", value: 72 },
              { label: "DevOps", value: 60 },
              { label: "Mobile", value: 90 },
              { label: "Design", value: 65 },
              { label: "Testing", value: 78 },
            ]}
            height={220}
            color="#8b5cf6"
            fillOpacity={0.25}
            showDots
          />
        </CardContent>
        <CardFooter className="pt-1">
          <Text className="text-muted-foreground text-xs">Overall score: 75.5 / 100</Text>
        </CardFooter>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Player Comparison</CardTitle>
          <CardDescription>Season stats · Player A vs B</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <RadarChart
            height={220}
            series={[
              {
                data: [
                  { label: "Speed", value: 82 },
                  { label: "Power", value: 68 },
                  { label: "Accuracy", value: 74 },
                  { label: "Defense", value: 88 },
                  { label: "Stamina", value: 76 },
                ],
                color: "#3b82f6",
                fillOpacity: 0.2,
              },
              {
                data: [
                  { label: "Speed", value: 64 },
                  { label: "Power", value: 90 },
                  { label: "Accuracy", value: 58 },
                  { label: "Defense", value: 70 },
                  { label: "Stamina", value: 85 },
                ],
                color: "#ef4444",
                fillOpacity: 0.2,
              },
            ]}
          />
        </CardContent>
        <CardFooter className="pt-1">
          <Legend items={[
            { color: "#3b82f6", label: "Player A" },
            { color: "#ef4444", label: "Player B" },
          ]} />
        </CardFooter>
      </Card>

      {/* ─── Radial Charts ─── */}
      <Card className="mb-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">KPI Dashboard</CardTitle>
          <CardDescription>Q2 targets progress</CardDescription>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <View className="flex-row items-center gap-4">
            <View style={{ flex: 1 }}>
              <RadialChart
                data={[
                  { value: 78, maxValue: 100, color: "#3b82f6" },
                  { value: 55, maxValue: 100, color: "#10b981" },
                  { value: 91, maxValue: 100, color: "#f59e0b" },
                ]}
                height={200}
                strokeWidth={14}
                centerText="75%"
                centerSubText="Avg"
              />
            </View>
            <View className="flex-1 gap-4">
              {[
                { color: "#3b82f6", label: "Revenue", value: "78%", detail: "$78k / $100k" },
                { color: "#10b981", label: "Users", value: "55%", detail: "5.5k / 10k" },
                { color: "#f59e0b", label: "NPS Score", value: "91%", detail: "91 / 100" },
              ].map((item) => (
                <View key={item.label}>
                  <View className="flex-row items-center justify-between mb-0.5">
                    <View className="flex-row items-center gap-1.5">
                      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: item.color }} />
                      <Text className="text-foreground text-xs font-semibold">{item.label}</Text>
                    </View>
                    <Text className="text-foreground text-xs font-bold">{item.value}</Text>
                  </View>
                  <Text className="text-muted-foreground text-xs ml-3.5">{item.detail}</Text>
                </View>
              ))}
            </View>
          </View>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader className="pb-2">
          <View className="flex-row items-start justify-between">
            <View className="flex-1">
              <CardTitle className="text-base">Health Score</CardTitle>
              <CardDescription>App reliability index</CardDescription>
            </View>
            <Badge variant="secondary">Good</Badge>
          </View>
        </CardHeader>
        <CardContent className="pt-2 pb-0">
          <RadialChart
            data={[{ value: 82, maxValue: 100, color: "#10b981" }]}
            height={160}
            strokeWidth={18}
            centerText="82"
            centerSubText="/ 100"
            startAngle={-130}
            endAngle={130}
          />
        </CardContent>
        <CardFooter className="pt-2 justify-center gap-6">
          {[
            { label: "Uptime", value: "99.9%" },
            { label: "Errors", value: "0.1%" },
            { label: "P95", value: "142ms" },
          ].map((s) => (
            <View key={s.label} className="items-center">
              <Text className="text-foreground text-sm font-bold">{s.value}</Text>
              <Text className="text-muted-foreground text-xs">{s.label}</Text>
            </View>
          ))}
        </CardFooter>
      </Card>
    </DemoLayout>
  );
}
