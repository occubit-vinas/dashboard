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
}as const;

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
}as const;


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
}as const;

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
}as const;

// constants.js

export const overview_piechart = {
    title: "Order Status Distribution",
    stats: {
        CONFIRMED: "Confirmed Orders",
        PENDING: "Pending Orders",
        CANCELLED: "Cancelled Orders",
    },
}as const;

export const sales_piechart = {
    title: "Payment Method",
    stats: {
        COD: "cash on delivery",
        UPI: "UPI Online Payment",
        CHEQUE: "cheak",
    },
}as const;

// constants.js

export const overview_orders = {
    paymentStatus: {
        CONFIRMED: "Confirmed",
        PENDING: "Pending",
    }
}as const;

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
}as const;

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
}as const;

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
}as const;

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
}as const;
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
}as const;

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
}as const;

export const inventory={
    title:'Low Stock Alert',
    desc:'Products that need to Restoking soon',
    title2:'Product by Category',
    desc2:'Inventory Distribution between category',
}as const;

export const KEY_INSIGHTS={
    title:'Key Insights',
    desc:'Performance metrics and business highlights',
    title1:'Revenue Growth',
    desc1:'Revenue is up +17.6% compared to last period. Keep up the great work!',
    title2:'Customer Retention',
    desc2:'Customer retention rate is 50%. Focus on satisfaction to improve retention.'
}as const;
export const INSIGHTS_SALES={
    title:'Sales velocity',
    desc:"Daily Sales Performance Trend"
}as const;

export const INSIGHTS_GOAL={
    title:'Goal Progress',
    desc:'Monthly targets and achievements',
    t1:'order goal',
    t2:'customer goal',
    t3:'revenue goal'
} as const;

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
} as const;

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
} as const;

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

export const add_pro_var={
    gso:'Global Size Options',
    cn:'Color Name',
    ss:'Selected Size',
    cs:'Customise Size',
    adv:'Add Color Varient',
    mbob:"e.g., Midnight blue, Ocean blue, Sunset red",
    pi:'Product Image',
    dih:'Drop Images here or click to browse',
    as:"Available Sizes",
    s:'selected',
    sa:"Selected All",
    es:'Enter Size and press enter'
} as const;

export const add_pro_inve={
    sq:'Stock Quantity',
    lsa:'Low Stock Alert',
    bsq:"Base stock quantity for this product",
    ti:"Track Inventory",
    msl:'Monitor stock level form this product',
    ab:"Allow Backorder",
    acw:"Accept orders when out of stock",
    ss:'Stock Summary',
    bs:'Base Stock:',
    vs:"Varient Stock",
    ta:"Total Available"
}

export const add_pro_seo={
    st:"SEO Title",
    est:'Enter SEO Title',
    rc56:'Recommended: 50–60 characters',
    sd:'SEO Description',
    rc1516:"Recommended: 150–160 characters",
    esm:'Enter SEO meta description',
    sk:'SEO Keyword',
    sp:'Search Preview',
    ypt:"Your Product Title",
    ex:'example.com/products/product-name',
    pd:'Product description will appear here...',
    st:'SEO Tips',
    iyp:'Include your primary keyword in the title and description.',
    ktu:'Keep titles under 60 characters for optimal display.',
    wcd:'Write compelling descriptions that encourage clicks.',
    urk:'Use relevant keywords naturally throughout your content.'
}

export const add_pro_adv={
    pvt:'Public-Visible to everyone',
    pov:'Private-Only visible to admin',
    hnv:'Hidden-Not visible anywhere',
    pv:'Product Visibility',
    as:'Active Status',
    mtp:"Make this product available for purchase",
    fp:'featured product',
    stp:'show this product in featured sections',
    ps:'Product Summary',
    pn:'Product name',
    c:'Category',
    pr:'Price',
    sq:'Stock Quantity',
    v:'Varients',
    i:'Image',
    s:'Status',
    vi:'Visibility',
    vs:'Varient Summary',
    ti:'Technical Information',
    pi:'product ID',
    gr:'GST Rate',
    hc:'HSN Code',
    b:'Brand'
}

