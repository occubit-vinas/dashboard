// app/(topdashboard)/dashboard/layout.tsx
import type React from "react"
import "./global.css"
import { Inter } from 'next/font/google'

import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"

// ✅ Move this OUTSIDE the component
const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex bg-gray-50 flex-col">
        <Sidebar />
        <Topbar />
        <main className="ml-20 flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
