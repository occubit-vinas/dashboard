// app/dashboard/product_mng/Add_product/Add_product_layout.tsx
'use client';

import Top_area from '@/components/sidebar/top_area';
import Top_nav_bar from '../components/Top_nav_bar';
// import { Refresh } from '../components/top_buttons';

interface Props {
  children: React.ReactNode;
  topButtons?: React.ReactNode[]; // Only this changes
}

export default function Home_mng_layout({ children, topButtons }: Props) {
  const defaultButtons = topButtons ?? [
    
  ];

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen mt-10">
      {/* TITLE & BUTTONS — ONLY BUTTONS CHANGE */}
      <Top_area
        title="Homepage Management"
        desc="Manage Your stores's homepage content and layout"  // ← NEVER CHANGES
        components={defaultButtons}
      />

      {/* NAV BAR — NEVER CHANGES */}
      <Top_nav_bar
        bgColor="nav_bar_color"
        navLinks={[
          { path: '/dashboard/home_mng/heroslide/', title: 'Hero Slides' },
          { path: '/dashboard/home_mng/category', title: 'Trending Categories' },
          { path: '/dashboard/home_mng/product', title: 'Trending Products' },
          { path: '/dashboard/home_mng/testimonial', title: 'Testimonials' },
          ]}
      />

      {/* PAGE CONTENT */}
      <main className="">{children}</main>
    </div>
  );
}