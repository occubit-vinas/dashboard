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
    },
    stock:{
        IN:'In Stock',
        OUT:'Out Of Stock',
        LOW:'Low Stock',
    },
    header:{
        PRODUCT:'Product',
        CATEGORY:'Category',
        SOLD:'Sold',
        STOCK:'Stock',
        REVIEW:'Review'
    },
    TITLE:'Top Selling Products',
    DESC:'Best performing products by sales volume'
};
export const product_categorie_rating={
    TITLE1:'Product Categories',
    DESC1:'Revenue By Product categorie',
    TITLE2:'Products Ratings',
    DESC2:'Distribution Of Product Rating',
    category:{
        KURTI:'Kurti',
        ALINE:'Aline',
        ANARKALI:'Anarkali',
        DRESS:'Dress',
        TSHIRT:'T-Shirt',
        GOWN:'Gown',
        LENGHA:'lenghas',
        SAREE:'Saree',
        TOP:'Top'
    }
}

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

export const NAVLINKS={
    OVERVIEW:'Overview',
    SALES:'Sales',
    CUSTOMER:'Customer',
    PRODUCT:'Product',
    INVENTORY:'Inventory',
    INSIGHTS:'Insights'
}

export const inventory={
    title:'Low Stock Alert',
    desc:'Products that need to Restoking soon',
    title2:'Product by Category',
    desc2:'Inventory Distribution between category',
}

export const KEY_INSIGHTS={
    title:'Key Insights',
    desc:'Performance metrics and business highlights',
    title1:'Revenue Growth',
    desc1:'Revenue is up +17.6% compared to last period. Keep up the great work!',
    title2:'Customer Retention',
    desc2:'Customer retention rate is 50%. Focus on satisfaction to improve retention.'
}
export const INSIGHTS_SALES={
    title:'Sales velocity',
    desc:"Daily Sales Performance Trend"
}

export const INSIGHTS_GOAL={
    title:'Goal Progress',
    desc:'Monthly targets and achievements',
    t1:'order goal',
    t2:'customer goal',
    t3:'revenue goal'
}

export const ADD_CAT={
    t1:'Name',
    d1:'Kurti',
    t2:'Slug',
    d2:'kurti',
    des1:'URL-friendply identifier for the category',
    t3:'Sort order',
    des2:'lower number appear first',
    t4:'Description',
    d4:'Enter Your description',
    t5:'category Filter',
    d51:'No Fiters added yet',
    d52:'Add filters to help customers narrow down products in this category',
    t6:'Category Attributes',
    d61:'No Attributes added yet',
    d62:'Add attributes to define product characteristics in this category',
    t7:"Parent category",
    d71:'No parent',
    d72:'Align',
    d73:'Stright',
    d74:'Western Wear',
    d75:'Etnics Wear',
    d76:'Anarkali',
    t8:'Status',
    d81:'Active Status',
    d811:'Make this category visible to customers',
    d82:'Primary Category',
    d821:"Make as a main category",
    t9:'category Image',
    d9:'Drop images here or click to browse',
    t10:'Add New Filter',
    d101:'Filter Name',
    d1011:'eg., color, size',
    d102:'Filter Type',
    d103:'required Filter',
    t11:'Add New Attributes',
    d111:'Attributes Name',
    d1111:'e.g, material,weight',
    d112:'Attribute Type',
    d113:'Default Value(Optional)',
    d1131:"Enter default value",
    d114:'Required Attributes'
}

export const PRODUCT_MNG_CON = {

  // Product Names
  PRINTED_SHIRTS: 'Printed Shirts',
  COTTON_KURTA: 'Cotton Kurta',
  ANARKALI_DRESS: 'Anarkali Dress',
  TUNIC_TOP: 'Tunic Top',
  OLD_STOCK: 'Old Stock',

  // Categories
  WESTERN_WEAR: 'Western Wear',
  ETHNIC_WEAR: 'Ethnic Wear',
  ANARKALI: 'Anarkali',
  TOP_TUNIC: 'Top & Tunic',

  // Status
  ACTIVE: 'Active',
  INACTIVE: 'Inactive',

  // Stock Status
  IN_STOCK: 'In Stock',
  OUT_OF_STOCK: 'Out of Stock',

  // Prices
  PRICE_499: '₹499',
  PRICE_899: '₹899',
  PRICE_999: '₹999',
  PRICE_1299: '₹1299',
  PRICE_1599: '₹1599',
};

export const PRODUCT_FILTER_CONSTANTS = {
  // Category Filter
  CATEGORY_ALL: 'All Category',
  CATEGORY_WESTERN_WEAR: 'Western Wear',
  CATEGORY_ETHNIC_WEAR: 'Ethnic Wear',
  CATEGORY_ANARKALI: 'Anarkali',
  CATEGORY_TOP_TUNIC: 'Top & Tunic',

  // Stock Filter
  STOCK_ALL: 'All Stock Levels',
  STOCK_IN: 'In Stock',
  STOCK_LOW: 'Low Stock (<10)',
  STOCK_HIGH: 'High Stock (>100)',
  STOCK_OUT: 'Out of Stock',

  // Status Filter
  STATUS_ALL: 'All Status',
  STATUS_ACTIVE: 'Active',
  STATUS_INACTIVE: 'Inactive',

  // Common Labels
  LABEL_DATE: 'Date',
  LABEL_PRICE: 'Price',
  CURRENCY_INR: '₹',
} as const;