export const ORDER_MNG = {
    ORDER_STATUS: {
        ALL: 'All Status',
        PENDING: 'Pending',
        PROCESSING: 'Processing',
        SHIPPED: 'Shipped',
        DELIVERED: 'Delivered',
        CANCELED: 'Canceled',
        RETURNED: 'Returned',
        CONFIRMED: 'Confirmed',
        FAILED:'Failed',
        REFUNDED:'Refunded',
    },

    PAYMENT_STATUS: {
        ALL: 'All Payment Status',
        PAID: 'Paid',
        PENDING: 'Pending',
        FAILED: 'Failed',
        REFUNDED: 'Refunded',
        PARTIALLY_REFUNDED: 'Partially Refunded'
    },

    LABELS: {
        STATUS: 'Order Status',
        PAYMENT: 'Payment Status',
        DATE_RANGE: 'Date Range'
    },

    CURRENCY: '₹',
    UOS:'Update order Status',
    OS:'Order Status',
    TN:'Traking Number',
    ETN:'enter traking number',
    TITLE:'Orders Management',
    DESC:'Manage and track all your store orders',
} as const;

export const customer_mng = {
  STATUS: {
    ALL: "All",
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    VIP: "VIP",
    BANNED: "Banned",
    PROSPECT: "Prospect",
  },

  CITY: {
    ALL: "All Cities",
    MUMBAI: "Mumbai",
    DELHI: "Delhi",
    BENGALURU: "Bengaluru",
    CHENNAI: "Chennai",
    KOLKATA: "Kolkata",
  },

  LABELS: {
    CUSTOMER_STATUS: "Customer Status",
    CITY: "City",
    LAST_ORDER_DATE: "Last Order Date",
  },

  DATE_RANGE_DEFAULT: "Date Range",
  FILTER_LABEL: {
    STATUS: "Customer Status",
    CITY: "City",
    DATE_RANGE: "Last Order Date",
  },

  FILTER_DEFAULT: {
    STATUS: "All",
    CITY: "All Cities",
    DATE_RANGE: "Date Range",
  },
  CUSTOMER: {
    CUST_001: {
      NAME: "Anita Desai",
      EMAIL: "anita.desai@example.com",
      AVATAR: "/avatars/avatar1.png",
    },
    CUST_002: {
      NAME: "Ravi Kumar",
      EMAIL: "ravi.kumar@example.com",
      AVATAR: "/avatars/avatar2.png",
    },
    CUST_003: {
      NAME: "Meera Nair",
      EMAIL: "meera.nair@example.com",
      AVATAR: "/avatars/avatar3.png",
    },
    CUST_004: {
      NAME: "Sanjay Patel",
      EMAIL: "sanjay.patel@example.com",
      AVATAR: "/avatars/avatar4.png",
    },
    CUST_005: {
      NAME: "Priya Sharma",
      EMAIL: "priya.sharma@example.com",
      AVATAR: "/avatars/avatar5.png",
    },
    CUST_006: {
      NAME: "Amit Verma",
      EMAIL: "amit.verma@example.com",
      AVATAR: "/avatars/avatar6.png",
    },
    CUST_007: {
      NAME: "Neha Gupta",
      EMAIL: "neha.gupta@example.com",
      AVATAR: "/avatars/avatar7.png",
    },
    CUST_008: {
      NAME: "Vikram Singh",
      EMAIL: "vikram.singh@example.com",
      AVATAR: "/avatars/avatar8.png",
    },
    CUST_009: {
      NAME: "Kavya Reddy",
      EMAIL: "kavya.reddy@example.com",
      AVATAR: "/avatars/avatar9.png",
    },
    CUST_010: {
      NAME: "Rohan Mehta",
      EMAIL: "rohan.mehta@example.com",
      AVATAR: "/avatars/avatar10.png",
    },
    CUST_011: {
      NAME: "Sonia Kapoor",
      EMAIL: "sonia.kapoor@example.com",
      AVATAR: "/avatars/avatar11.png",
    },
    CUST_012: {
      NAME: "Arjun Malhotra",
      EMAIL: "arjun.malhotra@example.com",
      AVATAR: "/avatars/avatar12.png",
    },
  },
  NAME:'Name',
  EMAIL:'Email',
  ORDERS:'Orders',
  TOTAL_SPENT:'Total Spent',
  CITY_LB:'City',
  LO:"Last Order",
  STA:'Status',
  ACT:'Action',
};

