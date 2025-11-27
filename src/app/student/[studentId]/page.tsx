"use client";
import React from "react";
import type { Batch } from "@/types/student/type";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import StudentDashboardComponent, {
  StudentDashboardProps,
} from "@/components/student/StudentDashboard";

export default function StudentDashboard() {
  const router = useRouter();
  const { studentId } = useParams();
  type Student = {
    studentId: string;
    name: string;
    email: string;
    batches: Batch[];
    notifications: string[];
    recentActivity: string[];
  };
  const [student, setStudent] = React.useState<Student | null>(null);
  const [batches, setBatches] = React.useState<Batch[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadStudentAndBatches() {
      if (typeof window !== "undefined") {
        const sid = Array.isArray(studentId) ? studentId[0] : studentId;
        if (!sid || !/^stu\d+$/.test(sid)) {
          router.push("/student/login");
          return;
        }
        const mod = await import(
          `@/mock/student/student${sid.replace("stu", "")}.json`
        );
        const studentData = mod.default;
        setStudent(studentData);

        // Load batch details dynamically
        const batchIds = studentData.batches;
        const batchPromises = batchIds.map((id: string) =>
          import(`@/mock/batch/${id}.json`).then((b) => b.default)
        );
        const batchDetails = await Promise.all(batchPromises);
        setBatches(batchDetails);
        setLoading(false);
      }
    }
    loadStudentAndBatches();
  }, [studentId, router]);

  // Demo data for new dashboard
  const courseCards: StudentDashboardProps["courseCards"] = [
    {
      name: "Basic: HTML and CSS",
      stats: { files: 24, assignments: 8, students: 99 },
      color: "#e6eafd",
    },
    {
      name: "Branding Design",
      stats: { files: 24, assignments: 8, students: 99 },
      color: "#f7f6e7",
    },
    {
      name: "Motion Design",
      stats: { files: 24, assignments: 8, students: 99 },
      color: "#eaf7e7",
    },
  ];
  const hoursSpent: StudentDashboardProps["hoursSpent"] = [
    { month: "Jan", study: 40, exams: 20 },
    { month: "Feb", study: 20, exams: 20 },
    { month: "Mar", study: 60, exams: 30 },
    { month: "Apr", study: 55, exams: 32 },
    { month: "May", study: 30, exams: 20 },
  ];
  const leaderboard: StudentDashboardProps["leaderboard"] = [
    {
      rank: 1,
      name: "Charlie Rawal",
      course: "53",
      hour: 250,
      point: 13450,
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      rank: 2,
      name: "Ariana Agarwal",
      course: "88",
      hour: 212,
      point: 10333,
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];
  const todoList: StudentDashboardProps["todoList"] = [
    {
      label: "Developing Restaurant Apps",
      category: "Programming",
      time: "08:00 AM",
      checked: false,
    },
    { label: "Integrate API", category: "", time: "", checked: false },
    { label: "Slicing Home Screen", category: "", time: "", checked: false },
    {
      label: "Research Objective User",
      category: "Product Design",
      time: "02:40 PM",
      checked: false,
    },
    {
      label: "Report Analysis P2P-Business",
      category: "Business",
      time: "04:50 PM",
      checked: true,
    },
  ];

  if (loading || !student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-lg text-[var(--muted-foreground)]">
          Loading...
        </span>
      </div>
    );
  }
  return (
    <StudentDashboardComponent
      student={{ name: student.name }}
      courseCards={courseCards}
      hoursSpent={hoursSpent}
      leaderboard={leaderboard}
      todoList={todoList}
    />
  );
}
