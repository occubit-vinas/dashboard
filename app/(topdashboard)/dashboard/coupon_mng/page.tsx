'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Top_area from '@/components/sidebar/top_area';
import Add_coupon_box from '../components/coupon_mng/Add_coupon_box';
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
  SearchBar,
  SortDropdown,
  Old_new_sort,
  Add_Coupon
} from '../components/top_buttons';

/**
 * CouponsPage
 *
 * Description:
 * - Create and manage discount codes for your store
 * - 7 columns: Coupon, Type & Value, Usage, Valid Period, Date Created, Status, Action
 * - Includes filtering (status + type)
 * - Includes progress bar for usage (example: 18/1211 users → 4%)
 */

type Coupon = {
  id: string;
  code: string;
  minOrder: string;
  type: 'Percentage' | 'Fixed Amount' | 'Free Shipping';
  value: string; // e.g. ₹200 or 15%
  used: number;
  total: number;
  validFrom: string;
  validTo?: string;
  dateCreated: string;
  status: 'Active' | 'Inactive' | 'Expired';
};

const CouponsPage: React.FC = () => {
  const [showfilter, setshowfilter] = useState(false);
  const [sortOpen, setsortOpen] = useState(false);
  const [sortselected, setsortSelected] = useState('Date Created');
  const [order, setOrder] = useState<'Newest First' | 'Oldest First'>('Newest First');
  const [showcoupon,setshowcoupon]=useState(false);
  // Filter configuration
  const filtersConfig: FilterConfig[] = [
    {
      type: 'select',
      name: 'status',
      label: 'All Status',
      options: ['All', 'Active', 'Inactive', 'Expired'],
      width: 'w-56',
      defaultValue: 'All',
    },
    {
      type: 'select',
      name: 'type',
      label: 'All Type',
      options: ['All', 'Percentage', 'Fixed Amount', 'Free Shipping'],
      width: 'w-56',
      defaultValue: 'All',
    },
  ];

  const initialFilters = filtersConfig.reduce((acc, config) => {
    acc[config.name] = config.defaultValue || '';
    return acc;
  }, {} as Record<string, any>);

  const [selectedFilters, setSelectedFilters] = useState({
    ...initialFilters,
    search: '',
  });

  const clearFilters = () => {
    const reset = filtersConfig.reduce((acc, config) => {
      acc[config.name] = config.defaultValue || '';
      return acc;
    }, {} as Record<string, any>);
    setSelectedFilters({
      ...reset,
      search: '',
    });
  };

  // Mock Data
  const coupons: Coupon[] = [
    {
      id: 'C001',
      code: 'WELCOME200',
      minOrder: '₹1000',
      type: 'Fixed Amount',
      value: '₹200',
      used: 18,
      total: 1211,
      validFrom: '2025-10-01',
      validTo: '2025-12-31',
      dateCreated: '2025-09-28',
      status: 'Active',
    },
    {
      id: 'C002',
      code: 'FREESHIP25',
      minOrder: '₹0',
      type: 'Free Shipping',
      value: 'Free Shipping',
      used: 300,
      total: 600,
      validFrom: '2025-08-15',
      dateCreated: '2025-08-10',
      status: 'Expired',
    },
    {
      id: 'C003',
      code: 'DIWALI15',
      minOrder: '₹500',
      type: 'Percentage',
      value: '15%',
      used: 230,
      total: 2000,
      validFrom: '2025-10-20',
      validTo: '2025-11-20',
      dateCreated: '2025-10-10',
      status: 'Active',
    },
    {
      id: 'C004',
      code: 'SAVE50',
      minOrder: '₹2500',
      type: 'Fixed Amount',
      value: '₹50',
      used: 12,
      total: 300,
      validFrom: '2025-07-10',
      validTo: '2025-07-30',
      dateCreated: '2025-07-01',
      status: 'Inactive',
    },
  ];

  const filtered = coupons.filter((c) => {
    const matchesStatus =
      selectedFilters.status === 'All' || c.status === selectedFilters.status;
    const matchesType = selectedFilters.type === 'All' || c.type === selectedFilters.type;
    const q = (selectedFilters.search || '').toLowerCase();
    const matchesSearch = q
      ? c.code.toLowerCase().includes(q) || c.id.toLowerCase().includes(q)
      : true;
    return matchesStatus && matchesType && matchesSearch;
  });
  const close_coupon=()=>{
    setshowcoupon(false);
  }

  return (
    <div className="container my-10 flex flex-col gap-5">
      <Top_area
        title="Coupons & Discounts"
        desc="Create and manage discount codes for your store"
        components={[
          <Export key="1" />,
          showfilter ? (
            <Hidefilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />
          ) : (
            <Showfilter key="3" setshowfilter={setshowfilter} showfilter={showfilter} />
          ),
          <Refresh key="4" />,
          <Add_Coupon key='5' onClick={()=>setshowcoupon(true)}/>
        ]}
      />
        {showcoupon && <Add_coupon_box onClick={close_coupon}/>}
      <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 min-h-[600px]">
        <div className="h-[550px] overflow-y-auto rounded-2xl">
          {showfilter && (
            <div className="w-full flex flex-row justify-between items-center mb-3">
              <h1 className="text-first text-lg font-semibold">All Coupons</h1>
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
              <Old_new_sort order={order} setOrder={setOrder} />

            </div>
          </div>

          {showfilter && (
            <Product_filter_bar
              filtersConfig={filtersConfig}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          )}

          {/* TABLE */}
          <table className="min-w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#F9F4FF]">
              <tr>
                <th className="py-3 px-4  border-gray-300 w-[18%] rounded-l-2xl">Coupon</th>
                <th className="py-3 px-4  border-gray-300 w-[15%]">Type & Value</th>
                <th className="py-3 px-4  border-gray-300 w-[30%]">Usage</th>
                <th className="py-3 px-4  border-gray-300 w-[10%]">Valid Period</th>
                <th className="py-3 px-4  border-gray-300 w-[15%]">Date Created</th>
                <th className="py-3 px-4  border-gray-300 w-[5%]">Status</th>
                <th className="py-3 px-4  border-gray-300 w-[10%] rounded-r-2xl">Action</th>
              </tr>
            </thead>

            <tbody className='overflow-y-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
              {filtered.map((c) => {
                const usagePercent = ((c.used / c.total) * 100).toFixed(1);
                return (
                  <tr
                    key={c.id}
                    className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition"
                  >
                    {/* Coupon column */}
                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <span className="font-semibold">{c.code}</span>
                        <span className="text-xs text-gray-500">Min Order: {c.minOrder}</span>
                      </div>
                    </td>

                    {/* Type & Value */}
                    <td className="py-3 px-4">
                      <div className="inline-flex items-center gap-2 border border-gray-300 px-2 py-1 rounded">
                        <span className="text-sm font-medium text-green-600">{c.value} OFF</span>
                      </div>
                     
                    </td>

                    {/* Usage */}
                    <td className="py-3 px-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>
                          {c.used}/{c.total} users
                        </span>
                        <span>{usagePercent}%</span>
                      </div>
                      <div className="w-full h-2 rounded bg-purple-100 overflow-hidden">
                        <div
                          className="h-2 bg-green-500"
                          style={{ width: `${usagePercent}%` }}
                        ></div>
                      </div>
                    </td>

                    {/* Valid Period */}
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-700 flex flex-col gap-0.5">
                        <p>{c.validFrom}</p>
                        <p>{c.validTo || 'No Expire'}</p> 
                         
                      </div>
                    </td>

                    {/* Date Created */}
                    <td className="py-3 px-4">{c.dateCreated}</td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <span
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          c.status === 'Active'
                            ? ' text-green-700'
                            : c.status === 'Inactive'
                            ? ' text-gray-700'
                            : ' text-red-700'
                        }`}
                      >
                        <p className='flex flex-row gap-1 '><Image src={c.status === 'Active' ? '/dashboard/close-circle.png':'/dashboard/tick-circle.png'} className='size-4' height={5} width={5}/>{c.status}</p>
                      </span>
                    </td>

                    {/* Action */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <button className="p-1 rounded hover:bg-gray-100" title="View">
                          <Image src="/dashboard/eye.png" alt="View" width={20} height={20} />
                        </button>
                        <button className="p-1 rounded hover:bg-gray-100" title="More">
                          <Image src="/dashboard/3dot.png" alt="More" width={20} height={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 px-4 text-center text-gray-500">
                    No coupons found matching the filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
