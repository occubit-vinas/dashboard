'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  const topItems = Array.from({ length: 8 }, (_, i) => ({
    href: `/dashboard/section-${i + 1}`,
    icon: `/dashboard/sidebar/${i + 1}.png`,
    label: `Section ${i + 1}`,
  }))

  const bottomItems = [
    { href: '/dashboard/settings', icon: '/dashboard/sidebar/11.png', label: 'Settings' },
    { href: '/logout', icon: '/dashboard/sidebar/12.png', label: 'Logout' },
  ]

  const accent = '#7E30ED'

  return (
    <aside
      className="fixed top-0 left-0 h-screen w-20 flex flex-col justify-between items-center py-6 shadow-lg"
      style={{ backgroundColor: accent }}
    >
      {/* ===== TOP SECTION ===== */}
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
          <span style={{ color: accent, fontWeight: 700, fontSize: 20 }}>A</span>
        </div>

        {/* Menu */}
        <nav className="flex flex-col items-center gap-4 mt-4">
          {topItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              aria-label={item.label}
              className="group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg  hover:bg-white/20 transition-all duration-200 group-hover:scale-105">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="opacity-100 group-hover:opacity-100"
                  unoptimized
                />
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="flex flex-col items-center gap-4 mb-2">
        {bottomItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            aria-label={item.label}
            className="group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-lg transition-all duration-200 group-hover:scale-105">
              <Image
                src={item.icon}
                alt={item.label}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>

          </Link>
        ))}
      </div>
    </aside>
  )
}
