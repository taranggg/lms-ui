"use client";
import React from "react";
import { School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentLogin() {
  // No error state needed

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#eaf6ff] to-[#d7f3ff]">
      <div className="w-full max-w-md">
        <Card className="rounded-2xl shadow-lg p-8">
          <div className="flex flex-col items-center mb-6">
            <School size={48} color="#2563eb" strokeWidth={2} />
            <h1 className="text-2xl font-semibold mt-4 mb-1 text-[#222] text-center">
              Student Login
            </h1>
            <p className="text-zinc-500 text-center mb-4">
              Sign in to access your learning portal
            </p>
          </div>
          <div className="flex mb-6 gap-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-full font-medium"
            >
              Email & Password
            </Button>
            <Button variant="ghost" className="flex-1 rounded-full font-medium">
              Google
            </Button>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-zinc-700">
                Email
              </label>
              <Input
                type="email"
                placeholder="student@example.com"
                required
                className="rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-zinc-700">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-md"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#18181b] text-white hover:bg-[#3730a3] rounded-md mt-2"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-zinc-700 hover:underline text-sm font-medium"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link
              href="/"
              className="text-zinc-700 hover:underline text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
