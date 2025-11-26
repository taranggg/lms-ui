import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ClassmateList from "@/components/student/ClassmateList";
import AttendanceHistory from "@/components/student/AttendanceHistory";
import BatchResources from "@/components/student/BatchResources";

export default function StudentBatchDetail() {
  // Dummy data for UI
  const batch = {
    name: "Batch A",
    schedule: "Mon, Wed, Fri - 5:00pm to 6:30pm",
    trainer: "Mr. Smith",
    classmates: ["Jane Doe", "John Doe", "Alice", "Bob"],
    attendance: [
      { date: "Nov 20, 2025", status: "Present" },
      { date: "Nov 22, 2025", status: "Absent" },
    ],
    resources: [
      { name: "Algebra Notes", link: "#" },
      { name: "Biology Slides", link: "#" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col gap-6">
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-2xl">{batch.name} Details</CardTitle>
          <div className="text-gray-500">Schedule: {batch.schedule}</div>
          <div className="text-gray-500">Trainer: {batch.trainer}</div>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <ClassmateList classmates={batch.classmates} />
          <AttendanceHistory attendance={batch.attendance} />
          <BatchResources resources={batch.resources} />
          <div className="flex justify-between mt-6">
            <Link href="/student/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
