"use client";

import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { Products_topselling } from "@/data/dashboard/data";
import ProductCategory from "@/components/dashboard/products/product_category";
import ProductRating from "@/components/dashboard/products/product_rating";
import { Purple_button } from "../components/top_buttons";
import { products_topselling } from "@/data/dashboard/constants";
const Products = () => {
    return (
        <div className="container mx-auto w-full  rounded-2xl  flex flex-col gap-[15px]">
            <div className="bg-white  rounded-2xl shadow-[0_0_2px_0.5px_rgba(0,0,0,0.25)] w-[1760px] h-[320px] p-[20px] ">
                {/* Header */}
                <div className="w-full flex flex-row justify-between items-start ">
                    <div>
                        <h1 className="text-main">
                            {products_topselling.TITLE}
                        </h1>
                        <p className="text-gray-600 text-sm pb-[20px]">
                            {products_topselling.DESC}
                        </p>
                    </div>

                    {/* Search + Filter */}
                    <div className="flex flex-row gap-2 items-center">
                        <div className="relative">
                            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products, orders, customers"
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 w-72"
                            />
                        </div>
                        {/* <Image
                            src="/dashboard/filter.png"
                            alt="Filter"
                            width={80}
                            height={20}
                            className="cursor-pointer"
                        /> */}
                        <Purple_button img='/dashboard/whitefilter.svg' label='filter' />
                    </div>
                </div>

                {/* Table Header */}
                <div className="flex justify-between text-xl items-center h-[37px] border-b  border-gray-200  text-center bg-[#F4E9FF] rounded-full ">
                    <h1 className="w-1/4 text-first pl-4 pt-1">{products_topselling.header.PRODUCT}</h1>
                    <h1 className="w-1/4 text-first pt-1">{products_topselling.header.CATEGORY}</h1>
                    <h1 className="w-1/4 text-center text-first pt-1">{products_topselling.header.SOLD}</h1>
                    <h1 className="w-1/4 text-center text-first pt-1">{products_topselling.header.STOCK}</h1>
                    <h1 className="w-1/4 text-center text-first pt-1">{products_topselling.header.REVIEW}</h1>
                </div>

                {/* Product Rows */}
                <div className="flex flex-col gap-2 max-h-[175px] scroll-container ">
                    {Products_topselling.map((cur, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between text-sm  border-b-[1px]  border-[#CACAD4] h-[57px] "
                        >
                            {/* Product */}
                            <div className="w-1/5  rounded-xl px-3 py-[20px] flex flex-row gap-[8px]">
                                <Image src='/dashboard/close-circle.png' height={20} width={20} alt='img' className='size-[30px]'/>
                                <div>

                                <h1 className="text-first">{cur.id}</h1>
                                <p className="text-gray-600">{cur.name}</p>
                                </div>

                            </div>

                            {/* Category */}
                            <div className="w-1/5 text-center rounded-xl px-3 py-[20px] text-gray-700">
                                {cur.cat}
                            </div>

                            {/* Product Sold */}
                            <div className="w-1/5  rounded-xl px-3 py-[20px] text-gray-700 text-center">
                                {cur.sold}
                            </div>
                            <div className="w-1/5  rounded-xl px-3 py-[20px] text-gray-700 text-center">
                                {cur.stock}
                            </div>

                            {/* Review Stars */}
                            <div className="w-1/5 flex justify-center gap-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <Image
                                        key={i}
                                        src={
                                            i < (cur.star ?? 0)
                                                ? "/dashboard/starr.png"
                                                : "/dashboard/starthollow.png"
                                        }
                                        alt="Star"
                                        width={18}
                                        height={18}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row gap-[15px] w-full">
                <div className="">
                    <ProductCategory />
                </div>
                <div className="">
                    <ProductRating />
                </div>
            </div>
        </div>
    );
};

export default Products;
