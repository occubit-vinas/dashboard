import React from 'react'

const Recentorder = ({ data }) => {
  return (
    <div className="w-1/2 bg-white rounded-2xl p-4 flex flex-col shadow-sm">
      {/* Header */}
      <p className="text-main mb-2">Recent Orders</p>

      {/* Table Header */}
      <div className="grid grid-cols-6 text-sm font-semibold bg-purple-100 text-gray-800 py-2 px-2 rounded-xl">
        <p className="col-span-2">Email</p>
        <p>Total Products</p>
        <p>Total Amount</p>
        <p>Date</p>
        <p>Payment</p>
      </div>

      {/* Table Body */}
      <div className="overflow-y-auto max-h-[250px] mt-2">
        {data.map((cur, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm items-center py-2 px-2 border-b-2 border-gray-400 hover:bg-gray-50 transition"
          >
            <p className="col-span-2 text-gray-700 truncate">{cur.email}</p>
            <p className="text-gray-700 pl-5">{cur.products}</p>
            <p className="text-gray-700">{cur.amount}</p>
            <p className="text-gray-700">{cur.date}</p>
            <p
              className={`font-medium px-3 py-1 rounded-full text-center ${
                cur.payment.toLowerCase() === 'pending'
                  ? 'text-yellow-700 border border-yellow-500'
                  : 'text-green-700 border border-green-500'
              }`}
            >
              {cur.payment}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recentorder
