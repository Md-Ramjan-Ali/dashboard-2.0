import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF7F6] dark:bg-[#171414]">
      {children}
    </div>
  );
}
