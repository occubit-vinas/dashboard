import React from 'react'
import Image from 'next/image'

const Products = ({ data }) => {
    return (
        <div className="w-1/2 bg-white rounded-2xl p-4 flex flex-col shadow-sm h-92 ">
            {/* Header */}
            <p className="text-main mb-2">Top Products</p>

            {/* Product List */}
            <div className="overflow-y-auto max-h-[279px]">
                {data.map((cur, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-1.5 border-b-1 border-gray-400 hover:bg-gray-50 transition px-2"
                    >
                        {/* Product Details */}
                        <div className="flex flex-col">
                            <p className="text-gray-800 font-medium">{cur.name}</p>
                            <p className="text-gray-500 text-sm">
                                Size: {cur.size}, Color: {cur.color}
                            </p>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                                <Image
                                    key={i}
                                    src={
                                        i < cur.star
                                            ? '/dashboard/starr.png'   // filled star image
                                            : '/dashboard/starthollow.png'    // empty star image
                                    }
                                    alt="Star"
                                    width={22}
                                    height={22}
                                />
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
