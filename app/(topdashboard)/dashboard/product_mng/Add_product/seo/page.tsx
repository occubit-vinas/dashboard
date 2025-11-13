'use client'
import React, { useState } from 'react'

const Page = () => {
  // ✅ States for both inputs
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 60) setTitle(value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 160) setDescription(value)
  }

  return (
    <div className="container mx-auto my-10">
      <div className="p-6 bg-white  rounded-xl flex flex-col gap-8">
        
        {/* SEO Title & Description */}
        <div className="flex flex-row gap-6">
          
          {/* SEO Title */}
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-first ml-3">SEO Title</h1>
            <textarea
              rows={4}
              placeholder="Enter SEO title"
              value={title}
              onChange={handleTitleChange}
              className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
            />
            <div className="flex flex-row justify-between text-sm">
              <p className="text-third">Recommended: 50–60 characters</p>
              <p className={`text-${title.length > 60 ? 'red-500' : 'third'}`}>
                {title.length}/60
              </p>
            </div>
          </div>

          {/* SEO Description */}
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-first ml-3">SEO Description</h1>
            <textarea
              rows={4}
              placeholder="Enter SEO meta description"
              value={description}
              onChange={handleDescriptionChange}
              className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
            />
            <div className="flex flex-row justify-between text-sm">
              <p className="text-third">Recommended: 150–160 characters</p>
              <p className={`text-${description.length > 160 ? 'red-500' : 'third'}`}>
                {description.length}/160
              </p>
            </div>
          </div>

        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-first ml-3'>SEO Keywords</p>
            <div className='flex flex-row gap-2 w-full h-10'>
                <input
                className='light-purple rounded-sm  h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)]  flex items-center pl-3 w-26/27'
                placeholder='Add keywords'
                />
            <div className='shadow-[0_0_3px_0_rgba(108,108,128,0.35)] rounded-sm flex items-center justify-center text-2xl text-gray-600 w-1/27 h-full border-2 border-gray-400'>+</div>
            </div>
        </div>

        {/* Search Preview */}
        <div className="flex flex-col gap-2 border border-gray-400 rounded-md p-3">
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6C6C80',
            }}
          >
            Search Preview
          </p>
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              color: '#4A3AFF',
            }}
          >
            Your Product Title
          </h1>
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#3DDC97',
            }}
          >
            example.com/products/product-name
          </h1>
          <p className="text-third">
            Product description will appear here...
          </p>
        </div>

        {/* SEO Tips */}
        <div className="light-purple rounded-md p-4 shadow-[0_0_3px_0_rgba(108,108,128,0.35)]">
          <h1 className="text-first mb-2">SEO Tips</h1>
          <ol className="list-disc pl-6 text-second space-y-2">
            <li>Include your primary keyword in the title and description.</li>
            <li>Keep titles under 60 characters for optimal display.</li>
            <li>Write compelling descriptions that encourage clicks.</li>
            <li>Use relevant keywords naturally throughout your content.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Page
