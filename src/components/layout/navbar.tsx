"use client";

import React, { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, Sun, Moon } from "lucide-react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { toggleSidebar } from "@/lib/redux/slices/dashboardSlice";
import { useTheme } from "next-themes";
import { SIDEBAR_ITEMS } from "./sidebar-items";

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Dynamically resolve page title from SIDEBAR_ITEMS or path segment
  const currentSegment = pathname.split("/").filter(Boolean)[0] || "dashboard";
  const matchedItem = SIDEBAR_ITEMS.find(
    (item) => item.href === `/${currentSegment}` || item.href === pathname,
  );
  const pageTitle =
    matchedItem?.label ||
    currentSegment.charAt(0).toUpperCase() + currentSegment.slice(1);

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between bg-[#FAF7F6] dark:bg-[#171414] px-4 md:px-8 transition-colors">
      {/* Left Section — Mobile Menu Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Mobile menu toggle */}
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="rounded-lg p-2 text-[#7B6A68] hover:bg-[#EFE5E3]/60 dark:hover:bg-[#282121] transition-colors lg:hidden cursor-pointer"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Breadcrumb matching design */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm md:text-[15px]">
          <Link
            href="/dashboard"
            className="text-[#8C7A78] dark:text-[#A79896] hover:text-[#3A2D2C] dark:hover:text-[#EDE3E2] transition-colors font-normal"
          >
            Glowrose
          </Link>
          <span className="text-[#B5A3A1] dark:text-[#685A59] font-light">/</span>
          <span className="text-[#6D5A58] dark:text-[#EDE3E2] font-medium">
            {pageTitle}
          </span>
        </nav>
      </div>

      {/* Right Section — Notifications & Profile Avatar */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#8C7A78] hover:bg-[#EFE5E3]/60 dark:hover:bg-[#282121] hover:text-[#3A2D2C] dark:hover:text-[#EDE3E2] transition-colors cursor-pointer"
            title="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          </button>
        )}

        {/* Notification Bell with Badge */}
        <Link
          href="/notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#231B1B] border border-[#EFE5E3] dark:border-[#2F2424] shadow-xs hover:bg-[#FAF7F6] dark:hover:bg-[#2D2323] transition-all cursor-pointer group"
          aria-label="View notifications"
        >
          <Bell className="h-4.5 w-4.5 text-[#5A4644] dark:text-[#EDE3E2] group-hover:scale-105 transition-transform" />
          
          {/* Badge '2' */}
          <span className="absolute -top-1 -right-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#DFC1BD] text-[#42312F] text-[10.5px] font-bold ring-2 ring-[#FAF7F6] dark:ring-[#171414] shadow-xs">
            2
          </span>
        </Link>

        {/* Profile Avatar Button */}
        <Link
          href="/settings"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6D4D1] dark:bg-[#382B2A] text-[#4A3735] dark:text-[#F5ECEB] font-bold text-xs shadow-xs hover:opacity-90 transition-opacity select-none cursor-pointer"
          title="Admin profile"
        >
          AD
        </Link>
      </div>
    </header>
  );
}
