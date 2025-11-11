'use client'
import React from 'react'
import Image from 'next/image'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const COLORS = ['#5B21B6', '#8B5CF6', '#C4B5FD'] // dark → light purple shades

export const Pie_chart = ({ data }) => {
  const { title, price, percentage, stats,origin } = data
  const isPositive = percentage > 0

  return (
    <div className={`relative rounded-2xl p-[2px] bg-gradient-to-tl from-purple-900 to-purple-100 w-full h-full `}>
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-between h-full">

        {/* Title */}
        <h2 className="text-main">
          {title}
        </h2>

        {/* Pie Chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats}
                dataKey="value"
                nameKey="name"
                innerRadius={90}
                outerRadius={120}
                paddingAngle={2}
              >
                {stats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label */}
          <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            {price && <p className="text-2xl font-bold text-gray-900">₹{price}</p>}
            <div className="flex items-center justify-center gap-1 mt-1">
              {origin !== 'sales' && <Image
                src={isPositive ? '/dashboard/box/up.png' : '/dashboard/box/down.png'}
                alt="trend"
                width={16}
                height={16}
              />}
              {percentage &&
                <p
                  className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                  {percentage}%
                </p>
              }
            </div>
          </div>
        </div>

        {/* Order Details Below */}
        <div className="w-full mt-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <p className="text-gray-700 text-sm">{item.name}</p>
              </div>
              <p className="text-gray-900 font-semibold text-sm">{item.value}{origin == 'sales'?'%':''}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}








export const Round_Pie_chart = ({ data }) => {
  const { title, price, percentage, stats, origin } = data
  const isPositive = percentage > 0

  return (
    <div className="relative rounded-2xl p-[2px] bg-gradient-to-tl from-purple-900 to-purple-100 w-full h-full">
      <div className="bg-white rounded-2xl p-6 flex flex-col h-full">

        {/* Title */}
        <h2 className="text-main font-semibold text-lg mb-2 text-center">{title}</h2>

        {/* Price + Percentage Row */}
        <div className="flex items-center justify-between w-full mb-4">
          <p className="text-2xl  text-gray-600">₹{price}</p>

          {origin !== 'sales' && (
            <div className="inline-flex items-center gap-1">
              <Image
                src={isPositive ? '/dashboard/box/up.png' : '/dashboard/box/down.png'}
                alt="trend"
                width={14}
                height={14}
                className="inline-block align-middle"
              />
              <p
                className={`text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {percentage}%
              </p>
            </div>
          )}
        </div>

        {/* Pie Chart */}
        <div className="w-full flex-1 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stats}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={120}
                paddingAngle={2}
                cornerRadius={14} // ✅ Rounded ends
              >
                {stats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Order Details Below */}
        <div className="w-full mt-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></div>
                <p className="text-gray-700 text-sm">{item.name}</p>
              </div>
              <p className="text-gray-900 font-semibold text-sm">
                {item.value}
                {origin === 'sales' ? '%' : ''}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

