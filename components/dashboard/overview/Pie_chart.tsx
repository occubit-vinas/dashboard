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
  const { title, price, percentage, stats, origin } = data
  const isPositive = percentage > 0

  return (
    <div className="relative rounded-2xl h-[458px] w-[388px] p-[20px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] bg-white">
      
      {/* Title */}
      <h2 className="text-main text-start">{title}</h2>

      {/* Pie Chart */}
      <div className="relative w-[220px] h-[220px] ml-[84px] mt-[30px] ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={stats}
              dataKey="value"
              nameKey="name"
              innerRadius={60}    // fits inside 220px box
              outerRadius={110}   // perfect sizing
              paddingAngle={2}
              cornerRadius={6}
            >
              {stats.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER LABEL */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {price && (
            <p className="text-2xl font-bold text-gray-900">
              ₹{price}
            </p>
          )}

          {percentage && (
            <div className="flex items-center gap-1 mt-1">
              {origin !== 'sales' && (
                <Image
                  src={isPositive ? '/dashboard/box/up.png' : '/dashboard/box/down.png'}
                  alt="trend"
                  width={16}
                  height={16}
                />
              )}
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
      </div>

      {/* Details List */}
      <div className="w-full mt-[30px]">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-[10px]"
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
  )
}






export const Round_Pie_chart = ({ data }) => {
  const { title, price, percentage, stats, origin } = data
  const isPositive = percentage > 0

  return (
    <div className="relative bg-white rounded-2xl p-[20px]  w-[671px] h-[302px] shadow-[0_0_2px_0.5px_#00000040]  flex flex-col gap-[20px]">

      <div className='w-[215px] flex flex-col gap-[5px]'>
        {/* Title */}
        <h2 className="inter text-[18px] font-light text-center w-[215px]">{title}</h2>

        {/* Price + Percentage Row */}
        <div className="flex items-center justify-between w-[215px] ">
          <p className="text-xl  text-gray-600">₹{price}</p>

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
                className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'
                  }`}
              >
                {percentage}%
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='flex flex-row justify-center items-center gap-[15px] mb-[20px] ml-[40px] mr-[50px]'>


        {/* Pie Chart */}
       <div className="w-[205px] h-[205px] min-w-[205px] min-h-[205px] shrink-0 relative flex justify-center items-center -translate-y-5 -translate-x-6">
  <ResponsiveContainer width="100%" height="100%">
    <PieChart>
      <Pie
        data={stats}
        dataKey="value"
        nameKey="name"
        innerRadius={60}
        outerRadius={95}
        paddingAngle={2}
        cornerRadius={11}
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
        <div className="w-[355px] h-[90px] mb-[73px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 "
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

