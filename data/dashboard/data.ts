// data.js
import { overview_box as OVERVIEW_TEXT, sales_box as SALES_TEXT } from './constants';

import {
    customer_box as CUSTOMER_TEXT,
    inventory_box as INVENTORY_TEXT
} from './constants';

import {
    overview_piechart as OVERVIEW_PIE_TEXT,
    sales_piechart as SALES_PIE_TEXT
} from "./constants";

import { overview_orders as ORDERS_TEXT } from "./constants";

import {
    overview_products as PRODUCT_TEXT,
    sales_radial_chart as RADIAL_TEXT
} from "./constants";

import {
    customer_radial_chart as CUSTOMER_RADIAL_TEXT,
    products_topselling as TOPSELLING_TEXT,
    performance_summary as SUMMARY_TEXT
} from "./constants";

export const overview_box = [
    {
        title: OVERVIEW_TEXT.titles.TOTAL_REVENUE,
        price: 990.00,
        percentage: 17.6,
        text: OVERVIEW_TEXT.subtitles.VS_LAST_PERIOD1,
        img: 'rupee.svg',
    },
    {
        title: OVERVIEW_TEXT.titles.TOTAL_ORDERS,
        number: 99,
        percentage: -17.6,
        text: OVERVIEW_TEXT.subtitles.VS_LAST_PERIOD2,
        img: 'cart.svg',
    },
    {
        title: OVERVIEW_TEXT.titles.TOTAL_CUSTOMERS,
        number: 990,
        percentage: -17.6,
        text: OVERVIEW_TEXT.subtitles.VS_LAST_PERIOD3,
        img: 'user.svg',
    },
    {
        title: OVERVIEW_TEXT.titles.TOTAL_PRODUCTS,
        price: 990.00,
        percentage: 17.6,
        text: OVERVIEW_TEXT.subtitles.VS_LAST_PERIOD4,
        img: 'box.svg',
    },
];


// ------------------- SALES DATA --------------------
export const sales_box = [
    {
        title: SALES_TEXT.titles.TOTAL_REVENUE,
        price: 990.99,
        text: SALES_TEXT.subtitles.ALL_TIME_REVENUE,
        img: 'rupee.svg',
    },
    {
        title: SALES_TEXT.titles.TOTAL_ORDERS,
        number: 90,
        text: SALES_TEXT.subtitles.ALL_TIME_ORDERS,
        img: 'cart.svg',
    },
    {
        title: SALES_TEXT.titles.AVG_ORDER_VALUE,
        number: '2.4%',
        text: SALES_TEXT.subtitles.VISITOR_TO_CUSTOMER,
        img: 'trend.svg',
    },
    {
        title: SALES_TEXT.titles.TOTAL_REVENUE,
        price: 990.99,
        text: SALES_TEXT.subtitles.ALL_TIME_REVENUE,
        img: 'rupee.svg',
    },
];

export const customer_box = [
    {
        title: CUSTOMER_TEXT.titles.TOTAL_CUSTOMERS,
        number: 21,
        text: CUSTOMER_TEXT.subtitles.ALL_REGION_USERS,
        img: 'user.svg'
    },
    {
        title: CUSTOMER_TEXT.titles.ACTIVE_CUSTOMERS,
        number: 15,
        text: CUSTOMER_TEXT.subtitles.ACTIVE_30_DAYS,
        img: 'eye.svg'
    },
    {
        title: CUSTOMER_TEXT.titles.REPEAT_CUSTOMERS,
        number: 12,
        text: CUSTOMER_TEXT.subtitles.PER_ORDER_AVG,
        img: 'heart.svg'
    },
    {
        title: CUSTOMER_TEXT.titles.CUSTOMER_RETENTION,
        number: '50%',
        text: CUSTOMER_TEXT.subtitles.CUSTOMER_RETENTION,
        img: 'rings.svg'
    },
];


// ------------------- INVENTORY DATA --------------------
export const inventory_box = [
    {
        title: INVENTORY_TEXT.titles.TOTAL_PRODUCTS,
        number: 69,
        text: INVENTORY_TEXT.subtitles.ALL_PRODUCTS,
        img: 'box.svg'
    },
    {
        title: INVENTORY_TEXT.titles.TOTAL_STOCK,
        number: 87099,
        text: INVENTORY_TEXT.subtitles.UNITS_IN_INVENTORY,
        img: 'chart.svg'
    },
    {
        title: INVENTORY_TEXT.titles.INVENTORY_VALUE,
        price: 30162600.00,
        text: INVENTORY_TEXT.subtitles.TOTAL_INVENTORY_WORTH,
        img: 'doller.svg'
    },
    {
        title: INVENTORY_TEXT.titles.AVERAGE_PRICE,
        price: 462.20,
        text: INVENTORY_TEXT.subtitles.PER_PRODUCT_AVG,
        img: 'rings.svg'
    },
];

