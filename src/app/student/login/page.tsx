"use client";
import React from "react";
import { School } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StudentLogin() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email && password) {
      window.localStorage.setItem("student_logged_in", "true");
      router.push("/student/dashboard");
    } else {
      setError("Please enter email and password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-[var(--color-login-gradient-from,#eaf6ff)] to-[var(--color-login-gradient-to,#d7f3ff)]">
      <div className="w-full max-w-md">
        <Card className="rounded-2xl shadow-lg p-8 bg-[var(--card)] text-[var(--card-foreground)]">
          <div className="flex flex-col items-center mb-6">
            <School
              size={48}
              color="var(--color-login-icon, #2563eb)"
              strokeWidth={2}
            />
            <h1 className="text-2xl font-semibold mt-4 mb-1 text-[var(--color-login-title,#222)] text-center">
              Student Login
            </h1>
            <p className="text-[var(--color-login-subtitle,#6b7280)] text-center mb-4">
              Sign in to access your learning portal
            </p>
          </div>
          <div className="flex mb-6 gap-2">
            <Button
              variant="secondary"
              className="flex-1 rounded-full font-medium bg-[var(--color-login-tab-bg,var(--secondary))] text-[var(--color-login-tab-text,var(--secondary-foreground))]"
            >
              Email & Password
            </Button>
            <Button
              variant="ghost"
              className="flex-1 rounded-full font-medium bg-[var(--color-login-tab-bg,var(--secondary))] text-[var(--color-login-tab-text,var(--secondary-foreground))]"
            >
              Google
            </Button>
          </div>
          {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--color-login-label,#374151)]">
                Email
              </label>
              <Input
                type="email"
                placeholder="student@example.com"
                required
                className="rounded-md bg-[var(--input)] text-[var(--foreground)]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--color-login-label,#374151)]">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                required
                className="rounded-md bg-[var(--input)] text-[var(--foreground)]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[var(--color-login-btn-bg,#18181b)] text-[var(--color-login-btn-text,#fff)] hover:bg-[var(--color-login-btn-hover,#3730a3)] rounded-md mt-2"
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-[var(--color-login-link,#374151)] hover:underline text-sm font-medium"
            >
              Forgot Password?
            </Link>
          </div>
          <div className="mt-2 text-center">
            <Link
              href="/"
              className="text-[var(--color-login-link,#374151)] hover:underline text-sm font-medium"
            >
              Back to Home
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
