"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { href: "/", label: "Movies", icon: "🎬" },
  { href: "/lists", label: "Lists", icon: "📂" },
  { href: "/search", label: "Search", icon: "🔍" },
  { href: "/admin", label: "Admin", icon: "🛠️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="fixed top-0 left-0 h-screen bg-white text-blue-700 border-r border-gray-200 flex flex-col w-56 z-20 shadow-sm">
      <div className="flex items-center h-16 px-6 border-b border-gray-100 bg-gradient-to-r from-blue-500/10 to-white">
        <span className="font-bold text-lg text-blue-600 tracking-wider flex items-center">
          <span className="mr-2">🎥</span> Movie Organizer
        </span>
      </div>
      <nav className="flex-1 flex flex-col pt-6 gap-1">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={
              "group flex items-center px-6 py-2 mb-1 transition rounded-lg" +
              (pathname === link.href
                ? " bg-blue-100 text-blue-700 font-bold"
                : " hover:bg-blue-50 text-blue-600")
            }
            aria-current={pathname === link.href ? "page" : undefined}
          >
            <span className="mr-3 text-xl">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto mb-8 flex flex-col items-center gap-2 px-3">
        {/* Future: user/account section */}
        <div className="text-xs text-gray-400">v1.0 SPA</div>
      </div>
    </aside>
  );
}
