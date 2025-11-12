'use client'
// app/category/page.tsx (or pages/category.tsx)
import React, { useState, useMemo } from 'react';
// import Top_area from '../components/sidebar/top_area';
import Top_area from '@/components/sidebar/top_area';
import { SearchBar, Filter, Refresh, Add_cat } from '../components/top_buttons';
import Image from 'next/image';
import { MdDelete } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Pagination from '../components/Pagination';
const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const router = useRouter();
  const addcatclick = () => {
    router.push('/dashboard/category/add_cat');
  }
  const data = [
    { category: "Electronics", sub: "Phones", status: "Active", date: "2025-11-01" },
    { category: "Home", sub: "Furniture", status: "Inactive", date: "2025-10-29" },
    { category: "Fashion", sub: "Shoes", status: "Active", date: "2025-10-22" },
    { category: "Books", sub: "Novels", status: "Active", date: "2025-09-15" },
    { category: "Beauty", sub: "Makeup", status: "Cancle", date: "2025-09-10" },
  ];

  // Pagination Logic
  const totalFiltered = data.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = useMemo(() => {
    return data.slice(startIndex, endIndex);
  }, [data, startIndex, endIndex]);
  return (
    <div className="container mx-auto my-10 flex flex-col gap-4 ">
      <Top_area
        title="Category Management"
        desc="Organize your products with categories and manage your inventory"
        components={[<SearchBar key="1" />, <Filter key="2" />, <Refresh key='3' />, <Add_cat key='4' onClick={addcatclick} />]}
      />

      <div className='bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 h-[350px]'>
        <div className="h-[350px] overflow-y-auto  rounded-2xl">

          <table className="min-w-full ">
            <thead className=" sticky top-0 light-purpul bg-[#F4E9FF] rounded-full">
              <tr>
                <th className="text-first text-left py-3 px-4 w-1/3  border-gray-300">Category</th>
                <th className="text-first text-left py-3 px-4  border-gray-300">Sub Category</th>
                <th className="text-first text-left py-3 px-4  border-gray-300">Status</th>
                <th className="text-first text-left py-3 px-4  border-gray-300">Date Created</th>
                <th className="text-first text-left py-3 pl-7  border-gray-300">Action</th>
              </tr>
            </thead>

            <tbody>
              {visibleData.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 text-second">
                  <td className="py-3 px-4 w-1/3">{item.category}</td>
                  <td className="py-3 px-4 flex flex-row gap-1 text-center"><FiBox />{item.sub}</td>
                  <td className="py-3 px-4 text-center">
                    <span
                      className={`flex flex-row gap-1 px-2 py-1 rounded text-sm ${item.status === "Active" && " text-green-700"} ${item.status === "Inactive" && " text-red-700"} ${item.status === "Cancle" && " text-[#E8BD11]"}`}
                    >
                      {item.status === 'Active' ? <Image src='/dashboard/tick-circle.png' height={10} width={20} alt='image' /> : ''}
                      {item.status === 'Inactive' ? <Image src='/dashboard/close-circle.png' height={10} width={20} alt='image' /> : ''}
                      {item.status === 'Cancle' ? <Image src='/dashboard/info-circle.png' height={10} width={20} alt='image' /> : ''}
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4 flex flex-row gap-2">
                    <Image src='/dashboard/eye.png' height={20} width={20} alt='img' />
                    <Image src='/dashboard/edit.png' height={20} width={20} alt='img' />
                    <Image src='/dashboard/box-add.jpg' height={20} width={20} alt='img' />
                    <Image src='/dashboard/trash.png' height={20} width={20} alt='img' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className=" mx-8">
        <Pagination
          totalItems={totalFiltered}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          maxVisiblePages={3}
        />
      </div>
    </div>
  );
};

export default Category;
