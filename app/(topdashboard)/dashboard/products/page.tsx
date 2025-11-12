"use client";

import React from "react";
import { Search } from "lucide-react";
import Image from "next/image";
import { Products_topselling } from "@/data/dashboard/data";
import ProductCategory from "@/components/dashboard/products/product_category";
import ProductRating from "@/components/dashboard/products/product_rating";
import { Purple_button } from "../components/top_buttons";
const Products = () => {
    return (
        <div className="container mx-auto w-full p-4 rounded-2xl  flex flex-col gap-4">
            <div className="bg-white p-4 rounded-2xl box-shadow-2xl shadow">
                {/* Header */}
                <div className="w-full flex flex-row justify-between items-start ">
                    <div>
                        <h1 className="text-main">
                            Top Selling Products
                        </h1>
                        <p className="text-gray-600 text-sm pb-3">
                            Best performing products by sales volume
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
                        <Purple_button img='/dashboard/whitefilter.svg' label='filter'/>
                    </div>
                </div>

                {/* Table Header */}
                <div className="flex justify-between text-xl py-2.5 border-b  border-gray-200  text-center bg-purple-100 rounded-full ">
                    <h1 className="w-1/4 text-first  text-left pl-4 pt-1">Product</h1>
                    <h1 className="w-1/4 text-first pt-1">Category</h1>
                    <h1 className="w-1/4 text-center text-first pt-1">Product Sold</h1>
                    <h1 className="w-1/4 text-center text-first pt-1">Review</h1>
                </div>

                {/* Product Rows */}
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px]">
                    {Products_topselling.map((cur, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between text-sm gap-2 border-b-1 border-gray-600"
                        >
                            {/* Product */}
                            <div className="w-1/4  rounded-xl px-3 py-2">
                                <h1 className="text-first">{cur.id}</h1>
                                <p className="text-gray-600">{cur.name}</p>
                            </div>

                            {/* Category */}
                            <div className="w-1/4 text-center rounded-xl px-3 py-4.5 text-gray-700">
                                {cur.cat}
                            </div>

                            {/* Product Sold */}
                            <div className="w-1/4  rounded-xl px-3 py-4.5 text-gray-700 text-center">
                                {cur.sold}
                            </div>

                            {/* Review Stars */}
                            <div className="w-1/4 flex justify-center gap-1">
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
            <div className="flex flex-row gap-4 w-full">
                <div className="w-1/2">
                    <ProductCategory/>
                </div>
                <div className="w-1/2">
                    <ProductRating/>
                </div>
            </div>
        </div>
    );
};

export default Products;
