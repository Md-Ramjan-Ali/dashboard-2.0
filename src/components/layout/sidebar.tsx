"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";
import { setSidebarOpen } from "@/lib/redux/slices/dashboardSlice";
import { SIDEBAR_ITEMS } from "./sidebar-items";



export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state) => state.dashboard.isSidebarOpen,
  );

  // Close sidebar on mobile after navigating to a route
  const handleNavClick = () => {
    if (window.innerWidth < 1024) {
      dispatch(setSidebarOpen(false));
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity lg:hidden",
          isSidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none",
        )}
        onClick={() => dispatch(setSidebarOpen(false))}
      />

      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-64 bg-[#FAF7F6] dark:bg-[#171414] border-r border-[#EFE5E3] dark:border-[#282121] transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 shrink-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Brand Header */}
          <div className="flex items-center px-6 justify-between border-b border-[#EFE5E3] dark:border-[#282121] h-20">
            <Link
              href="/dashboard"
              onClick={handleNavClick}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-10 h-10 shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="GlowRose Logo"
                  fill
                  // sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#2B201F] dark:text-[#F3EBE9]">
                GlowRose
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-3.5 py-6 overflow-y-auto custom-scrollbar">
            <div className="space-y-1.5">
              {SIDEBAR_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" &&
                    pathname.startsWith(item.href));

                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={cn(
                      "flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-200 group",
                      isActive
                        ? "bg-[#E6D4D1] dark:bg-[#382B2A] text-[#4A3735] dark:text-[#F5ECEB] font-semibold shadow-xs"
                        : "text-[#7B6A68] dark:text-[#A79896] hover:bg-[#F2E8E6] dark:hover:bg-[#241D1D] hover:text-[#3A2D2C] dark:hover:text-[#EDE3E2] font-medium",
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-105",
                        isActive
                          ? "text-[#4A3735] dark:text-[#F5ECEB]"
                          : "text-[#7B6A68] dark:text-[#A79896] group-hover:text-[#3A2D2C] dark:group-hover:text-[#EDE3E2]",
                      )}
                      strokeWidth={isActive ? 2.2 : 1.8}
                    />
                    <span className="text-[14.5px] tracking-tight">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* User Profile / Admin Footer */}
          <div className="p-3.5 border-t border-[#EFE5E3] dark:border-[#282121] mt-auto">
            <div className="flex items-center gap-3 p-2 rounded-2xl">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-[#E6D4D1] dark:bg-[#382B2A] text-[#4A3735] dark:text-[#F5ECEB] flex items-center justify-center font-bold text-xs shrink-0 select-none shadow-xs">
                AD
              </div>

              {/* User Details */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#2B201F] dark:text-[#F3EBE9] leading-none truncate">
                  Admin
                </p>
                <p className="text-xs text-[#8C7A78] dark:text-[#9F8F8D] mt-1 truncate">
                  admin@glowrose.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