export const coupon_mng={
    title:'Coupons & Discount',
    desc:'Create and manage discount codes for your store',
    cou:'Coupon',
    tnv:"Type & Value",
    usg:'Usage',
    vp:'Valid Period',
    dc:'Date Created',
    st:'Status',
    ac:'Action',
    aco:'All Coupon',
    ncf:'No Coupons found matching the filters.',
    STATUS: {
    ALL: "All",
    ACTIVE: "Active",
    INACTIVE: "Inactive",
    EXPIRED: "Expired",
  },

  TYPE: {
    ALL: "All",
    PERCENTAGE: "Percentage",
    FIXED_AMOUNT: "Fixed Amount",
    FREE_SHIPPING: "Free Shipping",
  },

  FILTER_LABEL: {
    STATUS: "All Status",
    TYPE: "All Type",
  },

  FILTER_DEFAULT: {
    STATUS: "All",
    TYPE: "All",
  },
  NEW:{
    cnc:'Create New Coupon',
    can:'Create a new discount coupon to offer to your customers.',
    cc:'Coupon code',
    ge:'Generate',
    des:'Description',
    off20:"20% off on all items - limited time offer",
    dt:'Discount Type',
    per:'Percentage(%)',
    ctm:"Cap the maximum discount for percentage-based coupons",
    moa:'Minimum Order Amount($)',
    mda:"Maximum Discount Amount",
    ul:"Usage Limit",
    sd:'Start Date',
    ed:'End Date',
    uu:'Unlimitde Usage',
    no:"Leave empty for no expiration",
    ac:"Active Coupon",
    cwb:'Coupon will be immediately available for use',
    pd:'percentage discount',
    fam:'Fixed amount discount',
    fs:"free-shipping",

  }
}

export const home_mng={
    title:"Homepage Management",
    desc:"Manage Your stores's homepage content and layout",
    h1:'Hero Slides',
    h2:'Trending Categories',
    h3:'Trending Products',
    h4:'Testimonials',
    pm:"Preview Mode",
    ahs:"Add Hero Slide",
    ed:'Edit',
    dtr:'Drag To Reorder',

    ehs:'Edit Hero Slide',
    sd:'Slide Details',
    app:'Appearnce',
    tt:'Title',
    bt:'Button Text',
    sb:'Subtitle',
    de:"description",
    lurl:'Link URL',
    do:'Display Order',
    laf:'Lower numbers appear first',
    can:'Cancel',
    us:"Update Slide",
    a:'Active',
    si:'Slide Image',
    dih:"Drop Image here or click to browse",
    ci:'Current Image',
    ch:'Change',
    btd:"Back to Details",
    us:'Update Slide',
    pm:'Preview Mode',
    atc:'Add Trending Category',
    ed:'Edit',
    edt:'Edit Trending Category',
    up:'Update Category',
    do:'Display Order',
    ct:'Category',

    c1:'Ethnic Wear',
    c2:'Anarkali',
    c3:'Western Wear',
    c4:'Align',
    c5:'Tunic',

    ap:'Add Product',
    etp:"Edit Trending Product",
    sp:'Select Product',
    capt:"Choose a product to feature in the trending section",
    rac:'Review and configure the selected product',
    up:'Update Product',
    aap:'Aline Ancer Printed Madhuri Kurtis',
    spo:'Search products,order...',
    ntf:'No testimonial found Add customers testimonials to build Trust.',
    ct:'Customer Testimonial',
    at:'Add Testimonial',
    cn:'Customer Name',
    tm:'Testimonial Message',
    cp:'Customer Photo',

}

