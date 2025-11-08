// 'use client';
// import React, { useState } from 'react';
// import Image from 'next/image';
// import Top_area from '@/components/sidebar/top_area';
// import { Product_filter_bar, Clearfilter } from '../components/product_filter_bar';
// import { Export, Filter, Showfilter, Hidefilter, Refresh, Add_product, SearchBar, SortDropdown, SortOrderButton } from '../components/top_buttons';
// import { useRouter } from 'next/navigation'
// const Page = () => {
//   const [showfilter, setshowfilter] = useState(false);
//   const [sortOpen, setsortOpen] = useState(false);
//   const [sortselected, setsortSelected] = useState('Date Created');
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');
//     const router = useRouter()

//   // 🧠 Step 1: Centralized filter state here
//   const [selectedFilters, setSelectedFilters] = useState({
//     category: 'All Category',
//     stock: 'All Stock Levels',
//     status: 'All Status',
//     dateFrom: '',
//     dateTo: '',
//     minPrice: '',
//     maxPrice: '',
//   });

//   // 🧽 Step 2: Function to clear all filters
//   const clearFilters = () => {
//     setSelectedFilters({
//       category: 'All Category',
//       stock: 'All Stock Levels',
//       status: 'All Status',
//       dateFrom: '',
//       dateTo: '',
//       minPrice: '',
//       maxPrice: '',
//     });
//   };

//   const data = [
//     { Product: "Printed Shirts", categorie: "Phones", status: "Active", date: "2025-11-01", price: "₹999", stock: "In Stock" },
//     { Product: "Printed Shirts", categorie: "Furniture", status: "Inactive", date: "2025-10-29", price: "₹999", stock: "Out of Stock" },
//     { Product: "Printed Shirts", categorie: "Shoes", status: "Active", date: "2025-10-22", price: "₹999", stock: "Out of Stock" },
//     { Product: "Printed Shirts", categorie: "Novels", status: "Active", date: "2025-09-15", price: "₹999", stock: "In Stock" },
//     { Product: "Printed Shirts", categorie: "Makeup", status: "Cancelled", date: "2025-09-10", price: "₹999", stock: "In Stock" },
//   ];
//   const onClick=()=>{
//         router.push('/dashboard/product_mng/Add_product/basic');
//   }
//   return (
//     <div className="container my-10 flex flex-col gap-5">
//       <Top_area
//         title="Product Management"
//         desc="Manage your store's product inventory"
//         components={[
//           <Export key="1" />,
//           showfilter ? <Hidefilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} /> : <Showfilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />,
//           <Refresh key="3" />,
//           <Add_product key="4" onClick={onClick}/>,
//         ]}
//       />

//       <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 h-[550px]">
//         <div className="h-[450px] overflow-y-auto rounded-2xl">
//           {/* ✅ Pass clearFilters function here */}
//           {showfilter && <Clearfilter clearFilters={clearFilters} />}

//           <div className='w-full flex justify-between items-center my-4'>
//             <SearchBar />
//             <div className='flex flex-row gap-1.5'>
//               <SortDropdown sortOpen={sortOpen} setsortOpen={setsortOpen} sortselected={sortselected} setsortSelected={setsortSelected} />
//               <SortOrderButton order={order} setOrder={setOrder} />
//             </div>
//           </div>

//           {/* ✅ Pass both filter data and setter */}
//           {showfilter && (
//             <Product_filter_bar
//               selectedFilters={selectedFilters}
//               setSelectedFilters={setSelectedFilters}
//             />
//           )}

