'use client';
import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Top_area from '@/components/sidebar/top_area';
import Pagination from '../components/Pagination';
import { Product_filter_bar, Clearfilter, type FilterConfig } from '../components/product_filter_bar';
import { Export, Showfilter, Hidefilter, Refresh, SearchBar, SortDropdown, SortOrderButton } from '../components/top_buttons';
import { useRouter } from 'next/navigation';
import Order_card from '../components/order_mng/Order_card';
import Order_status_card from '../components/order_mng/Order_status_card';

type Order = {
    order: string;
    customer: string;
    total: string;
    payment: string;
    date: string;
    status: string;
};

const OrdersPage = () => {
    const [showfilter, setshowfilter] = useState(false);
    const [sortOpen, setsortOpen] = useState(false);
    const [sortselected, setsortSelected] = useState('Date Created');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Modal per order
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [selectedStatusOrder, setSelectedStatusOrder] = useState<Order | null>(null);

    const router = useRouter();

    // FILTER CONFIG
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

    const initialFilters = filtersConfig.reduce((acc, config) => {
        acc[config.name] = config.defaultValue || '';
        return acc;
    }, {} as Record<string, any>);

    const [selectedFilters, setSelectedFilters] = useState({
        ...initialFilters,
        dateFrom: '',
        dateTo: '',
    });

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

    // MOCK DATA - Fixed Duplicates
    const allData: Order[] = [
        { order: '#ORD-001', customer: 'John Doe', total: '₹2,499', payment: 'Paid', date: '2025-11-05', status: 'Delivered' },
        { order: '#ORD-002', customer: 'Jane Smith', total: '₹1,299', payment: 'Pending', date: '2025-11-04', status: 'Shipped' },
        { order: '#ORD-003', customer: 'Alex Brown', total: '₹899', payment: 'Paid', date: '2025-11-03', status: 'Confirmed' },
        { order: '#ORD-004', customer: 'Emma Wilson', total: '₹3,999', payment: 'Pending', date: '2025-11-02', status: 'Pending' },
        { order: '#ORD-005', customer: 'Mike Lee', total: '₹1,799', payment: 'Paid', date: '2025-11-01', status: 'Delivered' },
        { order: '#ORD-006', customer: 'Sara Khan', total: '₹599', payment: 'Failed', date: '2025-10-30', status: 'Canceled' },
        { order: '#ORD-007', customer: 'Raj Patel', total: '₹2,199', payment: 'Paid', date: '2025-10-29', status: 'Shipped' },
        { order: '#ORD-008', customer: 'Priya Sharma', total: '₹4,299', payment: 'Pending', date: '2025-10-28', status: 'Processing' },
        { order: '#ORD-009', customer: 'Amit Verma', total: '₹799', payment: 'Paid', date: '2025-10-27', status: 'Delivered' },
        { order: '#ORD-010', customer: 'Neha Gupta', total: '₹1,499', payment: 'Refunded', date: '2025-10-26', status: 'Returned' },
        { order: '#ORD-011', customer: 'Vikram Singh', total: '₹999', payment: 'Paid', date: '2025-10-25', status: 'Delivered' },
        { order: '#ORD-012', customer: 'Kavya Reddy', total: '₹2,599', payment: 'Pending', date: '2025-10-24', status: 'Pending' },
        { order: '#ORD-013', customer: 'Rohan Mehta', total: '₹3,199', payment: 'Paid', date: '2025-10-23', status: 'Shipped' },
        { order: '#ORD-014', customer: 'Sonia Kapoor', total: '₹1,099', payment: 'Failed', date: '2025-10-22', status: 'Canceled' },
        { order: '#ORD-015', customer: 'Arjun Malhotra', total: '₹2,899', payment: 'Paid', date: '2025-10-21', status: 'Delivered' },
    ];

    // Filter Logic
    const filteredData = useMemo(() => {
        return allData.filter(item => {
            const matchesStatus = selectedFilters.status === 'All Status' || item.status === selectedFilters.status;
            const matchesPayment = selectedFilters.payment === 'All Payment Status' || item.payment === selectedFilters.payment;

            let matchesDate = true;
            if (selectedFilters.dateFrom && selectedFilters.dateTo) {
                const itemDate = new Date(item.date);
                const from = new Date(selectedFilters.dateFrom);
                const to = new Date(selectedFilters.dateTo);
                matchesDate = itemDate >= from && itemDate <= to;
            }

            return matchesStatus && matchesPayment && matchesDate;
        });
    }, [allData, selectedFilters]);

    // Reset page on filter change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilters]);

    // Pagination
    const totalFiltered = filteredData.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = useMemo(() => {
        return filteredData.slice(startIndex, endIndex);
    }, [filteredData, startIndex, endIndex]);

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

            <div className={`bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 ${!showfilter ? 'min-h-[400px]':'min-h-[500px]'} `}>
                <div className={`${!showfilter ? 'h-[350px]':'h-[450px]'} overflow-y-auto rounded-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}>
                    {showfilter && (
                        <div className='w-full flex flex-row justify-between mb-3'>
                            <h1 className='text-first text-lg font-semibold'>All orders</h1>
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

                    {/* TABLE */}
                    <table className="min-w-full text-left border-collapse">
                        <thead className="sticky top-0 bg-[#F9F4FF]">
                            <tr>
                                <th className="text-first py-3 px-4 w-[20%] border-gray-300 rounded-l-2xl">Order</th>
                                <th className="text-first py-3 px-4 w-[20%] border-gray-300">Customer</th>
                                <th className="text-first py-3 px-4 w-[10%] border-gray-300">Total</th>
                                <th className="text-first py-3 px-4 border-gray-300">Payment</th>
                                <th className="text-first py-3 px-4 border-gray-300">Date Created</th>
                                <th className="text-first py-3 px-4 border-gray-300">Status</th>
                                <th className="text-first py-3 pl-8 border-gray-300 rounded-r-2xl">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {visibleData.length > 0 ? (
                                visibleData.map((item) => (
                                    <tr
                                        key={item.order}
                                        className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition"
                                    >
                                        <td className="py-3 px-4 font-medium">{item.order}</td>
                                        <td className="py-3 px-4">{item.customer}</td>
                                        <td className="py-3 px-4">{item.total}</td>

                                        <td className="py-3 px-4">
                                            <div
                                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                                    item.payment === 'Paid'
                                                        ? 'text-green-700'
                                                        : item.payment === 'Pending'
                                                        ? 'text-yellow-700'
                                                        : 'text-red-700'
                                                }`}
                                            >
                                                <Image
                                                    src={
                                                        item.payment === 'Paid'
                                                            ? '/dashboard/tick-circle.png'
                                                            : item.payment === 'Pending'
                                                            ? '/dashboard/close-circle-yellow.png'
                                                            : '/dashboard/close-circle.png'
                                                    }
                                                    alt="payment"
                                                    width={16}
                                                    height={16}
                                                />
                                                <span>{item.payment}</span>
                                            </div>
                                        </td>

                                        <td className="py-3 px-4">{item.date}</td>

                                        <td className="py-3 px-4">
                                            <span
                                                className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                                                    item.status === 'Delivered'
                                                        ? 'text-green-700'
                                                        : item.status === 'Shipped'
                                                        ? 'text-red-700'
                                                        : item.status === 'Confirmed'
                                                        ? 'text-blue-700'
                                                        : item.status === 'Pending'
                                                        ? 'text-yellow-700'
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
                                                            : item.status === 'Pending'
                                                            ? '/dashboard/yellow-clock.png'
                                                            : '/dashboard/close-circle.png'
                                                    }
                                                    alt="status"
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
                                                    onClick={() => setSelectedOrder(item)}
                                                />
                                                <Image
                                                    src="/dashboard/download.png"
                                                    height={20}
                                                    width={20}
                                                    alt="Download"
                                                    className="cursor-pointer"
                                                />
                                                <Image
                                                    src="/dashboard/3dot.png"
                                                    height={20}
                                                    width={20}
                                                    alt="More"
                                                    className="cursor-pointer"
                                                    onClick={() => setSelectedStatusOrder(item)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="text-center py-6 text-gray-500">
                                        No orders found.
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

            {/* Modals */}
            {selectedOrder && (
                <Order_card
                    order={selectedOrder}
                    setopencard={() => setSelectedOrder(null)}
                />
            )}
            {selectedStatusOrder && (
                <Order_status_card
                    order={selectedStatusOrder}
                    setstatuscard={() => setSelectedStatusOrder(null)}
                />
            )}
        </div>
    );
};

export default OrdersPage;