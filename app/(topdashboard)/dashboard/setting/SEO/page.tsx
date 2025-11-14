"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Purple_button } from "../../components/top_buttons";

const Page = () => {
    const [data, setData] = useState({
        title: "",
        keywords: [] as string[],
        description: "",
        org_name: "",
        website_name: "",
        website_desc: "",
        website_url: "",
        logo_url: "",
        lang: "",
    });

    return (
        <div className="bg-white rounded-xl p-4 mt-6 flex flex-col gap-8">
            <p className="my-title ml-3">Meta Tags</p>

            {/* Meta Title + Keywords */}
            <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-6 w-full">
                    {/* Meta Title */}
                    <div className="flex flex-col gap-3 w-full">
                        <p className="text-first ml-3">Meta Title</p>
                        <input
                            type="text"
                            className="py-[10px] light-purple rounded-sm h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)] flex items-center pl-3"
                            placeholder="Your Store - Best Product online"
                            value={data.title}
                            onChange={(e) => setData({ ...data, title: e.target.value })}
                        />
                        <div className="flex flex-row justify-between w-full mx-3">
                            <p className='text-third'>Minimum 50-60 charecter required</p>
                            <p className='text-third mr-6'>{data.title.length}/60</p>
                        </div>
                    </div>

                    {/* Meta Keywords */}
                    <div className="flex flex-col gap-3 w-full">
                        <p className="text-first ml-3">Meta keywords</p>
                        <div className="flex flex-row gap-2 w-full h-10">
                            <input
                                className="light-purple rounded-sm h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)] flex items-center pl-3 w-26/27"
                                placeholder="Add keywords"
                            />
                            <div className="shadow-[0_0_3px_0_rgba(108,108,128,0.35)] rounded-sm flex items-center justify-center text-2xl text-gray-600 w-2/30 h-full border-2 border-gray-400">
                                +
                            </div>
                        </div>
                    </div>
                </div>

                {/* Meta Description */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-first ml-3">Meta Description</h1>
                    <textarea
                        rows={4}
                        placeholder="Discover amazing products..."
                        value={data.description}
                        onChange={(e) =>
                            setData({ ...data, description: e.target.value })
                        }
                        className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
                    />
                    <div className="flex flex-row justify-between text-sm">
                        <p className="text-third">Recommended: 150–160 characters</p>
                        <p
                            className={`${data.description.length > 160
                                ? "text-red-500"
                                : "text-third"
                                }`}
                        >
                            {data.description.length}/160
                        </p>
                    </div>
                </div>

                {/* SEO Preview */}
                <div className="flex flex-col gap-2 border border-gray-400 rounded-md p-3">
                    <p className="text-[20px] font-semibold text-gray-700">SEO Preview</p>
                    <h1 className="inter text-[18px] font-normal text-[#4A3AFF]">
                        {data.title || "Your Store Title"}
                    </h1>
                    <h1 className="text-[14px] font-normal text-[#3DDC97]">
                        {data.website_url || "https://yourstore.com"}
                    </h1>
                    <p className="text-third">
                        {data.description || "Your store description will appear here"}
                    </p>
                </div>

                <p className="my-title ml-3">Structured Data (Schema.org)</p>
                <div className='flex flex-col gap-8 p-4 border border-[#6C6C80] rounded-sm'>
                    <div className='flex flex-row gap-10 w-full'>
                        <div className='flex flex-col gap-8 w-full'>
                            <p className="inter font-semibold text-md">Organization Schema</p>

                            {/* Organization Fields */}
                            <div className="flex flex-row gap-6 w-full">
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-first ml-2">Organization Name</p>
                                    <input
                                        className="in-field w-full"
                                        placeholder="ABC"
                                        value={data.org_name}
                                        onChange={(e) =>
                                            setData({ ...data, org_name: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 w-full mt-2'>
                            <p className='inter font-semibold text-md'>Website Schema</p>
                             <div className="flex flex-col gap-2">
                            <p className="text-first ml-2">Website Name</p>
                            <input
                                className="in-field"
                                placeholder="ABC"
                                value={data.website_name}
                                onChange={(e) =>
                                    setData({ ...data, website_name: e.target.value })
                                }
                            />
                        </div>
                        </div>
                    </div>


                    {/* Website Description */}
                    <div className="flex flex-col gap-2">
                        <p className="text-first ml-2">Website Description</p>
                        <textarea
                            rows={4}
                            placeholder="Discover amazing products..."
                            value={data.website_desc}
                            onChange={(e) =>
                                setData({ ...data, website_desc: e.target.value })
                            }
                            className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
                        />
                    </div>

                    {/* URLs + Language */}
                    <div className="flex flex-row gap-4 w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-first ml-2">Website URL</p>
                            <input
                                className="in-field"
                                placeholder="https://yourstore.com"
                                value={data.website_url}
                                onChange={(e) =>
                                    setData({ ...data, website_url: e.target.value })
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-first ml-2">Logo URL</p>
                            <input
                                className="in-field"
                                placeholder="https://yourstore.com/logo.png"
                                value={data.logo_url}
                                onChange={(e) => setData({ ...data, logo_url: e.target.value })}
                            />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-first ml-2">Language</p>
                            <input
                                className="in-field"
                                placeholder="en-US"
                                value={data.lang}
                                onChange={(e) => setData({ ...data, lang: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Generated Schema Preview */}
            <div>
                <p className="my-title mb-8">Generated Schema Preview</p>

                <div className="border border-[#6C6C80] rounded-sm p-2 w-full">
                    <pre className="text-[13px]">
                        {JSON.stringify(
                            {
                                organization: {
                                    "@context": "https://schema.org",
                                    "@type": "Organization",
                                    name: data.org_name,
                                    url: data.website_url,
                                    logo: data.logo_url,
                                    description: data.website_desc,
                                },
                                website: {
                                    "@context": "https://schema.org",
                                    "@type": "WebSite",
                                    name: data.website_name,
                                    url: data.website_url,
                                    description: data.website_desc,
                                    inLanguage: data.lang,
                                }
                            },
                            null, 2
                        )}
                    </pre>
                </div>
            </div>

            {/* SEO Tools */}
            <p className="my-title ml-4">SEO Tools & Resources</p>

            <div className="flex flex-row gap-6 w-full">
                <div className="flex flex-col gap-2 w-full">
                    <p className="inter text-xl ml-4">Testing Tools</p>

                    <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
                        <Image
                            src="/dashboard/share.svg"
                            className="size-5"
                            height={10}
                            width={10}
                            alt='img'
                        />
                        <p className="linkbox">Google Rich Results Test</p>
                    </div>

                    <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
                        <Image
                            src="/dashboard/share.svg"
                            className="size-5"
                            height={10}
                            width={10}
                            alt='img'
                        />
                        <p className="linkbox">Schema.org Validator</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                    <p className="inter text-xl ml-4">Search Console</p>

                    <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
                        <Image
                            src="/dashboard/share.svg"
                            className="size-5"
                            height={10}
                            width={10}
                            alt='img'
                        />
                        <p className="linkbox">Google Search Console</p>
                    </div>

                    <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
                        <Image
                            src="/dashboard/share.svg"
                            className="size-5"
                            height={10}
                            width={10}
                            alt='img'
                        />
                        <p className="linkbox">Bing Webmaster Tools</p>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex flex-row justify-end">
                <Purple_button label="Save Notification Settings" />
            </div>
        </div>
    );
};

export default Page;
