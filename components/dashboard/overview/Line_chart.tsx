'use client'
import React from 'react'
import Image from 'next/image'
import { btn_label } from '@/data/dashboard/constants'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { White_button } from '@/app/(topdashboard)/dashboard/components/top_buttons'

const Line_chart = ({ data }) => {
  return (
   <div className="rounded-2xl p-[10px] w-[671px] h-[302px] shadow-[0_0_2px_0.5px_#00000040] bg-white">
  <div className="bg-white rounded-2xl h-full flex flex-col">

    {/* Header */}
    <div className="flex justify-between items-center mx-[14px] mt-[5px]">
      <h2 className="text-main">{btn_label.sat}</h2>
      <White_button label="Export" className='-translate-y-4'/>
    </div>

    {/* Legend */}
    <div className="flex gap-8 mx-[14px]">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3DDC97]"></span>
        <p className="text-xs text-gray-600">{btn_label.tr}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
        <p className="text-xs text-gray-600">{btn_label.too}</p>
      </div>
    </div>

    {/* Chart */}
    <div className="flex-1 min-h-0 -translate-x-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 0, bottom: 0, left: 0 }}   // ⭐ EXACT FIX
        >
          <XAxis
            dataKey="revenue"
            type="number"
            domain={[1000, 12000]}
            tickFormatter={(v) => `${v / 1000}k`}
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            domain={[1000, 5000]}
            tickFormatter={(v) => `${v / 1000}k`}
            tick={{ fill: "#6b7280", fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />
          <Line type="monotone" dataKey="orders" stroke="#a855f7" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="revenue" stroke="#3DDC97" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>

  </div>
</div>

  )
}

export default Line_chart
