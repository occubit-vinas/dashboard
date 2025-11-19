'use client'
import React, { useState, useEffect, useRef } from 'react'
import { add_pro_seo } from '@/data/dashboard/constants'
const Page = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState<string[]>([])   // ← fixed: setkeywords → setKeywords

  const inputRef = useRef<HTMLInputElement>(null)

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 60) setTitle(value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= 160) setDescription(value)
  }

  // ←←← FIXED: added the missing functions
  const addKeyword = (value: string) => {
    const trimmed = value.trim()
    if (trimmed && !keywords.includes(trimmed)) {
      setKeywords(prev => [...prev, trimmed])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      // ← stop form submit / newline
      addKeyword((e.target as HTMLInputElement).value)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  const handlePlusClick = () => {
    if (inputRef.current?.value.trim()) {
      addKeyword(inputRef.current.value)
      inputRef.current.value = ''
    }
  }
  // ←←← END OF FIXES

  const handleCreate = () => {
    // capture last typed keyword if user didn’t press Enter / +
    if (inputRef.current?.value.trim()) {
      addKeyword(inputRef.current.value)
      inputRef.current.value = ''
    }

    console.log('Submitted →', { title, description, keywords })
    alert('submitted')
  }

  const handleCancel = () => {
    alert('canceled')
    setTitle('')
    setDescription('')
    setKeywords([])                 // ← fixed setter name
    if (inputRef.current) inputRef.current.value = ''
  }

  useEffect(() => {
    window.addEventListener('addProductCancel', handleCancel)
    window.addEventListener('addProductCreate', handleCreate)

    return () => {
      window.removeEventListener('addProductCancel', handleCancel)
      window.removeEventListener('addProductCreate', handleCreate)
    }
  }, [keywords])   // ← safe dependency so closure is always fresh

  return (
    <div className="container mx-auto my-10">
      <div className="p-6 bg-white rounded-xl flex flex-col gap-8">

        {/* SEO Title & Description */}
        <div className="flex flex-row gap-6">
          {/* SEO Title */}
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-first ml-3">{add_pro_seo.st}</h1>
            <textarea
              rows={4}
              placeholder={add_pro_seo.est}
              value={title}
              onChange={handleTitleChange}
              className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
            />
            <div className="flex flex-row justify-between text-sm">
              <p className="text-third">{add_pro_seo.rc56}</p>
              <p className={`text-${title.length > 60 ? 'red-500' : 'third'}`}>
                {title.length}/60
              </p>
            </div>
          </div>

          {/* SEO Description */}
          <div className="w-1/2 flex flex-col gap-2">
            <h1 className="text-first ml-3">{add_pro_seo.sd}</h1>
            <textarea
              rows={4}
              placeholder={add_pro_seo.esm}
              value={description}
              onChange={handleDescriptionChange}
              className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
            />
            <div className="flex flex-row justify-between text-sm">
              <p className="text-third">{add_pro_seo.rc1516}</p>
              <p className={`text-${description.length > 160 ? 'red-500' : 'third'}`}>
                {description.length}/160
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-first ml-3'>{add_pro_seo.sk}</p>
          <div className='flex flex-row gap-2 w-full h-10'>
            <input
              ref={inputRef}
              className='light-purple rounded-sm h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)] flex items-center pl-3 flex-1'   // ← replaced invalid w-26/27
              placeholder='Add keywords'
              onKeyDown={handleKeyDown}        // ← correct handler (Enter works)
            />
            <button
              type='button'
              className='shadow-[0_0_3px_0_rgba(108,108,128,0.35)] rounded-sm flex items-center justify-center text-2xl text-gray-600 w-12 h-full border-2 border-gray-400'
              onClick={handlePlusClick}
            >
              +
            </button>
          </div>
        </div>

        {/* Search Preview */}
        <div className="flex flex-col gap-2 border border-gray-400 rounded-md p-3">
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '13px', color: '#6C6C80' }}>
            {add_pro_seo.sp}
          </p>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '18px', color: '#4A3AFF' }}>
            {add_pro_seo.ypt}
          </h1>
          <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', color: '#3DDC97' }}>
            {add_pro_seo.ex}
          </h1>
          <p className="text-third">
            {add_pro_seo.pd}
          </p>
        </div>

        {/* SEO Tips */}
        <div className="light-purple rounded-md p-4 shadow-[0_0_3px_0_rgba(108,108,128,0.35)]">
          <h1 className="text-first mb-2">SEO Tips</h1>
          <ol className="list-disc pl-6 text-second space-y-2">
            <li>{add_pro_seo.iyp}</li>
            <li>{add_pro_seo.ktu}</li>
            <li>{add_pro_seo.wcd}</li>
            <li>{add_pro_seo.urk}</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Page