import React from 'react'

const Recentorder = ({ data }) => {
  return (
    <div className="min-w-[872px] bg-white rounded-2xl p-4 flex flex-col h-[302px] shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)]">
      {/* Header */}
      <p className="text-main mb-2">Recent Orders</p>

      {/* Table Header */}
      <div className="grid grid-cols-6  bg-purple-100 inter text-sm py-2 px-2 rounded-xl">
        <p className="col-span-2 translate-x-2">Email</p>
        <p className='-translate-x-6'>Total Products</p>
        <p className='-translate-x-3'>Total Amount</p>
        <p className='translate-x-4'>Date</p>
        <p className='translate-x-4'>Payment</p>
      </div>

      {/* Table Body */}
      <div className="overflow-y-auto max-h-[240px] mt-2 scroll-container">
        {data.map((cur, index) => (
          <div
            key={index}
            className="grid grid-cols-6 text-sm items-center py-2 px-2 border-b-1 border-gray-400 hover:bg-gray-50 transition"
          >
            <p className="col-span-2 text-gray-700 truncate">{cur.email}</p>
            <p className="text-gray-700 pl-5">{cur.products}</p>
            <p className="text-gray-700">{cur.amount}</p>
            <p className="text-gray-700">{cur.date}</p>
            <p
              className={`font-medium px-1.5 py-1 rounded-full text-center ${cur.payment.toLowerCase() === 'pending'
                  ? 'text-[#E8BD11] border-[1px] border-[#E8BD11]'
                  : 'text-[#4A3AFF] border-[1px] border-[#4A3AFF]'
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
