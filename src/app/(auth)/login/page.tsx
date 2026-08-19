"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast.success("Welcome back!");
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md px-6">
      {/* Logo & Brand */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6D4D1] dark:bg-[#382B2A] mb-5 shadow-sm">
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-[#4A3735] dark:text-[#F5ECEB]"
          >
            <path
              d="M12 8C15 6 20 7 22 10C24 13 22 17 19 18C16 19 15 22 16 25C16.5 26.5 18 28 17 30C16 32 13 32 12 30C10.5 27 12 24 13 22"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13C17.5 11.5 19 12 20 13.5C21 15 19.5 16.5 18 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M9 14C11 11 15 11 17 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="18" cy="14" r="1" fill="currentColor" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#2B201F] dark:text-[#F3EBE9] tracking-tight">
          Welcome back
        </h1>
        <p className="text-sm text-[#8C7A78] dark:text-[#9F8F8D] mt-1.5">
          Sign in to GlowRose Admin
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[#4A3735] dark:text-[#EDE3E2]"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@glowrose.com"
            autoComplete="email"
            className="w-full h-12 rounded-xl border border-[#EFE5E3] dark:border-[#2F2424] bg-white dark:bg-[#1E1717] px-4 text-sm text-[#2B201F] dark:text-[#F3EBE9] placeholder:text-[#B5A3A1] dark:placeholder:text-[#685A59] outline-none transition-all focus:border-[#C4A9A5] dark:focus:border-[#5A4442] focus:ring-2 focus:ring-[#E6D4D1]/50 dark:focus:ring-[#382B2A]/50"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-[#4A3735] dark:text-[#EDE3E2]"
            >
              Password
            </label>
            <Link
              href="#"
              className="text-xs text-[#8C7A78] dark:text-[#9F8F8D] hover:text-[#4A3735] dark:hover:text-[#EDE3E2] transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="w-full h-12 rounded-xl border border-[#EFE5E3] dark:border-[#2F2424] bg-white dark:bg-[#1E1717] px-4 pr-12 text-sm text-[#2B201F] dark:text-[#F3EBE9] placeholder:text-[#B5A3A1] dark:placeholder:text-[#685A59] outline-none transition-all focus:border-[#C4A9A5] dark:focus:border-[#5A4442] focus:ring-2 focus:ring-[#E6D4D1]/50 dark:focus:ring-[#382B2A]/50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#B5A3A1] dark:text-[#685A59] hover:text-[#4A3735] dark:hover:text-[#EDE3E2] transition-colors cursor-pointer"
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-4.5 h-4.5" />
              ) : (
                <Eye className="w-4.5 h-4.5" />
              )}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 rounded-xl bg-[#4A3735] dark:bg-[#E6D4D1] text-white dark:text-[#2B201F] font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-[#3A2D2C] dark:hover:bg-[#DFC1BD] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-sm"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white/30 dark:border-[#4A3735]/30 border-t-white dark:border-t-[#4A3735] rounded-full animate-spin" />
          ) : (
            <>
              Sign in
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <p className="text-center text-xs text-[#B5A3A1] dark:text-[#685A59] mt-8">
        © {new Date().getFullYear()} GlowRose. All rights reserved.
      </p>
    </div>
  );
}
