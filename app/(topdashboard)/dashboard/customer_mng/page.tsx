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
    SearchBar,
    SortDropdown,
    SortOrderButton,
} from '../components/top_buttons';
import { useRouter } from 'next/navigation';

type Customer = {
    id: string;
    name: string;
    email: string;
    orders: number;
    totalSpent: string;
    city: string;
    lastOrder: string;
    status: 'Active' | 'Inactive' | 'VIP' | 'Banned' | 'Prospect';
    avatar?: string;
};

const CustomersPage: React.FC = () => {
    const [showfilter, setshowfilter] = useState(false);
    const [sortOpen, setsortOpen] = useState(false);
    const [sortselected, setsortSelected] = useState('Name');
    const [order, setOrder] = useState<'asc' | 'desc'>('asc');
    const [viewCustomer, setViewCustomer] = useState<Customer | null>(null);
    const [statusModal, setStatusModal] = useState<Customer | null>(null);
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    // FILTER CONFIG
    const filtersConfig: FilterConfig[] = [
        {
            type: 'select',
            name: 'status',
            label: 'Customer Status',
            options: ['All', 'Active', 'Inactive', 'VIP', 'Banned', 'Prospect'],
            width: 'w-56',
            defaultValue: 'All',
        },
        {
            type: 'select',
            name: 'city',
            label: 'City',
            options: ['All Cities', 'Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata'],
            width: 'w-60',
            defaultValue: 'All Cities',
        },
        {
            type: 'dateRange',
            name: 'lastOrder',
            label: 'Last Order Date',
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
        search: '',
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
            search: '',
        });
    };

    // MOCK DATA: 12 unique customers
    const customers: Customer[] = [
        {
            id: 'CUST-001',
            name: 'Anita Desai',
            email: 'anita.desai@example.com',
            orders: 12,
            totalSpent: '₹45,200',
            city: 'Mumbai',
            lastOrder: '2025-11-02',
            status: 'VIP',
            avatar: '/avatars/avatar1.png',
        },
        {
            id: 'CUST-002',
            name: 'Ravi Kumar',
            email: 'ravi.kumar@example.com',
            orders: 3,
            totalSpent: '₹4,599',
            city: 'Bengaluru',
            lastOrder: '2025-10-28',
            status: 'Active',
            avatar: '/avatars/avatar2.png',
        },
        {
            id: 'CUST-003',
            name: 'Meera Nair',
            email: 'meera.nair@example.com',
            orders: 0,
            totalSpent: '₹0',
            city: 'Chennai',
            lastOrder: '—',
            status: 'Prospect',
            avatar: '/avatars/avatar3.png',
        },
        {
            id: 'CUST-004',
            name: 'Sanjay Patel',
            email: 'sanjay.patel@example.com',
            orders: 7,
            totalSpent: '₹18,750',
            city: 'Delhi',
            lastOrder: '2025-10-30',
            status: 'Inactive',
            avatar: '/avatars/avatar4.png',
        },
        {
            id: 'CUST-005',
            name: 'Priya Sharma',
            email: 'priya.sharma@example.com',
            orders: 15,
            totalSpent: '₹62,300',
            city: 'Mumbai',
            lastOrder: '2025-11-05',
            status: 'VIP',
            avatar: '/avatars/avatar5.png',
        },
        {
            id: 'CUST-006',
            name: 'Amit Verma',
            email: 'amit.verma@example.com',
            orders: 1,
            totalSpent: '₹1,200',
            city: 'Kolkata',
            lastOrder: '2025-09-15',
            status: 'Inactive',
            avatar: '/avatars/avatar6.png',
        },
        {
            id: 'CUST-007',
            name: 'Neha Gupta',
            email: 'neha.gupta@example.com',
            orders: 5,
            totalSpent: '₹9,800',
            city: 'Bengaluru',
            lastOrder: '2025-10-20',
            status: 'Active',
            avatar: '/avatars/avatar7.png',
        },
        {
            id: 'CUST-008',
            name: 'Vikram Singh',
            email: 'vikram.singh@example.com',
            orders: 0,
            totalSpent: '₹0',
            city: 'Delhi',
            lastOrder: '—',
            status: 'Prospect',
            avatar: '/avatars/avatar8.png',
        },
        {
            id: 'CUST-009',
            name: 'Kavya Reddy',
            email: 'kavya.reddy@example.com',
            orders: 9,
            totalSpent: '₹27,500',
            city: 'Chennai',
            lastOrder: '2025-11-01',
            status: 'Active',
            avatar: '/avatars/avatar9.png',
        },
        {
            id: 'CUST-010',
            name: 'Rohan Mehta',
            email: 'rohan.mehta@example.com',
            orders: 20,
            totalSpent: '₹98,000',
            city: 'Mumbai',
            lastOrder: '2025-11-06',
            status: 'VIP',
            avatar: '/avatars/avatar10.png',
        },
        {
            id: 'CUST-011',
            name: 'Sonia Kapoor',
            email: 'sonia.kapoor@example.com',
            orders: 2,
            totalSpent: '₹3,100',
            city: 'Delhi',
            lastOrder: '2025-08-10',
            status: 'Inactive',
            avatar: '/avatars/avatar11.png',
        },
        {
            id: 'CUST-012',
            name: 'Arjun Malhotra',
            email: 'arjun.malhotra@example.com',
            orders: 4,
            totalSpent: '₹12,400',
            city: 'Bengaluru',
            lastOrder: '2025-10-25',
            status: 'Active',
            avatar: '/avatars/avatar12.png',
        },
    ];

    // Status badge helper
    const statusBadge = (status: Customer['status']) => {
        switch (status) {
            case 'VIP':
                return 'bg-yellow-50 text-yellow-700';
            case 'Active':
                return 'bg-green-50 text-green-700';
            case 'Inactive':
                return 'bg-gray-100 text-gray-700';
            case 'Banned':
                return 'bg-red-50 text-red-700';
            case 'Prospect':
                return 'bg-blue-50 text-blue-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    // Filter logic
    const filtered = useMemo(() => {
        return customers.filter((c) => {
            const statusFilter = selectedFilters.status && selectedFilters.status !== 'All';
            const cityFilter = selectedFilters.city && selectedFilters.city !== 'All Cities';
            const matchesStatus = statusFilter ? c.status === selectedFilters.status : true;
            const matchesCity = cityFilter ? c.city === selectedFilters.city : true;
            const q = (selectedFilters.search || '').toLowerCase().trim();
            const matchesSearch = q
                ? c.name.toLowerCase().includes(q) ||
                c.email.toLowerCase().includes(q) ||
                c.id.toLowerCase().includes(q)
                : true;
            return matchesStatus && matchesCity && matchesSearch;
        });
    }, [customers, selectedFilters]);

    // Reset page when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedFilters]);

    // Pagination math
    const totalFiltered = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalFiltered / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleCustomers = useMemo(() => {
        return filtered.slice(startIndex, endIndex);
    }, [filtered, startIndex, endIndex]);

    return (
        <div className="container my-10 flex flex-col gap-5">
            <Top_area
                title="Customer Management"
                desc="Manage your customer base and relationships"
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

            <div className={`bg-white rounded-xl shadow-xl p-4 flex flex-col gap-2 ${!showfilter ? 'min-h-[450px]' : 'min-h-[550px]'}`}>
                <div className={`${!showfilter ? 'h-[400px]' : 'h-[500px]'} overflow-y-auto rounded-2xl`}>
                    {showfilter && (
                        <div className="w-full flex flex-row justify-between items-center mb-3">
                            <h1 className="text-first text-lg font-semibold">All customers</h1>
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
                                <th className="text-first py-3 px-4 w-[15%] border-gray-300 rounded-l-2xl">Name</th>
                                <th className="text-first py-3 px-4 w-[15%] border-gray-300">Email</th>
                                <th className="text-first py-3 px-4 w-[10%] border-gray-300">Orders</th>
                                <th className="text-first py-3 px-4 border-gray-300">Total Spent</th>
                                <th className="text-first py-3 px-4 border-gray-300">City</th>
                                <th className="text-first py-3 px-4 border-gray-300">Last Order</th>
                                <th className="text-first py-3 px-4 border-gray-300">Status</th>
                                <th className="text-first py-3 px-4 border-gray-300 rounded-r-2xl">Action</th>
                            </tr>
                        </thead>

                        <tbody className="overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                            {visibleCustomers.map((c) => (
                                <tr
                                    key={c.id}
                                    className="border-b border-gray-200 text-second hover:bg-[#F9F4FF] transition"
                                >
                                    {/* Name + Avatar */}
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-100">
                                                <Image
                                                    src={c.avatar || '/avatars/default.png'}
                                                    alt={c.name}
                                                    width={32}
                                                    height={32}
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{c.name}</span>
                                                <span className="text-xs text-gray-500">{c.id}</span>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className="py-3 px-4">
                                        <div className="flex flex-col">
                                            <span className="truncate max-w-[220px]">{c.email}</span>
                                        </div>
                                    </td>

                                    {/* Orders */}
                                    <td className="pt-5 px-4 flex flex-row gap-1 text-center">
                                        <Image src="/dashboard/bag-tick.png" height={20} width={20} alt="bag" />
                                        <p className="pt-0.5">{c.orders}</p>
                                    </td>

                                    {/* Total Spent */}
                                    <td className="py-3 px-4">{c.totalSpent}</td>

                                    {/* City */}
                                    <td className="py-3 px-4">{c.city}</td>

                                    {/* Last Order */}
                                    <td className="py-3 px-4">{c.lastOrder}</td>

                                    {/* Status */}
                                    <td className="py-3 px-4">
                                        <span
                                            className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${statusBadge(
                                                c.status
                                            )}`}
                                        >
                                            <span className="inline-block h-2 w-2 rounded-full" />
                                            {c.status}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => setViewCustomer(c)}
                                                className="p-0.5 rounded hover:bg-gray-100"
                                                title="View"
                                            >
                                                <Image src="/dashboard/eye.png" alt="View" width={20} height={20} />
                                            </button>

                                            <button
                                                onClick={() => setStatusModal(c)}
                                                className="p-0.5 rounded hover:bg-gray-100"
                                                title="Status actions"
                                            >
                                                <Image src="/dashboard/sms.png" alt="More" width={20} height={20} />
                                            </button>
                                        </div>

                                        {/* Modals */}
                                        {viewCustomer && viewCustomer.id === c.id && (
                                            <CustomerViewModal customer={viewCustomer} onClose={() => setViewCustomer(null)} />
                                        )}
                                        {statusModal && statusModal.id === c.id && (
                                            <CustomerStatusModal customer={statusModal} onClose={() => setStatusModal(null)} />
                                        )}
                                    </td>
                                </tr>
                            ))}

                            {/* Empty State */}
                            {filtered.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="py-6 px-4 text-center text-gray-500">
                                        No customers found matching the filters.
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
                    onPageChange={(p) => setCurrentPage(p)}
                    maxVisiblePages={3}
                />
            </div>
        </div>
    );
};

export default CustomersPage;
/* ---------------------------------------------------------------------------
   Simple inline modal components used by the page above so this file is
   self-contained. If you already have modal components in your project,
   feel free to replace these with your centralized modal UI.
   --------------------------------------------------------------------------- */

function CustomerViewModal({
    customer,
    onClose,
}: {
    customer: { name: string; email: string; id: string; orders: number; totalSpent: string; city: string; lastOrder: string; status: string };
    onClose: () => void;
}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">Customer details</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div>
                        <div className="font-medium">Name</div>
                        <div>{customer.name}</div>
                    </div>
                    <div>
                        <div className="font-medium">Email</div>
                        <div>{customer.email}</div>
                    </div>
                    <div>
                        <div className="font-medium">ID</div>
                        <div>{customer.id}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <div className="font-medium">Orders</div>
                            <div>{customer.orders}</div>
                        </div>
                        <div>
                            <div className="font-medium">Total Spent</div>
                            <div>{customer.totalSpent}</div>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium">City</div>
                        <div>{customer.city}</div>
                    </div>
                    <div>
                        <div className="font-medium">Last Order</div>
                        <div>{customer.lastOrder}</div>
                    </div>
                    <div>
                        <div className="font-medium">Status</div>
                        <div>{customer.status}</div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-100">
                        Close
                    </button>
                    <button
                        onClick={() => {
                            // Example: navigate to full profile page
                            // router.push(`/customers/${customer.id}`);
                            alert('Open full profile (not implemented)');
                        }}
                        className="px-4 py-2 rounded bg-primary text-white"
                    >
                        Open Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

function CustomerStatusModal({
    customer,
    onClose,
}: {
    customer: { id: string; name: string; status: string };
    onClose: () => void;
}) {
    // local state for demonstration
    const [selectedStatus, setSelectedStatus] = useState<string>(customer.status);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/30" onClick={onClose} />
            <div className="relative z-10 w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">Update status — {customer.name}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        ✕
                    </button>
                </div>

                <div className="mt-4 space-y-3">
                    <label className="block text-sm">Set status</label>
                    <select
                        className="w-full border px-3 py-2 rounded"
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>VIP</option>
                        <option>Banned</option>
                        <option>Prospect</option>
                    </select>
                    <div className="text-xs text-gray-500">
                        Changing status does not affect order history — it's for CRM segmentation.
                    </div>
                </div>

                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 rounded bg-gray-100">
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            // Apply action (demo)
                            alert(`Status updated to "${selectedStatus}" for ${customer.name} (demo).`);
                            onClose();
                        }}
                        className="px-4 py-2 rounded bg-primary text-white"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
