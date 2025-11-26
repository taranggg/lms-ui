import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TrainerDashboard() {
  // Dummy data for UI
  const trainer = { name: "Mr. Smith" };
  const batches = [
    { name: "Batch A", schedule: "Mon, Wed, Fri - 5:00pm", id: 1 },
    { name: "Batch B", schedule: "Tue, Thu - 4:00pm", id: 2 },
  ];
  const sessions = [
    { date: "Nov 27, 2025", batch: "Batch A", topic: "Algebra" },
    { date: "Nov 28, 2025", batch: "Batch B", topic: "Biology" },
  ];
  const notifications = [
    { title: "New Assignment", content: "Review submitted assignments." },
    { title: "Holiday Notice", content: "No class on Dec 1st." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 flex flex-col gap-6">
      <Card className="max-w-2xl mx-auto w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome, {trainer.name}!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <section>
            <h2 className="font-semibold mb-2">Assigned Batches</h2>
            <ul className="space-y-2">
              {batches.map((batch) => (
                <li
                  key={batch.id}
                  className="flex justify-between items-center p-2 rounded bg-gray-100"
                >
                  <span>{batch.name}</span>
                  <span className="text-sm text-gray-400">
                    {batch.schedule}
                  </span>
                  <Link href={`/trainer/batch-detail?id=${batch.id}`}>
                    <Button size="sm" variant="outline">
                      Details
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-semibold mb-2">Upcoming Sessions</h2>
            <ul className="space-y-2">
              {sessions.map((session, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center p-2 rounded bg-gray-100"
                >
                  <span>
                    {session.topic} ({session.batch})
                  </span>
                  <span className="text-sm text-gray-400">{session.date}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-semibold mb-2">Notifications</h2>
            <ul className="space-y-2">
              {notifications.map((n, idx) => (
                <li
                  key={idx}
                  className="p-2 rounded bg-blue-50 border-l-4 border-blue-400"
                >
                  <strong>{n.title}: </strong>
                  <span>{n.content}</span>
                </li>
              ))}
            </ul>
          </section>
          <div className="flex flex-wrap gap-2 mt-6">
            <Link href="/trainer/batches">
              <Button variant="outline">Manage Batches</Button>
            </Link>
            <Link href="/trainer/attendance">
              <Button variant="outline">Attendance</Button>
            </Link>
            <Link href="/trainer/settings">
              <Button variant="outline">Settings</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
