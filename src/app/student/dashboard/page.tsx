import React from "react";
import {
  School,
  LogOut,
  FileText,
  BookOpen,
  Users,
  CalendarDays,
  Clock,
  File,
  FileVideo,
  FileText as FileTextIcon,
  Link as LinkIcon,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function StudentDashboard() {
  // Dummy data for UI
  const student = { name: "John Doe", email: "john.doe@example.com" };
  const batches = [
    {
      id: "MDB-2825-01",
      name: "Web Development Bootcamp",
      trainer: "Dr. Sarah Johnson",
      schedule: "Mon, Wed, Fri - 10:00 AM",
      status: "active",
      nextSession: null,
    },
    {
      id: "DSF-2825-02",
      name: "Data Science Fundamentals",
      trainer: "Prof. Michael Chen",
      schedule: "Tue, Thu - 2:00 PM",
      status: "active",
      nextSession: {
        topic: "Data Visualization with Python",
        date: "2025-11-24",
        time: "2:00 PM",
      },
    },
    {
      id: "MAD-2825-03",
      name: "Mobile App Development",
      trainer: "Dr. Emily Rodriguez",
      schedule: "Mon, Wed - 3:00 PM",
      status: "active",
      nextSession: {
        topic: "Navigation in React Native",
        date: "2025-11-24",
        time: "3:00 PM",
      },
    },
  ];
  const todaysClasses = [
    {
      time: "10:00 AM",
      status: "ongoing",
      topic: "Introduction to React Hooks",
      batch: "Web Development Bootcamp",
      duration: "90 minutes",
      joinable: true,
    },
    {
      time: "2:00 PM",
      status: "upcoming",
      topic: "Data Visualization with Python",
      batch: "Data Science Fundamentals",
      duration: "120 minutes",
      joinable: false,
    },
    {
      time: "3:00 PM",
      status: "upcoming",
      topic: "Navigation in React Native",
      batch: "Mobile App Development",
      duration: "90 minutes",
      joinable: false,
    },
  ];
  const recentMaterials = [
    {
      name: "React Hooks Guide",
      batch: "Web Development Bootcamp",
      type: "pdf",
      date: "2025-11-20",
      icon: <FileTextIcon size={18} className="text-blue-600" />,
    },
    {
      name: "State Management Video Tutorial",
      batch: "Web Development Bootcamp",
      type: "video",
      date: "2025-11-21",
      icon: <FileVideo size={18} className="text-blue-600" />,
    },
    {
      name: "Python Data Analysis Notebook",
      batch: "Data Science Fundamentals",
      type: "document",
      date: "2025-11-18",
      icon: <FileTextIcon size={18} className="text-blue-600" />,
    },
    {
      name: "React Native Documentation",
      batch: "Mobile App Development",
      type: "link",
      date: "2025-11-15",
      icon: <LinkIcon size={18} className="text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#eaf6ff] to-[#d7f3ff]">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <School size={28} className="text-blue-600" />
          <div>
            <span className="font-semibold text-lg text-[#222]">
              LMS Student Portal
            </span>
            <div className="text-xs text-zinc-500">{student.email}</div>
          </div>
        </div>
        <Button variant="ghost" size="sm" className="text-zinc-600 flex gap-2">
          <LogOut size={18} /> Logout
        </Button>
      </header>
      <main className="px-8 py-8">
        <div className="mb-6">
          <Button
            variant="secondary"
            className="rounded-full px-6 py-2 font-semibold text-base"
          >
            <BookOpen size={18} className="mr-2" /> Dashboard
          </Button>
        </div>
        <h1 className="text-2xl font-bold mb-1">Dashboard</h1>
        <p className="text-zinc-500 mb-6">
          Welcome back! Here's what's happening today
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* My Batches */}
          {batches.map((batch, idx) => (
            <Card key={batch.id} className="rounded-xl p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-black text-white text-xs font-semibold">
                  {batch.status}
                </span>
                <span className="ml-auto text-xs text-zinc-400">
                  {batch.id}
                </span>
              </div>
              <div className="font-semibold text-lg mb-1">{batch.name}</div>
              <div className="text-sm text-zinc-500 mb-2">
                Trainer: {batch.trainer}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-2">
                <CalendarDays size={16} className="mr-1" /> {batch.schedule}
              </div>
              {batch.nextSession && (
                <div className="bg-blue-50 rounded p-2 text-xs mb-2">
                  <div className="text-blue-700 font-medium">Next Session</div>
                  <div>{batch.nextSession.topic}</div>
                  <div>
                    {batch.nextSession.date} at {batch.nextSession.time}
                  </div>
                </div>
              )}
              <Button className="w-full bg-black text-white mt-2">
                Open Batch
              </Button>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today's Classes */}
          <Card className="rounded-xl p-6">
            <div className="font-semibold mb-2">Today's Classes</div>
            <div className="text-sm text-zinc-500 mb-4">
              Your scheduled sessions for today
            </div>
            <ul className="space-y-3">
              {todaysClasses.map((cls, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded bg-zinc-50"
                >
                  <Clock size={16} className="text-zinc-400" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{cls.topic}</div>
                    <div className="text-xs text-zinc-500">
                      {cls.batch} &bull; {cls.duration}
                    </div>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded font-semibold ${
                      cls.status === "ongoing"
                        ? "bg-blue-600 text-white"
                        : "bg-zinc-200 text-zinc-600"
                    }`}
                  >
                    {cls.status}
                  </span>
                  {cls.joinable && (
                    <Button size="sm" className="ml-2 bg-black text-white">
                      Join Now
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </Card>
          {/* Recent Materials */}
          <Card className="rounded-xl p-6">
            <div className="font-semibold mb-2">Recent Materials</div>
            <div className="text-sm text-zinc-500 mb-4">
              Latest uploaded resources
            </div>
            <ul className="space-y-3">
              {recentMaterials.map((mat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded bg-zinc-50"
                >
                  {mat.icon}
                  <div className="flex-1">
                    <div className="font-medium text-sm">{mat.name}</div>
                    <div className="text-xs text-zinc-500">{mat.batch}</div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-200 text-zinc-600 font-semibold">
                    {mat.type}
                  </span>
                  <span className="text-xs text-zinc-400 ml-2">{mat.date}</span>
                  <Button variant="outline" size="sm" className="ml-2">
                    View
                  </Button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