export const store_stg={
    bi:'Basic Information',
    sn:'Store Name',
    d:'Description',
    sl:'Store Logo',
    dih:'Drop image here or click to browse',
    sb:'Store Banner',
    co:'Contact Information',
    ed:'Email Address',
    pn:'Phone Number',
    w:'Website',
    eyp:'Enter your phone number',
    eye:'Enter your email',
    sa:'Store Address',
    sta:'Street Address',
    eta:'enter street address',
    c:'city',
    ec:'Enter city',
    co:'Country',
    s:'State',
    gu:'Gujarat',
    pc:'Postal code',
    epc:'Enter postal code',
    sm:'Social Media',
    f:'facebook',
    fu:'Facebook URL',
    tw:'twitter',
    tu:'Twitter URL',
    i:'instagram',
    iu:'Instagram URL',
    l:'LinkedIn',
    lu:'LinkedIn URL',
    ci:'Contact Information',
    ea:'Email Address'
}

export const pay_stg={
    pm:'Payment Methods',
    s:'Stripe',
    acc:'Accept credit and debit cards',
    pp:'PayPal',
    pap:'PayPal payment',
    cod:'cash on delivery',
    pwr:'Pay when you receive',
    bt:'Bank Transfer',
    dbt:'Direct Bank Transfer',
    ts:'Text Settings',
    tr:'Text Rate',
    tip:'Tax Inclusive Price',
    cbt:'Configure Bank Transfer',
    ccon:'Configure cash on delivery',
    ef:'Extra fee',
    moa:'Maximum order amount',
    cp:'Configure Paypal',
    ci:'Client ID',
    cs:'Client Secret',
    sb:'Sandbox Mode',
    cst:'Configure Stripe',
    pk:'Publishable Key',
    sk:'Secreat key',
    am:'Add Method',
    sps:'save payment settings'
}

export const shi_stg={
    sz:'Shipping zone',
    nsz:'No shipping zone configured',
    sss:'Save shipping setting',
    m1:'Standard Shipping',
    m2:'Express shipping',
    m3:'Overnight Shipping',
    m4:'Free shipping',
    m5:'Local Pickup',
    asz:'Add shipping Zone',
    zn:'Zone name',
    sc:'Select Couontry',
    sr:'Shipping rate',
    sm:'Shipping method',
    c:'Cost',
    ed:'Estimated Days',
    az:'Add zone',
    c:'close',
    ed:'Enter days',
    ec:'Enter cost',
    ayfs:'Add your first shipping zone'

    
}

export const secu_stg={
    anc:'Authentication & Access',
    tfa:'Two-Factor Authentication',
    r2fa:' Require 2FA for admin accounts',
    sc:'Session Controls',
    sto:'Session Timeouts(minutes)',
    mla:'Max Login Attempts',
    lad:'Lockout Duration (minutes)',
    pp:'Password Policy',
    rul:'Require Uppercase Letters',
    rn:'Require Numbers',
    rll:'Require Lowercase Letters',
    rs:'Require Symbols',
    sf:'Security Features',
    ssl:'SSL Required',
    fhc:'Force HTTPS connections',
    sc:'Secure Cookies',
    usc:'Use Secure Cookie flag',
    cp:'CSRF Protection',
    pcra:"  Prevent cross-site request attacks",
    iw:'IP Whitelist',
    aia:'Allowed IP Address',
    eia:'Enter IP address (e.g. 192.168.1.1)',
    ai:'ADD IP',
    siio:'Shipping information is optional but recommended for accurate shipping calculations.',
    sss:'Save Security Settings',
    mpl:'Minimum password length',

}

