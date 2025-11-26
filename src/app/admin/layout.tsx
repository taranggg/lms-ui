"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link
          href="/admin/dashboard"
          className={pathname === "/admin/dashboard" ? "font-bold" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/batches"
          className={pathname === "/admin/batches" ? "font-bold" : ""}
        >
          Batches
        </Link>
        <Link
          href="/admin/trainers"
          className={pathname === "/admin/trainers" ? "font-bold" : ""}
        >
          Trainers
        </Link>
        <Link
          href="/admin/students"
          className={pathname === "/admin/students" ? "font-bold" : ""}
        >
          Students
        </Link>
      </nav>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
