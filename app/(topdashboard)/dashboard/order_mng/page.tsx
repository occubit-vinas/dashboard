'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Top_area from '@/components/sidebar/top_area';
import { Product_filter_bar, Clearfilter, type FilterConfig } from '../components/product_filter_bar';
import { Export, Showfilter, Hidefilter, Refresh, Add_product, SearchBar, SortDropdown, SortOrderButton } from '../components/top_buttons';
import { useRouter } from 'next/navigation';
import Order_card from '../components/order_mng/Order_card';
import Order_status_card from '../components/order_mng/Order_status_card';
const OrdersPage = () => {
    const [showfilter, setshowfilter] = useState(false);
    const [sortOpen, setsortOpen] = useState(false);
    const [sortselected, setsortSelected] = useState('Date Created');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');
    const [opencard, setopencard] = useState(false);
    const [statuscard, setstatuscard] = useState(false);
    const router = useRouter();

    // === FILTER CONFIG (Reusable) ===
    const filtersConfig: FilterConfig[] = [
        {
            type: 'select',
            name: 'status',
            label: 'Order Status',
            options: [
                'All Status',
                'Pending',
                'Processing',
                'Shipped',
                'Delivered',
                'Canceled',
                'Returned',
            ],
            width: 'w-56',
            defaultValue: 'All Status',
        },
        {
            type: 'select',
            name: 'payment',
            label: 'Payment Status',
            options: [
                'All Payment Status',
                'Paid',
                'Pending',
                'Failed',
                'Refunded',
                'Partially Refunded',
            ],
            width: 'w-60',
            defaultValue: 'All Payment Status',
        },
        {
            type: 'dateRange',
            name: 'date',
            label: 'Date Range',
            defaultValue: 'Date Range',
        },
    ];

    // === INITIAL FILTER STATE ===
    const initialFilters = filtersConfig.reduce((acc, config) => {
        acc[config.name] = config.defaultValue || '';
        return acc;
    }, {} as Record<string, any>);

    const [selectedFilters, setSelectedFilters] = useState({
        ...initialFilters,
        dateFrom: '',
        dateTo: '',
    });

    // === CLEAR FILTERS ===
    const clearFilters = () => {
        const reset = filtersConfig.reduce((acc, config) => {
            acc[config.name] = config.defaultValue || '';
            return acc;
        }, {} as Record<string, any>);

        setSelectedFilters({
            ...reset,
            dateFrom: '',
            dateTo: '',
        });
    };

    // === MOCK DATA ===
    const data = [
        {
            order: '#ORD-001',
            customer: 'John Doe',
            total: '₹2,499',
            payment: 'Paid',
            date: '2025-11-05',
            status: 'Delivered',
        },
        {
            order: '#ORD-002',
            customer: 'Jane Smith',
            total: '₹1,299',
            payment: 'Pending',
            date: '2025-11-04',
            status: 'Shipped',
        },
        {
            order: '#ORD-003',
            customer: 'Alex Brown',
            total: '₹899',
            payment: 'Paid',
            date: '2025-11-03',
            status: 'Confirmed',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
        {
            order: '#ORD-004',
            customer: 'Emma Wilson',
            total: '₹3,999',
            payment: 'Pending',
            date: '2025-11-02',
            status: 'Pending',
        },
    ];

    return (
        <div className="container my-10 flex flex-col gap-5">
            <Top_area
                title="Orders Management"
                desc="Manage and track all your store orders"
                components={[
                    <Export key="1" />,
                    showfilter ? (
                        <Hidefilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />
                    ) : (
                        <Showfilter key="2" setshowfilter={setshowfilter} showfilter={showfilter} />
                    ),
                    <Refresh key="3" />,
                ]}
            />

            <div className="bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 h-[600px]">
                <div className="h-[550px] overflow-y-auto rounded-2xl  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                    {showfilter &&
                        <div className='w-full flex flex-row justify-between'>
                            <h1 className='text-first'>All order</h1>
                            <Clearfilter clearFilters={clearFilters} />
                        </div>
                    }
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

                    {/* REUSABLE FILTER BAR */}
                    {showfilter && (
                        <Product_filter_bar
                            filtersConfig={filtersConfig}
                            selectedFilters={selectedFilters}
                            setSelectedFilters={setSelectedFilters}
                        />
                    )}

                    {/* TABLE – First 3 cols = 50% */}
                    <table className="min-w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-[#F9F4FF] rounded-md">
                            <tr className='rounded-md mb-1'>
                                <th className="text-first py-3 px-4 w-[20%]  border-gray-300 rounded-l-2xl">Order</th>
                                <th className="text-first py-3 px-4 w-[20%]  border-gray-300">Customer</th>
                                <th className="text-first py-3 px-4 w-[10%]  border-gray-300">Total</th>
                                <th className="text-first py-3 px-4  border-gray-300">Payment</th>
                                <th className="text-first py-3 px-4  border-gray-300">Date Created</th>
                                <th className="text-first py-3 px-4  border-gray-300">Status</th>
                                <th className="text-first py-3 px-4  border-gray-300 rounded-r-2xl">Action</th>
                            </tr>
                        </thead>
                        <tbody className='overflow-y-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                            {data.map((item, i) => (
                                <tr
                                    key={i}
                                    className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition"
                                >
                                    {/* First 3 columns = 50% total width */}
                                    <td className="py-3 px-4 font-medium">{item.order}</td>
                                    <td className="py-3 px-4">{item.customer}</td>
                                    <td className="py-3 px-4 ">{item.total}</td>

                                    <td className="py-3 px-4">
                                        <div
                                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${item.payment === 'Paid'
                                                ? 'text-green-700 '
                                                : item.payment === 'Pending'
                                                && 'text-yellow-700 '
                                                }`}
                                        >
                                            <Image
                                                src={
                                                    item.payment === 'Paid'
                                                        ? '/dashboard/tick-circle.png'
                                                        : item.payment === 'Pending'
                                                        && '/dashboard/close-circle-yellow.png'
                                                }
                                                alt="payment status"
                                                width={16}
                                                height={16}
                                            />
                                            <span>{item.payment}</span>
                                        </div>
                                    </td>

                                    <td className="py-3 px-4">{item.date}</td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Delivered'
                                                ? 'text-green-700'
                                                : item.status === 'Shipped'
                                                    ? 'text-red-700'
                                                    : item.status === 'Confirmed'
                                                        ? 'text-blue-700'
                                                        : 'text-gray-700'
                                                }`}
                                        >
                                            <Image
                                                src={
                                                    item.status === 'Delivered'
                                                        ? '/dashboard/tick-circle.png'
                                                        : item.status === 'Shipped'
                                                            ? '/dashboard/red-truck.png'
                                                            : item.status === 'Confirmed'
                                                                ? '/dashboard/info-circle-blue.png'
                                                                : item.status === 'Pending' ?
                                                                    '/dashboard/yellow-clock.png' : ''
                                                }
                                                alt="status icon"
                                                width={16}
                                                height={16}
                                            />
                                            {item.status}
                                        </span>

                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex gap-3">
                                            <Image
                                                src="/dashboard/eye.png"
                                                height={20}
                                                width={20}
                                                alt="View"
                                                className="cursor-pointer"
                                                onClick={() => setopencard(true)}
                                            />
                                            {opencard && <Order_card setopencard={setopencard} />}
                                            <Image
                                                src="/dashboard/download.png"
                                                height={20}
                                                width={20}
                                                alt="Delete"
                                                className="cursor-pointer"
                                            />
                                            <Image
                                                src="/dashboard/3dot.png"
                                                height={20}
                                                width={20}
                                                alt="Delete"
                                                className="cursor-pointer"
                                                onClick={() => setstatuscard(true)}
                                            />
                                            {statuscard && <Order_status_card setstatuscard={setstatuscard} />}
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

export default OrdersPage;