// import React, { useState } from 'react'

// const Page = () => {
//     const [data, setdata] = useState({
//         title: '',
//         keywords: [],
//         description: '',
//         org_name: '',
//         website_name: '',
//         website_desc: '',
//         website_url: '',
//         logo_url: '',
//         lang: ''

//     })
//     return (
//         <div className='bg-white rounded-xl p-4 mt-6 flex flex-col gap-4'>
//             <p className='my-title'>Meta Tags</p>
//             <div className='flex flex-col gap-2'>
//                 <div className='flex flex-row gap-6'>
//                     <div className='flex flex-col gap-2'>
//                         <p className='text-first ml-3'>Meta Title</p>
//                         <input
//                             type='text'
//                             className='light-purple rounded-sm  h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)]  flex items-center pl-3 '
//                             placeholder='Your Store - Best Product online'
//                         />
//                         <div className='flex flex-row justify-end w-full'>
//                             <p>{ }/60</p>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <p className='text-first ml-3'>Meta keywords</p>
//                         <div className='flex flex-row gap-2 w-full h-10'>
//                             <input
//                                 className='light-purple rounded-sm  h-full shadow-[0_0_3px_0_rgba(108,108,128,0.35)]  flex items-center pl-3 w-26/27'
//                                 placeholder='Add keywords'
//                             />
//                             <div className='shadow-[0_0_3px_0_rgba(108,108,128,0.35)] rounded-sm flex items-center justify-center text-2xl text-gray-600 w-1/27 h-full border-2 border-gray-400'>+</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <h1 className="text-first ml-3">Meta Description</h1>
//                     <textarea
//                         rows={4}
//                         placeholder="Discover amazing products at great prices. Fast shipping, excellent customer services, and quality guaranteed."
//                         value={description}
//                         onChange={handleDescriptionChange}
//                         className="light-purple rounded-md shadow-[0_0_3px_0_rgba(108,108,128,0.35)] p-2 resize-none outline-none"
//                     />
//                     <div className="flex flex-row justify-between text-sm">
//                         <p className="text-third">Recommended: 150–160 characters</p>
//                         <p className={`text-${description.length > 160 ? 'red-500' : 'third'}`}>
//                             {description.length}/160
//                         </p>
//                     </div>
//                 </div>
//                 <div className="flex flex-col gap-2 border border-gray-400 rounded-md p-3">
//                     <p
//                         style={{
//                             fontFamily: 'Inter, sans-serif',
//                             fontWeight: 300,
//                             fontSize: '13px',
//                             color: '#6C6C80',
//                         }}
//                     >
//                         SEO Preview
//                     </p>
//                     <h1
//                         style={{
//                             fontFamily: 'Inter, sans-serif',
//                             fontWeight: 400,
//                             fontSize: '18px',
//                             color: '#4A3AFF',
//                         }}
//                     >
//                         Your Store Title
//                     </h1>
//                     <h1
//                         style={{
//                             fontFamily: 'Inter, sans-serif',
//                             fontWeight: 400,
//                             fontSize: '14px',
//                             color: '#3DDC97',
//                         }}
//                     >
//                         https://yourstore.com
//                     </h1>
//                     <p className="text-third">
//                         Your store description will appera here
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page