// src/data/dashboard/constants/notification_stg.ts
export const notification_stg = {
  // Section Titles
  emailNotifications: 'Email notification',
  smsNotifications: 'SMS Notifications',
  pushNotifications: 'Push Notifications',
  emailConfig: 'Email Configuration',
  notificationPreferences: 'Notification Preferences',

  // Email Notifications
  newOrder: 'New Order',
  newOrderDesc: 'Get notified of new orders',
  customerReview: 'Customer Review',
  customerReviewDesc: 'Get alerts for new product reviews',
  refundRequest: 'Refund Request',
  refundRequestDesc: 'Customer refund requests',
  lowStock: 'Low Stock Alert',
  lowStockDesc: 'When inventory is running low',
  paymentReceived: 'Payment Received',
  paymentReceivedDesc: 'Successful payments',
  systemUpdates: 'System Updates',
  systemUpdatesDesc: 'Platform updates and maintenance alerts',

  // SMS Notifications (you had wrong labels before — fixed now)
  smsNewOrder: 'New Order',
  smsNewOrderDesc: 'SMS alerts for new orders',
  smsPayment: 'Payment Received',
  smsPaymentDesc: 'SMS on successful payments',
  smsRefund: 'Refund Request',
  smsRefundDesc: 'SMS for refund requests',

  // Push Notifications
  pushNewOrder: 'New Order',
  pushNewOrderDesc: 'Browser push notifications',
  inventoryAlerts: 'Inventory Alerts',
  inventoryAlertsDesc: 'Stock level warnings',
  customerMessage: 'Customer Message',
  customerMessageDesc: 'New customer inquiries',

  // Email Configuration Labels
  fromName: 'From Name',
  fromEmail: 'From Email',
  replyToEmail: 'Reply-To Email',
  smtpHost: 'SMTP Host',
  smtpPort: 'SMTP Port',
  encryption: 'Encryption',
  smtpUsername: 'SMTP Username',
  smtpPassword: 'SMTP Password',

  // Dropdown Options
  encryptionNone: 'None',
  encryptionTls: 'TLS',
  encryptionSsl: 'SSL',
  freqImmediate: 'Immediate',
  freqHourly: 'Hourly Digest',
  freqDaily: 'Daily Digest',

  // Notification Preferences
  notificationFrequency: 'Notification Frequency',
  enableQuietHours: 'Enable Quiet Hours',
  quietHoursDesc: 'Mute notifications during off-hours',

  // Buttons
  sendTestEmail: 'Send Test Email',
  saveSettings: 'Save Notification Settings',
} as const;


// src/data/dashboard/constants/seo_stg.ts
export const seo_stg = {
  // Section Titles
  metaTags: 'Meta Tags',
  structuredData: 'Structured Data (Schema.org)',
  generatedSchema: 'Generated Schema Preview',
  seoTools: 'SEO Tools & Resources',
  testingTools: 'Testing Tools',
  searchConsole: 'Search Console',

  // Meta Fields
  metaTitle: 'Meta Title',
  metaTitlePlaceholder: 'Your Store - Best Product online',
  metaTitleHint: 'Minimum 50-60 charecter required',
  metaKeywords: 'Meta keywords',
  metaKeywordsPlaceholder: 'Add keywords',
  metaDescription: 'Meta Description',
  metaDescPlaceholder: 'Discover amazing products...',
  metaDescHint: 'Recommended: 150–160 characters',

  // SEO Preview
  seoPreview: 'SEO Preview',
  defaultTitle: 'Your Store Title',
  defaultUrl: 'https://yourstore.com',
  defaultDesc: 'Your store description will appear here',

  // Structured Data
  orgSchema: 'Organization Schema',
  websiteSchema: 'Website Schema',
  orgName: 'Organization Name',
  orgNamePlaceholder: 'ABC',
  websiteName: 'Website Name',
  websiteNamePlaceholder: 'ABC',
  websiteDesc: 'Website Description',
  websiteDescPlaceholder: 'Discover amazing products...',
  websiteUrl: 'Website URL',
  websiteUrlPlaceholder: 'https://yourstore.com',
  logoUrl: 'Logo URL',
  logoUrlPlaceholder: 'https://yourstore.com/logo.png',
  language: 'Language',
  languagePlaceholder: 'en-US',

  // SEO Tools Links
  richResults: 'Google Rich Results Test',
  schemaValidator: 'Schema.org Validator',
  googleConsole: 'Google Search Console',
  bingTools: 'Bing Webmaster Tools',

  // Button
  saveBtn: 'Save SEO Settings',
} as const;