//           {/* Table remains same */}
//           <table className="min-w-full text-left border-collapse">
//             <thead className="sticky top-0 bg-[#F9F4FF]">
//               <tr>
//                 <th className="text-first py-3 px-4 w-1/4 border-b border-gray-300">Product</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Category</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Price</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Stock</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Date Created</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Status</th>
//                 <th className="text-first py-3 px-4 border-b border-gray-300">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.map((item, i) => (
//                 <tr key={i} className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition">
//                   <td className="py-3 px-4 w-1/4">{item.Product}</td>
//                   <td className="py-3 px-4">{item.categorie}</td>
//                   <td className="py-3 px-4">{item.price}</td>
//                   <td className="py-3 px-4">
//                     <div className={`flex items-center gap-2 ${item.stock === 'In Stock' ? 'text-green-700' : 'text-red-700'}`}>
//                       <Image src={item.stock === 'In Stock' ? '/dashboard/tick-circle.png' : '/dashboard/close-circle.png'} height={18} width={18} alt={item.stock} />
//                       <span>{item.stock}</span>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">{item.date}</td>
//                   <td className="py-3 px-4">
//                     <div
//                       className={`flex items-center gap-2 ${
//                         item.status === 'Active'
//                           ? 'text-green-700'
//                           : item.status === 'Inactive'
//                           ? 'text-red-700'
//                           : 'text-yellow-600'
//                       }`}
//                     >
//                       {item.status === 'Active' && <Image src="/dashboard/tick-circle.png" height={18} width={18} alt="Active" />}
//                       {item.status === 'Inactive' && <Image src="/dashboard/close-circle.png" height={18} width={18} alt="Inactive" />}
//                       {item.status === 'Cancelled' && <Image src="/dashboard/info-circle.png" height={18} width={18} alt="Cancelled" />}
//                       <span>{item.status}</span>
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">
//                     <div className="flex gap-3">
//                       <Image src="/dashboard/eye.png" height={20} width={20} alt="View" className="cursor-pointer" />
//                       <Image src="/dashboard/edit.png" height={20} width={20} alt="Edit" className="cursor-pointer" />
//                       <Image src="/dashboard/trash.png" height={20} width={20} alt="Delete" className="cursor-pointer" />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
// page.tsx
'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Top_area from '@/components/sidebar/top_area';
import Pagination from '../components/Pagination';
import {
  Product_filter_bar,
  Clearfilter,
  type FilterConfig,
} from '../components/product_filter_bar';
import {
  Export,
  Showfilter,
  Hidefilter,
  Refresh,
  Add_product,
  SearchBar,
  SortDropdown,
  SortOrderButton,
} from '../components/top_buttons';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [showfilter, setshowfilter] = useState(false);
  const [sortOpen, setsortOpen] = useState(false);
  const [sortselected, setsortSelected] = useState('Date Created');
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const router = useRouter();

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter Config
  const filtersConfig: FilterConfig[] = [
    {
      type: 'select',
      name: 'category',
      options: [
        'All Category',
        'Western Wear',
        'Ethnic Wear',
        'Anarkali',
        'Top & Tunic',
      ],
      width: 'w-48',
      defaultValue: 'All Category',
    },
    {
      type: 'select',
      name: 'stock',
      options: [
        'All Stock Levels',
        'In Stock',
        'Low Stock (<10)',
        'High Stock (>100)',
        'Out of Stock',
      ],
      width: 'w-56',
      defaultValue: 'All Stock Levels',
    },
    {
      type: 'select',
      name: 'status',
      options: ['All Status', 'Active', 'Inactive'],
      width: 'w-40',
      defaultValue: 'All Status',
    },
    {
      type: 'dateRange',
      name: 'date',
      defaultValue: 'Date',
    },
    {
      type: 'priceRange',
      name: 'price',
      defaultValue: 'Price',
      currency: '₹',
    },
  ];

  const initialFilters = filtersConfig.reduce((acc, config) => {
    acc[config.name] = config.defaultValue || '';
    return acc;
  }, {} as Record<string, any>);

  const [selectedFilters, setSelectedFilters] = useState({
    ...initialFilters,
    dateFrom: '',
    dateTo: '',
    minPrice: '',
    maxPrice: '',
  });

  // Product Data
  const allData = [
    {
      Product: 'Printed Shirts',
      categorie: 'Western Wear',
      status: 'Active',
      date: '2025-11-01',
      price: '₹999',
      stock: 'In Stock',
    },
    {
      Product: 'Cotton Kurta',
      categorie: 'Ethnic Wear',
      status: 'Inactive',
      date: '2025-10-29',
      price: '₹1299',
      stock: 'Out of Stock',
    },
    {
      Product: 'Anarkali Dress',
      categorie: 'Anarkali',
      status: 'Active',
      date: '2025-10-22',
      price: '₹1599',
      stock: 'In Stock',
    },
    {
      Product: 'Tunic Top',
      categorie: 'Top & Tunic',
      status: 'Active',
      date: '2025-09-15',
      price: '₹899',
      stock: 'In Stock',
    },
    {
      Product: 'Old Stock',
      categorie: 'Western Wear',
      status: 'Inactive',
      date: '2025-09-10',
      price: '₹499',
      stock: 'Out of Stock',
    },
    // Add more if needed
  ];

  const [filteredData, setFilteredData] = useState(allData);

  const clearFilters = () => {
    const resetFilters = filtersConfig.reduce((acc, config) => {
      acc[config.name] = config.defaultValue || '';
      return acc;
    }, {} as Record<string, any>);

    const reset = {
      ...resetFilters,
      dateFrom: '',
      dateTo: '',
      minPrice: '',
      maxPrice: '',
    };

    setSelectedFilters(reset);
    setFilteredData(allData);
  };

  const applyFilters = () => {
    let filtered = [...allData];

    if (selectedFilters.category && selectedFilters.category !== 'All Category') {
      filtered = filtered.filter(item => item.categorie === selectedFilters.category);
    }

    if (selectedFilters.stock && selectedFilters.stock !== 'All Stock Levels') {
      if (selectedFilters.stock === 'In Stock') {
        filtered = filtered.filter(item => item.stock === 'In Stock');
      } else if (selectedFilters.stock === 'Out of Stock') {
        filtered = filtered.filter(item => item.stock === 'Out of Stock');
      }
    }

    if (selectedFilters.status && selectedFilters.status !== 'All Status') {
      filtered = filtered.filter(item => item.status === selectedFilters.status);
    }

    if (selectedFilters.dateFrom && selectedFilters.dateTo) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.date);
        const from = new Date(selectedFilters.dateFrom);
        const to = new Date(selectedFilters.dateTo);
        return itemDate >= from && itemDate <= to;
      });
    }

    if (selectedFilters.minPrice || selectedFilters.maxPrice) {
      filtered = filtered.filter(item => {
        const numericPrice = parseFloat(item.price.replace(/[₹,]/g, ''));
        const min = selectedFilters.minPrice ? parseFloat(selectedFilters.minPrice) : 0;
        const max = selectedFilters.maxPrice ? parseFloat(selectedFilters.maxPrice) : Infinity;
        return numericPrice >= min && numericPrice <= max;
      });
    }

    setFilteredData(filtered);
  };

  // Reapply filters
  useEffect(() => {
    applyFilters();
  }, [selectedFilters]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  const onClick = () => {
    router.push('/dashboard/product_mng/Add_product/basic');
  };

  // Pagination Logic
  const totalFiltered = filteredData.length;
  const totalPages = Math.max(1, Math.ceil(totalFiltered / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleData = useMemo(() => {
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, startIndex, endIndex]);

  return (
    <div className="container my-10 flex flex-col gap-5">
      <Top_area
        title="Product Management"
        desc="Manage your store's product inventory"
        components={[
          <Export key="1" />,
          showfilter ? (
            <Hidefilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />
          ) : (
            <Showfilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />
          ),
          <Refresh key="3" />,
          <Add_product key="4" onClick={onClick} />,
        ]}
      />

      <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 min-h-[600px]">
        <div className="h-[550px] overflow-y-auto rounded-2xl">
          {showfilter && (
            <div className="w-full flex justify-end mb-3">
              <Clearfilter clearFilters={clearFilters} />
            </div>
          )}

          <div className="w-full flex justify-between items-center my-4">
            <SearchBar />
            <div className="flex flex-row gap-1.5">
              <SortDropdown
                sortOpen={sortOpen}
                setsortOpen={setsortOpen}
                sortselected={sortselected}
                setsortSelected={setsortSelected}
              />
              <SortOrderButton order={order} setOrder={setOrder} />
            </div>
          </div>

          {showfilter && (
            <Product_filter_bar
              filtersConfig={filtersConfig}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}

          {/* Table */}
          <table className="min-w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#F9F4FF]">
              <tr>
                <th className="text-first py-3 px-4 w-1/4 border-gray-300 rounded-l-2xl">
                  Product
                </th>
                <th className="text-first py-3 px-4 border-gray-300">
                  Category
                </th>
                <th className="text-first py-3 px-4 border-gray-300">Price</th>
                <th className="text-first py-3 px-4 border-gray-300">Stock</th>
                <th className="text-first py-3 px-4 border-gray-300">
                  Date Created
                </th>
                <th className="text-first py-3 px-4 border-gray-300">Status</th>
                <th className="text-first py-3 px-4 border-gray-300 rounded-r-2xl">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {visibleData.length > 0 ? (
                visibleData.map((item) => (
                  <tr
                    key={item.Product} // Unique key
                    className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition"
                  >
                    <td className="py-3 px-4 w-1/4">{item.Product}</td>
                    <td className="py-3 px-4">{item.categorie}</td>
                    <td className="py-3 px-4">{item.price}</td>
                    <td className="py-3 px-4">
                      <div
                        className={`flex items-center gap-2 ${
                          item.stock === 'In Stock' ? 'text-green-700' : 'text-red-700'
                        }`}
                      >
                        <Image
                          src={
                            item.stock === 'In Stock'
                              ? '/dashboard/tick-circle.png'
                              : '/dashboard/close-circle.png'
                          }
                          height={18}
                          width={18}
                          alt={item.stock}
                        />
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
                        {item.status === 'Active' && (
                          <Image
                            src="/dashboard/tick-circle.png"
                            height={18}
                            width={18}
                            alt="Active"
                          />
                        )}
                        {item.status === 'Inactive' && (
                          <Image
                            src="/dashboard/close-circle.png"
                            height={18}
                            width={18}
                            alt="Inactive"
                          />
                        )}
                        <span>{item.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-3">
                        <Image
                          src="/dashboard/eye.png"
                          height={20}
                          width={20}
                          alt="View"
                          className="cursor-pointer"
                        />
                        <Image
                          src="/dashboard/edit.png"
                          height={20}
                          width={20}
                          alt="Edit"
                          className="cursor-pointer"
                        />
                        <Image
                          src="/dashboard/trash.png"
                          height={20}
                          width={20}
                          alt="Delete"
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center text-gray-500 py-6 italic">
                    No results found for selected filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4">
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

export default Page;