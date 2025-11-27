"use client";
import React from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Users, FileText, Calendar, BadgeCheck } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { CourseCard } from "@/components/dashboard/CourseCards";
import type { AttendanceRecord } from "@/types/student/type";
import BatchOverview from "@/components/student/BatchOverview";
import BatchStats from "@/components/student/BatchStats";
import BatchMaterials from "@/components/student/BatchMaterials";
import BatchSessions from "@/components/student/BatchSessions";
import BatchAttendance from "@/components/student/BatchAttendance";

function useStudentData(studentId: string) {
  const [student, setStudent] = React.useState<Record<string, unknown> | null>(
    null
  );
  React.useEffect(() => {
    async function fetchStudent() {
      if (!studentId) return;
      try {
        const mod = await import(
          `@/mock/student/student${studentId.replace("stu", "")}.json`
        );
        setStudent(mod.default);
      } catch {
        setStudent(null);
      }
    }
    fetchStudent();
  }, [studentId]);
  return student;
}

function useCourseData(courseId: string) {
  const [course, setCourse] = React.useState<CourseCard | null>(null);
  React.useEffect(() => {
    async function fetchCourse() {
      if (!courseId) return;
      try {
        const mod = await import(`@/mock/course/${courseId}.json`);
        setCourse(mod.default);
      } catch {
        setCourse(null);
      }
    }
    fetchCourse();
  }, [courseId]);
  return course;
}

export default function StudentCourseDetail() {
  const router = useRouter();
  const params = useParams();
  const studentId =
    (Array.isArray(params.studentId)
      ? params.studentId[0]
      : params.studentId) ?? "";
  const courseId =
    (Array.isArray(params.courseId) ? params.courseId[0] : params.courseId) ??
    "";
  const [tab, setTab] = React.useState("overview");
  const student = useStudentData(studentId);
  const course = useCourseData(courseId);

  React.useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !window.localStorage.getItem("student_logged_in")
    ) {
      router.push("/student/login");
    }
  }, [router]);

  if (!course || !student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-[var(--muted-foreground)]">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] p-4 flex flex-col gap-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2">
              {course.name}
              <span className="ml-2 px-2 py-1 rounded-full bg-[var(--color-badge-active,#18181b)] text-[var(--color-badge-active-text,#fff)] text-xs font-medium">
                {course.status}
              </span>
            </h1>
            <div className="text-[var(--muted-foreground)] text-sm mt-1">
              {course.code}
            </div>
          </div>
          <Button
            variant="ghost"
            className="text-[var(--muted-foreground)]"
            onClick={() => {
              window.localStorage.removeItem("student_logged_in");
              router.push("/student/login");
            }}
          >
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
            <BatchOverview batch={course} />
            <BatchStats stats={course.stats} />
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Classmates</h2>
              <ul className="space-y-2">
                {course.students.map((mate: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded bg-[var(--muted)]"
                  >
                    <Users
                      size={18}
                      className="text-[var(--muted-foreground)]"
                    />
                    <span className="font-medium text-[var(--card-foreground)]">
                      {mate}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="materials">
            <BatchMaterials resources={course.resources} />
          </TabsContent>
          <TabsContent value="sessions">
            <BatchSessions sessions={course.sessions} />
          </TabsContent>
          <TabsContent value="attendance">
            <BatchAttendance
              stats={{
                ...course.stats,
                sessionsPresent: course.attendance.filter(
                  (a: { status: string }) => a.status === "Present"
                ).length,
                sessionsAbsent: course.attendance.filter(
                  (a: { status: string }) => a.status === "Absent"
                ).length,
              }}
              attendance={course.attendance.map((a) => ({
                date: a.date,
                topic: a.topic,
                status:
                  a.status === "Present"
                    ? "Present"
                    : a.status === "Absent"
                    ? "Absent"
                    : "Not Marked",
              }))}
            />
          </TabsContent>
        </Tabs>
        <div className="mt-6">
          <Button
            variant="outline"
            onClick={() => router.push(`/student/${studentId}`)}
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
