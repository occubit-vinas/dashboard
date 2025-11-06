// 'use client';
// import React, { useState } from 'react';
// import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

// export function Product_filter_bar({ selectedFilters, setSelectedFilters }) {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   const toggleDropdown = (name: string) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   const handleSelect = (name: string, value: string) => {
//     setSelectedFilters((prev: any) => ({ ...prev, [name]: value }));
//     setOpenDropdown(null);
//   };

//   const formatDate = (dateStr: string) => {
//     if (!dateStr) return '';
//     const date = new Date(dateStr);
//     return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
//   };

//   const applyDateRange = () => {
//     const { dateFrom, dateTo } = selectedFilters;
//     if (dateFrom && dateTo) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         date: `${formatDate(dateFrom)} – ${formatDate(dateTo)}`
//       }));
//     } else if (dateFrom) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         date: `From ${formatDate(dateFrom)}`
//       }));
//     } else if (dateTo) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         date: `Until ${formatDate(dateTo)}`
//       }));
//     } else {
//       setSelectedFilters((prev: any) => ({ ...prev, date: 'Date Range' }));
//     }
//     setOpenDropdown(null);
//   };

//   const applyPriceRange = () => {
//     const { minPrice, maxPrice } = selectedFilters;
//     if (minPrice && maxPrice) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         price: `₹${minPrice} – ₹${maxPrice}`
//       }));
//     } else if (minPrice) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         price: `From ₹${minPrice}`
//       }));
//     } else if (maxPrice) {
//       setSelectedFilters((prev: any) => ({
//         ...prev,
//         price: `Up to ₹${maxPrice}`
//       }));
//     } else {
//       setSelectedFilters((prev: any) => ({ ...prev, price: 'Price Range' }));
//     }
//     setOpenDropdown(null);
//   };

//   return (
//     <div className="w-full mb-5 flex items-center justify-between gap-5 text-second">
//       {/* 1️⃣ Category, 2️⃣ Stock, 3️⃣ Status */}
//       {[
//         {
//           name: 'category',
//           items: ['All Category', 'Western Wear', 'Ethnic Wear', 'Anarkali', 'Top & Tunic'],
//           width: 'w-48'
//         },
//         {
//           name: 'stock',
//           items: ['All Stock Levels', 'In Stock', 'Low Stock (<10)', 'High Stock (>100)', 'Out of Stock'],
//           width: 'w-56'
//         },
//         {
//           name: 'status',
//           items: ['All Status', 'Active', 'Inactive'],
//           width: 'w-40'
//         }
//       ].map((filter) => (
//         <div className="relative flex-1" key={filter.name}>
//           <button
//             onClick={() => toggleDropdown(filter.name)}
//             className="w-full flex items-center justify-between border px-3 py-2 rounded-sm hover:bg-gray-50"
//           >
//             <span>{selectedFilters[filter.name]}</span>
//             <div className="border-l pl-2 flex items-center">
//               {openDropdown === filter.name ? <IoChevronUp /> : <IoChevronDown />}
//             </div>
//           </button>

//           {openDropdown === filter.name && (
//             <div
//               className={`absolute mt-2 bg-white border rounded-md shadow-md ${filter.width} z-10`}
//             >
//               {filter.items.map((item, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => handleSelect(filter.name, item)}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 >
//                   {item}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* 4️⃣ Date Range */}
//       <div className="relative flex-1">
//         <button
//           onClick={() => toggleDropdown('date')}
//           className="w-full flex items-center justify-between border px-3 py-2 rounded-md hover:bg-gray-50"
//         >
//           <span>{selectedFilters.date || 'Date'}</span>
//           <div className="border-l pl-2 flex items-center">
//             {openDropdown === 'date' ? <IoChevronUp /> : <IoChevronDown />}
//           </div>
//         </button>

