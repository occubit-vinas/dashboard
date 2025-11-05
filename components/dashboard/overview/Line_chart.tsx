'use client'
import React from 'react'
import Image from 'next/image'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const Line_chart = ({ data }) => {
  return (
    <div className="rounded-2xl p-[2px] mt-5 w-full h-[415px]">
      <div className="bg-white rounded-2xl px-6 py-4 h-full flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-main">Sales Trend</h2>
          <Image
            src="/dashboard/topbar/export.png"
            alt="Export"
            width={80}
            height={30}
            className="cursor-pointer hover:opacity-80 transition"
          />
        </div>

        {/* Legend */}
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            <p className="text-xs text-gray-600">Total Revenue</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
            <p className="text-xs text-gray-600">Total Orders</p>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
            >
              {/* X-Axis (Revenue 1k–12k) */}
              <XAxis
                dataKey="revenue"
                type="number"
                domain={[1000, 12000]}
                ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000]}
                tickFormatter={(v) => `${v / 1000}k`}
                tick={{ fill: '#6b7280', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y-Axis (Orders 1k–5k) */}
              <YAxis
                domain={[1000, 5000]}
                ticks={[1000, 2000, 3000, 4000, 5000,6000,7000,8000,9000,10000,11000]}
                tickFormatter={(v) => `${v / 1000}k`}
                tick={{ fill: '#6b7280', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />

              {/* Tooltip */}
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                }}
                labelStyle={{ color: '#6b7280' }}
              />

              {/* Lines */}
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#a855f7"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#22c55e"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Line_chart
