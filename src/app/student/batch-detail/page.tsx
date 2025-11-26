"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ClassmateList from "@/components/student/ClassmateList";
import AttendanceHistory from "@/components/student/AttendanceHistory";
import BatchResources from "@/components/student/BatchResources";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Calendar,
  FileText,
  PlayCircle,
  Users,
  BadgeCheck,
} from "lucide-react";

export default function StudentBatchDetail() {
  const router = useRouter();
  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.localStorage.getItem("student_logged_in")
    ) {
      router.push("/student/login");
    }
  }, [router]);
  // Dummy data for UI
  const batch = {
    name: "Web Development Bootcamp",
    code: "WDB-2025-01",
    status: "active",
    trainer: "Dr. Sarah Johnson",
    schedule: "Mon, Wed, Fri - 10:00 AM",
    duration: "2025-11-01 to 2026-02-28",
    totalSessions: 36,
    description: "Comprehensive full-stack web development course",
    classmates: ["Jane Doe", "John Doe", "Alice", "Bob"],
    attendance: [
      {
        date: "2025-11-24",
        topic: "Introduction to React Hooks",
        status: "Present",
      },
      {
        date: "2025-11-22",
        topic: "State Management Basics",
        status: "Present",
      },
    ],
    resources: [
      {
        name: "React Hooks Guide",
        type: "pdf",
        link: "#",
        uploaded: "2025-11-20",
        by: "Dr. Sarah Johnson",
      },
      {
        name: "State Management Video Tutorial",
        type: "video",
        link: "#",
        uploaded: "2025-11-21",
        by: "Dr. Sarah Johnson",
      },
    ],
    sessions: [
      {
        date: "2025-11-24",
        time: "10:00 AM",
        topic: "Introduction to React Hooks",
        recording: "N/A",
      },
      {
        date: "2025-11-22",
        time: "10:00 AM",
        topic: "State Management Basics",
        recording: "Available",
      },
    ],
    stats: {
      sessionsCompleted: 1,
      materialsAvailable: 2,
      attendancePercent: 100,
    },
    nextSession: null,
  };

  const [tab, setTab] = React.useState("overview");

  return (
    <div className="min-h-screen bg-[var(--background)] p-4 flex flex-col gap-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              {batch.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-[var(--color-badge-active,#18181b)] text-[var(--color-badge-active-text,#fff)] text-xs font-medium">
                {batch.status}
              </span>
            </h1>
            <div className="text-[var(--muted-foreground)] text-sm mt-1">
              {batch.code}
            </div>
          </div>
          <Button variant="ghost" className="text-[var(--muted-foreground)]">
            Logout
          </Button>
        </div>
        <Tabs value={tab} onValueChange={setTab} className="mt-4">
          <TabsList>
            <TabsTrigger value="overview">
              <Users className="mr-1" size={16} />
              Overview
            </TabsTrigger>
            <TabsTrigger value="materials">
              <FileText className="mr-1" size={16} />
              Materials
            </TabsTrigger>
            <TabsTrigger value="sessions">
              <Calendar className="mr-1" size={16} />
              Sessions
            </TabsTrigger>
            <TabsTrigger value="attendance">
              <BadgeCheck className="mr-1" size={16} />
              My Attendance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="col-span-2 bg-[var(--card)] text-[var(--card-foreground)]">
                <CardHeader>
                  <CardTitle>Batch Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} /> <span>Trainer:</span>{" "}
                      <span className="font-medium ml-1">{batch.trainer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} /> <span>Schedule:</span>{" "}
                      <span className="font-medium ml-1">{batch.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={16} /> <span>Duration:</span>{" "}
                      <span className="font-medium ml-1">{batch.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <PlayCircle size={16} /> <span>Total Sessions:</span>{" "}
                      <span className="font-medium ml-1">
                        {batch.totalSessions}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">Description</span>
                    <div className="text-[var(--muted-foreground)]">
                      {batch.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[var(--card)] text-[var(--card-foreground)]">
                <CardHeader>
                  <CardTitle>Next Session</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center h-full">
                  <Calendar
                    size={32}
                    className="mb-2 text-[var(--muted-foreground)]"
                  />
                  <div className="text-[var(--muted-foreground)]">
                    No upcoming sessions
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">
                  {batch.stats.sessionsCompleted}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Sessions Completed
                </div>
              </Card>
              <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">
                  {batch.stats.materialsAvailable}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Materials Available
                </div>
              </Card>
              <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                <div className="text-2xl font-bold">
                  {batch.stats.attendancePercent}%
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">
                  Attendance
                </div>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="materials">
            <div className="mt-6">
              <div className="text-[var(--muted-foreground)] mb-2">
                {batch.resources.length} materials available
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {batch.resources.map((res, idx) => (
                  <Card
                    key={idx}
                    className="bg-[var(--card)] text-[var(--card-foreground)]"
                  >
                    <CardHeader className="flex flex-row items-center gap-2">
                      {res.type === "pdf" ? (
                        <FileText className="text-red-500" size={20} />
                      ) : (
                        <PlayCircle className="text-purple-500" size={20} />
                      )}
                      <CardTitle className="text-base">{res.name}</CardTitle>
                      <span className="ml-auto px-2 py-1 rounded-full bg-[var(--color-badge-active,#18181b)] text-[var(--color-badge-active-text,#fff)] text-xs font-medium">
                        {res.type}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <div className="text-[var(--muted-foreground)] text-sm mb-2">
                        {res.description}
                      </div>
                      <div className="text-xs text-[var(--muted-foreground)] mb-2">
                        Uploaded {res.uploaded} by {res.by}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        <Button size="sm" variant="ghost">
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sessions">
            <div className="mt-6">
              <div className="text-[var(--muted-foreground)] mb-2">
                {batch.sessions.length} sessions scheduled
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--muted)]">
                      <th className="py-2 px-4 text-left font-medium">Date</th>
                      <th className="py-2 px-4 text-left font-medium">Time</th>
                      <th className="py-2 px-4 text-left font-medium">Topic</th>
                      <th className="py-2 px-4 text-left font-medium">
                        Recording
                      </th>
                      <th className="py-2 px-4 text-left font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {batch.sessions.map((session, idx) => (
                      <tr key={idx} className="border-b">
                        <td className="py-2 px-4">{session.date}</td>
                        <td className="py-2 px-4">{session.time}</td>
                        <td className="py-2 px-4 font-medium">
                          {session.topic}
                        </td>
                        <td className="py-2 px-4">
                          {session.recording === "Available" ? (
                            <span className="px-2 py-1 rounded-full bg-[var(--color-badge-active,#18181b)] text-[var(--color-badge-active-text,#fff)] text-xs font-medium">
                              Available
                            </span>
                          ) : (
                            <span className="text-[var(--muted-foreground)]">
                              N/A
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-4">
                          {session.recording === "Available" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex items-center gap-1"
                            >
                              <PlayCircle size={16} />
                              View Recording
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="attendance">
            <div className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">
                    {batch.stats.attendancePercent}%
                  </div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    Overall Attendance
                  </div>
                </Card>
                <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    Sessions Present
                  </div>
                </Card>
                <Card className="bg-[var(--card)] text-[var(--card-foreground)] flex flex-col items-center justify-center">
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-[var(--muted-foreground)]">
                    Sessions Absent
                  </div>
                </Card>
              </div>
              <Card className="bg-[var(--card)] text-[var(--card-foreground)]">
                <CardHeader>
                  <CardTitle>Attendance Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead>
                        <tr className="bg-[var(--muted)]">
                          <th className="py-2 px-4 text-left font-medium">
                            Date
                          </th>
                          <th className="py-2 px-4 text-left font-medium">
                            Topic
                          </th>
                          <th className="py-2 px-4 text-left font-medium">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {batch.attendance.map((record, idx) => (
                          <tr key={idx} className="border-b">
                            <td className="py-2 px-4">{record.date}</td>
                            <td className="py-2 px-4">{record.topic}</td>
                            <td className="py-2 px-4">
                              {record.status === "Present" ? (
                                <span className="px-2 py-1 rounded-full bg-[var(--color-badge-active,#18181b)] text-[var(--color-badge-active-text,#fff)] text-xs font-medium flex items-center gap-1">
                                  <BadgeCheck size={14} />
                                  Present
                                </span>
                              ) : (
                                <span className="px-2 py-1 rounded-full bg-[var(--muted)] text-[var(--muted-foreground)] text-xs font-medium">
                                  Not Marked
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button size="sm" variant="outline">
                      Export
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
