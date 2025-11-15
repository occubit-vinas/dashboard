"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jun 2025", retention: 82 },
  { month: "Jul 2025", retention: 85 },
  { month: "Aug 2025", retention: 87 },
  { month: "Sep 2025", retention: 89 },
  { month: "Oct 2025", retention: 90 },
  { month: "Nov 2025", retention: 92 }
];

export default function RetentionTrendChart() {
  return (
    <div style={{ width: "100%", maxWidth: 700, margin: "40px auto" }}>
      <h2 style={{ marginBottom: 4 }}>Retention Trend</h2>
      <p style={{ marginTop: 0, color: "#555" }}>
        Monthly customer retention and growth
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          
          {/* Only horizontal grid lines */}
          <CartesianGrid
            stroke="#e0e0e0"
            vertical={false}       // ❌ removes vertical grid lines
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            tickFormatter={(value) => `${value}%`}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip formatter={(v) => `${v}%`} />

          <Line
            type="monotone"
            dataKey="retention"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
