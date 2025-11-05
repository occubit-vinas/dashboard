'use client'

import React from "react"
import Top_area from "@/components/sidebar/top_area"
import Top_nav_bar from "../../components/Top_nav_bar"
import { Cancel, Create } from "../../components/top_buttons"

interface AddProductLayoutProps {
  children: React.ReactNode
  onCancel?: () => void
  onCreate?: () => void
}

export default function Add_product_layout({ children, onCancel, onCreate }: AddProductLayoutProps) {
  // Default fallback handlers if not provided
   const handleCancel = () => {
    const event = new CustomEvent("addProductCancel")
    window.dispatchEvent(event)
  }

  const handleCreate = () => {
    const event = new CustomEvent("addProductCreate")
    window.dispatchEvent(event)
  }

  return (
    <div className="flex bg-gray-50 flex-col mt-10">
      <Top_area
        title="Add product"
        components={[
          <Cancel key="1" onClick={handleCancel} />,
          <Create key="2" onClick={handleCreate} />
        ]}
      />

      <Top_nav_bar
        bgColor="nav_bar_color"
        navLinks={[
          { path: '/dashboard/product_mng/Add_product/basic', title: 'Basic' },
          { path: '/dashboard/product_mng/Add_product/varient', title: 'Varients' },
          { path: '/dashboard/product_mng/Add_product/pricing', title: 'Pricing' },
          { path: '/dashboard/product_mng/Add_product/inventory', title: 'Inventory' },
          { path: '/dashboard/product_mng/Add_product/seo', title: 'SEO' },
          { path: '/dashboard/product_mng/Add_product/advanced', title: 'Advanced' },
        ]}
      />

      <main>{children}</main>
    </div>
  )
}
