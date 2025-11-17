// Status Constants
export const Active = 'Active';
export const Cancel = 'Cancel';
export const Inactive = 'Inactive';

// Category Constants
export const Electronics = 'Electronics';
export const Home = 'Home';
export const Fashion = 'Fashion';
export const Books = 'Books';
export const Beauty = 'Beauty';

// Sub-Category Constants
export const Phones = 'Phones';
export const Furniture = 'Furniture';
export const Shoes = 'Shoes';
export const Novels = 'Novels';
export const Makeup = 'Makeup';
// constants.js
// constants.js

export const overview_box = {
    titles: {
        TOTAL_REVENUE: 'Total revenue',
        TOTAL_ORDERS: 'Total orders',
        TOTAL_CUSTOMERS: 'Total customers',
        TOTAL_PRODUCTS: 'Total products',
    },
    subtitles: {
        VS_LAST_PERIOD1: 'vs last period Monthly revenue',
        VS_LAST_PERIOD2: 'vs last period All time Orders',
        VS_LAST_PERIOD3: 'vs last period Registered Customers',
        VS_LAST_PERIOD4: 'vs last period Active Products',

    }
};

export const sales_box = {
    titles: {
        TOTAL_REVENUE: 'Total Revenue',
        TOTAL_ORDERS: 'Total Orders',
        AVG_ORDER_VALUE: 'Average order value',
    },
    subtitles: {
        ALL_TIME_REVENUE: 'All time revenue',
        ALL_TIME_ORDERS: 'All time orders',
        VISITOR_TO_CUSTOMER: 'visitors to customers',
    }
};


// constants.js

export const customer_box = {
    titles: {
        TOTAL_CUSTOMERS: 'Total Customers',
        ACTIVE_CUSTOMERS: 'Active Customers',
        REPEAT_CUSTOMERS: 'Repeat Customers',
        CUSTOMER_RETENTION: 'Total Customers'
    },
    subtitles: {
        ALL_REGION_USERS: 'All Region users',
        ACTIVE_30_DAYS: 'Active in last 30 days',
        PER_ORDER_AVG: 'Per order average',
        CUSTOMER_RETENTION: 'Customer retantion',
    }
};

export const inventory_box = {
    titles: {
        TOTAL_PRODUCTS: 'Total Products',
        TOTAL_STOCK: 'Total Stock',
        INVENTORY_VALUE: 'inventory value',
        AVERAGE_PRICE: 'Average Price',
    },
    subtitles: {
        ALL_PRODUCTS: 'All products',
        UNITS_IN_INVENTORY: 'Units in inventory',
        TOTAL_INVENTORY_WORTH: 'total inventory worth',
        PER_PRODUCT_AVG: 'Per product average',
    }
};

// constants.js

export const overview_piechart = {
    title: "Order Status Distribution",
    stats: {
        CONFIRMED: "Confirmed Orders",
        PENDING: "Pending Orders",
        CANCELLED: "Cancelled Orders",
    },
};

export const sales_piechart = {
    title: "Payment Method",
    stats: {
        COD: "cash on delivery",
        UPI: "UPI Online Payment",
        CHEQUE: "cheak",
    },
};

// constants.js

export const overview_orders = {
    paymentStatus: {
        CONFIRMED: "Confirmed",
        PENDING: "Pending",
    }
};

// constants.js

export const overview_products = {
    productNames: {
        TSHIRT: "T-shirt",
    },
    colors: {
        BLUE: "Blue",
    },
    sizes: {
        XL: "XL",
        XXL: "XXL",
    }
};

export const sales_radial_chart = {
    productNames: {
        KURTI: "Kurti",
        GOWN: "Gown",
        DRESS: "Dress",
    },
    metadata:{
        TITLE:'Sales By Category',
        DESC:'Keep Performance Indicator Breakdown'
    }
};

// constants.js

export const customer_radial_chart = {
    deviceNames: {
        TABLET: "tablet",
        DESKTOP: "Desktop",
        MOBILE: "Mobile",
    },
    title:{
        TITLE:'Devices'
    }
};

export const products_topselling = {
    productNames: {
        A_LINE_KURTI: "A-Line kurti",
        KURTI: "kurti",
        DRESS: "dress",
    },
    categories: {
        KURTI: "kurti",
        DRESS: "dress",
    }
};

export const performance_summary = {
    labels: {
        REVENUE: "Revenue",
        ORDERS: "orders",
        CUSTOMER: "Customer",
        CONVERSION: "Conversion",
    }
};
export const TIMEFRAMES = {
    DAY: "day",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year",
};

export type Timeframe = "day" | "week" | "month" | "year";
