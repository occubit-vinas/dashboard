'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Top_area from '@/components/sidebar/top_area';
import { Product_filter_bar, Clearfilter } from '../components/product_filter_bar';
import { Export, Filter, Showfilter, Hidefilter, Refresh, Add_product, SearchBar, SortDropdown, SortOrderButton } from '../components/top_buttons';
import { useRouter } from 'next/navigation'
const Page = () => {
  const [showfilter, setshowfilter] = useState(false);
  const [sortOpen, setsortOpen] = useState(false);
  const [sortselected, setsortSelected] = useState('Date Created');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const router = useRouter()

  // 🧠 Step 1: Centralized filter state here
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All Category',
    stock: 'All Stock Levels',
    status: 'All Status',
    dateFrom: '',
    dateTo: '',
    minPrice: '',
    maxPrice: '',
  });

  // 🧽 Step 2: Function to clear all filters
  const clearFilters = () => {
    setSelectedFilters({
      category: 'All Category',
      stock: 'All Stock Levels',
      status: 'All Status',
      dateFrom: '',
      dateTo: '',
      minPrice: '',
      maxPrice: '',
    });
  };

  const data = [
    { Product: "Printed Shirts", categorie: "Phones", status: "Active", date: "2025-11-01", price: "₹999", stock: "In Stock" },
    { Product: "Printed Shirts", categorie: "Furniture", status: "Inactive", date: "2025-10-29", price: "₹999", stock: "Out of Stock" },
    { Product: "Printed Shirts", categorie: "Shoes", status: "Active", date: "2025-10-22", price: "₹999", stock: "Out of Stock" },
    { Product: "Printed Shirts", categorie: "Novels", status: "Active", date: "2025-09-15", price: "₹999", stock: "In Stock" },
    { Product: "Printed Shirts", categorie: "Makeup", status: "Cancelled", date: "2025-09-10", price: "₹999", stock: "In Stock" },
  ];
  const onClick=()=>{
        router.push('/dashboard/product_mng/Add_product/basic');
  }
  return (
    <div className="container my-10 flex flex-col gap-5">
      <Top_area
        title="Product Management"
        desc="Manage your store's product inventory"
        components={[
          <Export key="1" />,
          showfilter ? <Hidefilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} /> : <Showfilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />,
          <Refresh key="3" />,
          <Add_product key="4" onClick={onClick}/>,
        ]}
      />

      <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 h-[550px]">
        <div className="h-[450px] overflow-y-auto rounded-2xl">
          {/* ✅ Pass clearFilters function here */}
          {showfilter && <Clearfilter clearFilters={clearFilters} />}

          <div className='w-full flex justify-between items-center my-4'>
            <SearchBar />
            <div className='flex flex-row gap-1.5'>
              <SortDropdown sortOpen={sortOpen} setsortOpen={setsortOpen} sortselected={sortselected} setsortSelected={setsortSelected} />
              <SortOrderButton order={order} setOrder={setOrder} />
            </div>
          </div>

          {/* ✅ Pass both filter data and setter */}
          {showfilter && (
            <Product_filter_bar
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}

          {/* Table remains same */}
          <table className="min-w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#F9F4FF]">
              <tr>
                <th className="text-first py-3 px-4 w-1/4 border-b border-gray-300">Product</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Category</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Price</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Stock</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Date Created</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Status</th>
                <th className="text-first py-3 px-4 border-b border-gray-300">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <tr key={i} className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition">
                  <td className="py-3 px-4 w-1/4">{item.Product}</td>
                  <td className="py-3 px-4">{item.categorie}</td>
                  <td className="py-3 px-4">{item.price}</td>
                  <td className="py-3 px-4">
                    <div className={`flex items-center gap-2 ${item.stock === 'In Stock' ? 'text-green-700' : 'text-red-700'}`}>
                      <Image src={item.stock === 'In Stock' ? '/dashboard/tick-circle.png' : '/dashboard/close-circle.png'} height={18} width={18} alt={item.stock} />
                      <span>{item.stock}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{item.date}</td>
                  <td className="py-3 px-4">
                    <div
                      className={`flex items-center gap-2 ${
                        item.status === 'Active'
                          ? 'text-green-700'
                          : item.status === 'Inactive'
                          ? 'text-red-700'
                          : 'text-yellow-600'
                      }`}
                    >
                      {item.status === 'Active' && <Image src="/dashboard/tick-circle.png" height={18} width={18} alt="Active" />}
                      {item.status === 'Inactive' && <Image src="/dashboard/close-circle.png" height={18} width={18} alt="Inactive" />}
                      {item.status === 'Cancelled' && <Image src="/dashboard/info-circle.png" height={18} width={18} alt="Cancelled" />}
                      <span>{item.status}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-3">
                      <Image src="/dashboard/eye.png" height={20} width={20} alt="View" className="cursor-pointer" />
                      <Image src="/dashboard/edit.png" height={20} width={20} alt="Edit" className="cursor-pointer" />
                      <Image src="/dashboard/trash.png" height={20} width={20} alt="Delete" className="cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
