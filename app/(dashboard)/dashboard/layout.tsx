import type React from "react"
import "./global.css"
import Sidebar from "@/components/dashboard/sidebar"
import Topbar from '@/components/dashboard/topbar'
import Box from "@/components/dashboard/ui/box"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 flex-col">
        <Sidebar />
        <Topbar/>
        <main className="ml-20 flex-1 p-6">{children}</main>
      </body>
    </html>
  )
}
