"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Purple_button } from "../../components/top_buttons";
import { seo_stg } from '@/data/dashboard/constants';
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
  <p className="my-title ml-3">{seo_stg.metaTags}</p>

  <div className="flex flex-col gap-8">
    <div className="flex flex-row gap-6 w-full">
      {/* Meta Title */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-first ml-3">{seo_stg.metaTitle}</p>
        <input
          type="text"
          className="py-[10px] light-purple rounded-sm h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)] flex items-center pl-3"
          placeholder={seo_stg.metaTitlePlaceholder}
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <div className="flex flex-row justify-between w-full mx-3">
          <p className='text-third'>{seo_stg.metaTitleHint}</p>
          <p className='text-third mr-6'>{data.title.length}/60</p>
        </div>
      </div>

      {/* Meta Keywords */}
      <div className="flex flex-col gap-3 w-full">
        <p className="text-first ml-3">{seo_stg.metaKeywords}</p>
        <div className="flex flex-row gap-2 w-full h-10">
          <input
            className="light-purple rounded-sm h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)] flex items-center pl-3 flex-1"
            placeholder={seo_stg.metaKeywordsPlaceholder}
          />
          <div className="shadow-[0_0_3px_0_rgba(108,108,128,0.35)] rounded-sm flex items-center justify-center text-2xl text-gray-600 w-12 h-full border-2 border-gray-400">
            +
          </div>
        </div>
      </div>
    </div>

    {/* Meta Description */}
    <div className="flex flex-col gap-2">
      <h1 className="text-first ml-3">{seo_stg.metaDescription}</h1>
      <textarea
        rows={4}
        placeholder={seo_stg.metaDescPlaceholder}
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
        className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
      />
      <div className="flex flex-row justify-between text-sm">
        <p className="text-third">{seo_stg.metaDescHint}</p>
        <p className={`${data.description.length > 160 ? "text-red-500" : "text-third"}`}>
          {data.description.length}/160
        </p>
      </div>
    </div>

    {/* SEO Preview */}
    <div className="flex flex-col gap-2 border border-gray-400 rounded-md p-3">
      <p className="text-[20px] font-semibold text-gray-700">{seo_stg.seoPreview}</p>
      <h1 className="inter text-[18px] font-normal text-[#4A3AFF]">
        {data.title || seo_stg.defaultTitle}
      </h1>
      <h1 className="text-[14px] font-normal text-[#3DDC97]">
        {data.website_url || seo_stg.defaultUrl}
      </h1>
      <p className="text-third">
        {data.description || seo_stg.defaultDesc}
      </p>
    </div>

    <p className="my-title ml-3">{seo_stg.structuredData}</p>
    <div className='flex flex-col gap-8 p-4 border border-[#6C6C80] rounded-sm'>
      <div className='flex flex-row gap-10 w-full'>
        <div className='flex flex-col gap-8 w-full'>
          <p className="inter font-semibold text-md">{seo_stg.orgSchema}</p>
          <div className="flex flex-row gap-6 w-full">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-first ml-2">{seo_stg.orgName}</p>
              <input
                className="in-field w-full"
                placeholder={seo_stg.orgNamePlaceholder}
                value={data.org_name}
                onChange={(e) => setData({ ...data, org_name: e.target.value })}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-6 w-full mt-2'>
          <p className='inter font-semibold text-md'>{seo_stg.websiteSchema}</p>
          <div className="flex flex-col gap-2">
            <p className="text-first ml-2">{seo_stg.websiteName}</p>
            <input
              className="in-field"
              placeholder={seo_stg.websiteNamePlaceholder}
              value={data.website_name}
              onChange={(e) => setData({ ...data, website_name: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-first ml-2">{seo_stg.websiteDesc}</p>
        <textarea
          rows={4}
          placeholder={seo_stg.websiteDescPlaceholder}
          value={data.website_desc}
          onChange={(e) => setData({ ...data, website_desc: e.target.value })}
          className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
        />
      </div>

      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-first ml-2">{seo_stg.websiteUrl}</p>
          <input
            className="in-field"
            placeholder={seo_stg.websiteUrlPlaceholder}
            value={data.website_url}
            onChange={(e) => setData({ ...data, website_url: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-first ml-2">{seo_stg.logoUrl}</p>
          <input
            className="in-field"
            placeholder={seo_stg.logoUrlPlaceholder}
            value={data.logo_url}
            onChange={(e) => setData({ ...data, logo_url: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-first ml-2">{seo_stg.language}</p>
          <input
            className="in-field"
            placeholder={seo_stg.languagePlaceholder}
            value={data.lang}
            onChange={(e) => setData({ ...data, lang: e.target.value })}
          />
        </div>
      </div>
    </div>

    {/* Generated Schema Preview */}
    <div>
      <p className="my-title mb-8">{seo_stg.generatedSchema}</p>
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
    <p className="my-title ml-4">{seo_stg.seoTools}</p>
    <div className="flex flex-row gap-6 w-full">
      <div className="flex flex-col gap-2 w-full">
        <p className="inter text-xl ml-4">{seo_stg.testingTools}</p>
        <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
          <Image src="/dashboard/share.svg" className="size-5" height={10} width={10} alt='img' />
          <p className="linkbox">{seo_stg.richResults}</p>
        </div>
        <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
          <Image src="/dashboard/share.svg" className="size-5" height={10} width={10} alt='img' />
          <p className="linkbox">{seo_stg.schemaValidator}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <p className="inter text-xl ml-4">{seo_stg.searchConsole}</p>
        <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
          <Image src="/dashboard/share.svg" className="size-5" height={10} width={10} alt='img' />
          <p className="linkbox">{seo_stg.googleConsole}</p>
        </div>
        <div className="border border-[#6C6C80] p-4 flex flex-row gap-1.5 rounded-sm">
          <Image src="/dashboard/share.svg" className="size-5" height={10} width={10} alt='img' />
          <p className="linkbox">{seo_stg.bingTools}</p>
        </div>
      </div>
    </div>

    {/* Save Button */}
    <div className="flex flex-row justify-end">
      <Purple_button label={seo_stg.saveBtn} />
    </div>
  </div>
</div>
    );
};

export default Page;
