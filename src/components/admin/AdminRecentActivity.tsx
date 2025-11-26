import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface AdminRecentActivityProps {
  activity: { type: string; detail: string }[];
}

export default function AdminRecentActivity({
  activity,
}: AdminRecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {activity.map((a, idx) => (
            <li key={idx} className="p-2 rounded bg-gray-100">
              <strong>{a.type}: </strong>
              <span>{a.detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