//         {openDropdown === 'date' && (
//           <div className="absolute mt-2 bg-white border rounded-md shadow-md p-3 w-64 z-10">
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-col">
//                 <label className="text-xs text-gray-500">Date From</label>
//                 <input
//                   type="date"
//                   value={selectedFilters.dateFrom}
//                   onChange={(e) =>
//                     setSelectedFilters((prev: any) => ({
//                       ...prev,
//                       dateFrom: e.target.value
//                     }))
//                   }
//                   className="border rounded-md px-2 py-1 text-sm text-second outline-none"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-xs text-gray-500">Date To</label>
//                 <input
//                   type="date"
//                   value={selectedFilters.dateTo}
//                   onChange={(e) =>
//                     setSelectedFilters((prev: any) => ({
//                       ...prev,
//                       dateTo: e.target.value
//                     }))
//                   }
//                   className="border rounded-md px-2 py-1 text-sm text-second outline-none"
//                 />
//               </div>
//               <button
//                 onClick={applyDateRange}
//                 className="mt-2 bg-[#7E30ED] text-white text-sm py-1 rounded-md hover:bg-[#6926c6]"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* 5️⃣ Price Range */}
//       <div className="relative flex-1">
//         <button
//           onClick={() => toggleDropdown('price')}
//           className="w-full flex items-center justify-between border px-3 py-2 rounded-md hover:bg-gray-50"
//         >
//           <span>{selectedFilters.price || 'Price'}</span>
//           <div className="border-l pl-2 flex items-center">
//             {openDropdown === 'price' ? <IoChevronUp /> : <IoChevronDown />}
//           </div>
//         </button>

//         {openDropdown === 'price' && (
//           <div className="absolute mt-2 bg-white border rounded-md shadow-md p-3 w-56 z-10">
//             <div className="flex flex-col gap-2">
//               <div className="flex flex-col">
//                 <label className="text-xs text-gray-500">Min Price</label>
//                 <input
//                   type="number"
//                   value={selectedFilters.minPrice}
//                   onChange={(e) =>
//                     setSelectedFilters((prev: any) => ({
//                       ...prev,
//                       minPrice: e.target.value
//                     }))
//                   }
//                   className="border rounded-md px-2 py-1 text-sm text-second outline-none"
//                   placeholder="0"
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="text-xs text-gray-500">Max Price</label>
//                 <input
//                   type="number"
//                   value={selectedFilters.maxPrice}
//                   onChange={(e) =>
//                     setSelectedFilters((prev: any) => ({
//                       ...prev,
//                       maxPrice: e.target.value
//                     }))
//                   }
//                   className="border rounded-md px-2 py-1 text-sm text-second outline-none"
//                   placeholder="1000"
//                 />
//               </div>
//               <button
//                 onClick={applyPriceRange}
//                 className="mt-2 bg-[#7E30ED] text-white text-sm py-1 rounded-md hover:bg-[#6926c6]"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export function Clearfilter({ clearFilters }) {
//   return (
//     <div
//       onClick={clearFilters}
//       className="flex items-center justify-end gap-2 mx-10 cursor-pointer text-gray-600 hover:text-[#7E30ED] transition"
//     >
//       <img
//         src="/dashboard/close-circle.png"
//         height={20}
//         width={20}
//         alt="Clear"
//         className="w-4 h-4"
//       />
//       <p className="text-sm font-medium">Clear Filters</p>
//     </div>
//   );
// }
// product_filter_bar.tsx
'use client';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

export interface FilterConfig {
    type: 'select' | 'dateRange' | 'priceRange';
    name: string;
    label?: string; // Optional label for display (defaults to capitalized name)
    options?: string[]; // For 'select' type: list of dropdown items
    width?: string; // Optional width class for dropdown
    defaultValue?: string; // Optional default display value
    currency?: string; // For 'priceRange': optional currency symbol (default '₹')
}

interface ProductFilterBarProps {
    filtersConfig: FilterConfig[];
    selectedFilters: Record<string, any>;
    setSelectedFilters: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export function Product_filter_bar({
    filtersConfig,
    selectedFilters,
    setSelectedFilters,
}: ProductFilterBarProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const handleSelect = (name: string, value: string) => {
        setSelectedFilters((prev) => ({ ...prev, [name]: value }));
        setOpenDropdown(null);
    };

    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    };

