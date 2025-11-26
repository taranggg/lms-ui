import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface AdminStatsProps {
  stats: {
    students: number;
    trainers: number;
    batches: number;
  };
}

export default function AdminStats({ stats }: AdminStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>System Overview</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-6 justify-between">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{stats.students}</span>
          <span className="text-sm text-gray-500">Students</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{stats.trainers}</span>
          <span className="text-sm text-gray-500">Trainers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{stats.batches}</span>
          <span className="text-sm text-gray-500">Batches</span>
        </div>
      </CardContent>
    </Card>
  );
}