export const overview_piechart = {
    title: OVERVIEW_PIE_TEXT.title,
    price: 7380,
    percentage: 11.2,
    stats: [
        { name: OVERVIEW_PIE_TEXT.stats.CONFIRMED, value: 400 },
        { name: OVERVIEW_PIE_TEXT.stats.PENDING, value: 200 },
        { name: OVERVIEW_PIE_TEXT.stats.CANCELLED, value: 600 },
    ],
    origin: "overview",
};

export const sales_piechart = {
    title: SALES_PIE_TEXT.title,
    stats: [
        { name: SALES_PIE_TEXT.stats.COD, value: 20 },
        { name: SALES_PIE_TEXT.stats.UPI, value: 60 },
        { name: SALES_PIE_TEXT.stats.CHEQUE, value: 20 },
    ],
    origin: "sales",
};


export const overview_linechart = [
    { revenue: 1000, orders: 1200 },
    { revenue: 3500, orders: 500 },
    { revenue: 4000, orders: 2500 },
    { revenue: 4500, orders: 3200 },
    { revenue: 8000, orders: 9000 },
    { revenue: 10000, orders: 4600 },
    { revenue: 12000, orders: 5000 },
]

export const overview_orders = [
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.CONFIRMED },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.CONFIRMED },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.CONFIRMED },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.CONFIRMED },
    { email: 'abc@gmail.com', products: 3, amount: '₹ 799.00', date: '16/10/2025', payment: ORDERS_TEXT.paymentStatus.PENDING },
];

// ------------------- OVERVIEW PRODUCTS --------------------
export const overview_products = [
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 4,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XXL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 3,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 5,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 2,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 4,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 4,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 4,
        img: '/dashboard/grid.svg',
    },
    {
        name: PRODUCT_TEXT.productNames.TSHIRT,
        size: PRODUCT_TEXT.sizes.XL,
        color: PRODUCT_TEXT.colors.BLUE,
        star: 4,
        img: '/dashboard/grid.svg',
    },
];


// ------------------- SALES RADIAL CHART --------------------
export const sales_radial_chart = [
    {
        name: RADIAL_TEXT.productNames.KURTI,
        value: 78,
        fill: "#a855f7",
        per:75
    },
    {
        name: RADIAL_TEXT.productNames.GOWN,
        value: 52,
        fill: "#9333ea",
        per:50
    },
    {
        name: RADIAL_TEXT.productNames.DRESS,
        value: 50,
        fill: "#7e22ce",
        per:26
    },
];

export const customers_spending = [
    {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    }, {
        id: '#12345',
        email: 'abc@gmail.com',
        star: 4,
    },

]

// ------------------- CUSTOMER RADIAL CHART --------------------
export const customer_radial_chart = [
    {
        name: CUSTOMER_RADIAL_TEXT.deviceNames.TABLET,
        value: 15,
        fill: "#5315B4",
    },
    {
        name: CUSTOMER_RADIAL_TEXT.deviceNames.DESKTOP,
        value: 20,
        fill: "#8A46F1",
    },
    {
        name: CUSTOMER_RADIAL_TEXT.deviceNames.MOBILE,
        value: 30,
        fill: "#C69AFF",
    },
];


// ------------------- TOP SELLING PRODUCTS --------------------
export const Products_topselling = [
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.A_LINE_KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "1200",
        star: 4,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.A_LINE_KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "1200",
        star: 4,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.A_LINE_KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "1200",
        star: 4,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.A_LINE_KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "1200",
        star: 4,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "800",
        star: 5,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.DRESS,
        cat: TOPSELLING_TEXT.categories.DRESS,
        sold: "700",
        star: 5,
    },
    {
        id: "#12345",
        name: TOPSELLING_TEXT.productNames.A_LINE_KURTI,
        cat: TOPSELLING_TEXT.categories.KURTI,
        sold: "1200",
        star: 4,
    },
];


// ------------------- PERFORMANCE SUMMARY --------------------
export const performance_summary = [
    {
        img: "doller.png",
        num: "₹12,540.00",
        label: SUMMARY_TEXT.labels.REVENUE,
        percentage: 15.2,
    },
    {
        img: "cart.png",
        num: "245",
        label: SUMMARY_TEXT.labels.ORDERS,
        percentage: 16.7,
    },
    {
        img: "person.png",
        num: "156",
        label: SUMMARY_TEXT.labels.CUSTOMER,
        percentage: 20.0,
    },
    {
        img: "trend.png",
        num: "2.8%",
        label: SUMMARY_TEXT.labels.CONVERSION,
        percentage: -21.7,
    },
];
