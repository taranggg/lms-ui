import React from "react";

export default function HoursSpentChart({
  data,
}: {
  data: { month: string; study: number; exams: number }[];
}) {
  // For demo, use a simple bar chart
  return (
    <div className="bg-white rounded-xl p-6 shadow flex-1">
      <div className="font-semibold mb-2">Hours Spent</div>
      <div className="text-sm text-gray-500 mb-4">Study vs Exams</div>
      <div className="flex items-end gap-3 h-40">
        {data.map((d) => (
          <div key={d.month} className="flex flex-col items-center">
            <div className="flex gap-1">
              <div
                className="bg-orange-400 w-6"
                style={{ height: `${d.study}px` }}
              />
              <div
                className="bg-gray-400 w-6"
                style={{ height: `${d.exams}px` }}
              />
            </div>
            <span className="text-xs mt-2">{d.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
