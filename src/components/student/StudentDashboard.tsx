import React from "react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import CourseCards from "@/components/dashboard/CourseCards";
import HoursSpentChart from "@/components/dashboard/HoursSpentChart";
import PerformanceGauge from "@/components/dashboard/PerformanceGauge";
import Leaderboard, {
  LeaderboardEntry,
} from "@/components/dashboard/Leaderboard";
import TodoList, { TodoItem } from "@/components/dashboard/TodoList";
import WeeklyCalendar from "@/components/ui/WeeklyCalendar";

export interface StudentDashboardProps {
  student: { name: string };
  courses: any[];
  hoursSpent: { month: string; study: number; exams: number }[];
  leaderboard: LeaderboardEntry[];
  todoList: TodoItem[];
}

function CenterSection({
  student,
  courses,
  hoursSpent,
  leaderboard,
  studentId,
}: Pick<
  StudentDashboardProps,
  "student" | "courses" | "hoursSpent" | "leaderboard"
> & { studentId: string }) {
  const [search, setSearch] = React.useState("");
  const filteredCourses = courses.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.trainer.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex-1 flex flex-col">
      <Header name={student.name} onSearch={setSearch} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 px-10 pb-10">
        <div className="xl:col-span-3 flex flex-col gap-8">
          <div className="overflow-x-auto scrollbar-hide">
            <CourseCards courses={filteredCourses} studentId={studentId} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <HoursSpentChart data={hoursSpent} />
            <PerformanceGauge points={8966} rank="5th in Leaderboard" />
          </div>
          {/* <Leaderboard entries={leaderboard} /> */}
        </div>
      </div>
    </div>
  );
}

function RightSection({
  student,
  todoList,
  calendarDate,
  setCalendarDate,
}: {
  student: StudentDashboardProps["student"];
  todoList: StudentDashboardProps["todoList"];
  calendarDate: Date;
  setCalendarDate: React.Dispatch<React.SetStateAction<Date>>;
}) {
  return (
    <div className="w-[370px] min-w-[320px] max-w-[400px] bg-transparent flex flex-col gap-8 overflow-y-auto h-screen pr-4">
      <div className="bg-white rounded-xl shadow p-6 mt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="font-semibold text-xl">Profile</div>
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <Pencil size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center mb-4">
          <div className="relative mb-2">
            <Image
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt={student.name}
              width={64}
              height={64}
              className="rounded-full relative z-10"
            />
          </div>
          <div className="font-semibold text-lg mt-2">{student.name}</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500">College Student</span>
            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs font-semibold">
              ✔
            </span>
          </div>
        </div>
        <div className="p-4 mb-4">
          <WeeklyCalendar
            selected={calendarDate}
            onSelect={setCalendarDate}
            className="rounded-xl"
          />
        </div>
        <hr className="my-6 border-gray-200" />
        <TodoList items={todoList} />
      </div>
    </div>
  );
}

export default function StudentDashboardComponent({
  student,
  courses,
  hoursSpent,
  leaderboard,
  todoList,
  studentId,
}: StudentDashboardProps & { studentId: string }) {
  const [calendarDate, setCalendarDate] = React.useState<Date>(new Date());

  return (
    <div className="flex bg-background min-h-screen">
      <Sidebar />
      <div className="flex flex-1">
        <CenterSection
          student={student}
          courses={courses}
          hoursSpent={hoursSpent}
          leaderboard={leaderboard}
          studentId={studentId}
        />
        <div className="w-px bg-gray-200 mx-2 h-screen" />
        <RightSection
          student={student}
          todoList={todoList}
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      </div>
    </div>
  );
}
