import React from "react";
import { Users, FileText, Calendar } from "lucide-react";

export type CourseCard = {
  name: string;
  stats: { files: number; assignments: number; students: number };
  color: string;
};

export default function CourseCards({ courses }: { courses: CourseCard[] }) {
  return (
    <div className="flex gap-6 mb-8">
      {courses.map((course, idx) => (
        <div
          key={course.name}
          className={`rounded-xl p-6 flex flex-col gap-2 shadow bg-[${course.color}] min-w-[220px]`}
          style={{ background: course.color }}
        >
          <div className="font-semibold text-lg mb-2">{course.name}</div>
          <div className="flex items-center gap-4 text-xs text-gray-700">
            <FileText size={16} /> {course.stats.files}
            <Calendar size={16} /> {course.stats.assignments}
            <Users size={16} /> {course.stats.students}
          </div>
        </div>
      ))}
    </div>
  );
}