    const applyDateRange = (config: FilterConfig) => {
        const { dateFrom, dateTo } = selectedFilters;
        const displayName = config.name; // e.g., 'date'
        if (dateFrom && dateTo) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `${formatDate(dateFrom)} – ${formatDate(dateTo)}`,
            }));
        } else if (dateFrom) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `From ${formatDate(dateFrom)}`,
            }));
        } else if (dateTo) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `Until ${formatDate(dateTo)}`,
            }));
        } else {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: config.defaultValue || 'Date Range',
            }));
        }
        setOpenDropdown(null);
    };

    const applyPriceRange = (config: FilterConfig) => {
        const { minPrice, maxPrice } = selectedFilters;
        const displayName = config.name; // e.g., 'price'
        const currency = config.currency || '₹';
        if (minPrice && maxPrice) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `${currency}${minPrice} – ${currency}${maxPrice}`,
            }));
        } else if (minPrice) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `From ${currency}${minPrice}`,
            }));
        } else if (maxPrice) {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: `Up to ${currency}${maxPrice}`,
            }));
        } else {
            setSelectedFilters((prev) => ({
                ...prev,
                [displayName]: config.defaultValue || 'Price Range',
            }));
        }
        setOpenDropdown(null);
    };

    return (
        <div className="w-full mb-5 flex flex-row items-center justify-start gap-5 text-second">
            {filtersConfig.map((config) => (
                <div className="relative flex-[1_1_20%] max-w-[20%]" key={config.name}>
                    <button
                        onClick={() => toggleDropdown(config.name)}
                        className="w-full flex items-center justify-between border px-3 rounded-sm hover:bg-gray-50"
                    >
                        <span className='py-3'>
                            {selectedFilters[config.name] || config.label || config.name.charAt(0).toUpperCase() + config.name.slice(1)}
                        </span>

                        <div className="border-l pl-2 flex items-center self-stretch">
                            {openDropdown === config.name ? <IoChevronUp /> : <IoChevronDown />}
                        </div>
                    </button>

                    {openDropdown === config.name && (
                        <>
                            {config.type === 'select' && config.options && (
                                <div
                                    className={`absolute mt-2 bg-white border rounded-md shadow-md ${config.width || 'w-48'} z-50`}
                                >
                                    {config.options.map((item, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => handleSelect(config.name, item)}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {config.type === 'dateRange' && (
                                <div className="absolute mt-2 bg-white border rounded-md shadow-md p-3 w-64 z-50">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col">
                                            <label className="text-xs text-gray-500">Date From</label>
                                            <input
                                                type="date"
                                                value={selectedFilters.dateFrom || ''}
                                                onChange={(e) =>
                                                    setSelectedFilters((prev) => ({
                                                        ...prev,
                                                        dateFrom: e.target.value,
                                                    }))
                                                }
                                                className="border rounded-md px-2 py-1 text-sm text-second outline-none"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-xs text-gray-500">Date To</label>
                                            <input
                                                type="date"
                                                value={selectedFilters.dateTo || ''}
                                                onChange={(e) =>
                                                    setSelectedFilters((prev) => ({
                                                        ...prev,
                                                        dateTo: e.target.value,
                                                    }))
                                                }
                                                className="border rounded-md px-2 py-1 text-sm text-second outline-none"
                                            />
                                        </div>
                                        <button
                                            onClick={() => applyDateRange(config)}
                                            className="mt-2 bg-[#7E30ED] text-white text-sm py-1 rounded-md hover:bg-[#6926c6]"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            )}
                            {config.type === 'priceRange' && (
                                <div className="absolute mt-2 bg-white border rounded-md shadow-md p-3 w-56 z-10">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex flex-col">
                                            <label className="text-xs text-gray-500">Min Price</label>
                                            <input
                                                type="number"
                                                value={selectedFilters.minPrice || ''}
                                                onChange={(e) =>
                                                    setSelectedFilters((prev) => ({
                                                        ...prev,
                                                        minPrice: e.target.value,
                                                    }))
                                                }
                                                className="border rounded-md px-2 py-1 text-sm text-second outline-none"
                                                placeholder="0"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="text-xs text-gray-500">Max Price</label>
                                            <input
                                                type="number"
                                                value={selectedFilters.maxPrice || ''}
                                                onChange={(e) =>
                                                    setSelectedFilters((prev) => ({
                                                        ...prev,
                                                        maxPrice: e.target.value,
                                                    }))
                                                }
                                                className="border rounded-md px-2 py-1 text-sm text-second outline-none"
                                                placeholder="1000"
                                            />
                                        </div>
                                        <button
                                            onClick={() => applyPriceRange(config)}
                                            className="mt-2 bg-[#7E30ED] text-white text-sm py-1 rounded-md hover:bg-[#6926c6]"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}

export function Clearfilter({ clearFilters }: { clearFilters: () => void }) {
    return (
        <div
            onClick={clearFilters}
            className="flex items-center justify-end gap-2 mx-10 cursor-pointer text-gray-600 hover:text-[#7E30ED] transition w-auto"
        >
            <img
                src="/dashboard/close-circle.png"
                height={20}
                width={20}
                alt="Clear"
                className="w-4 h-4"
            />
            <p className="text-sm font-medium">Clear Filters</p>
        </div>
    );
}