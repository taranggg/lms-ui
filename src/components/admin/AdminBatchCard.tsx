import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AdminBatchCardProps {
  batch: {
    id: number;
    name: string;
    schedule: string;
    trainer: string;
    students: number;
  };
}

export default function AdminBatchCard({ batch }: AdminBatchCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{batch.name}</CardTitle>
        <div className="text-gray-500">Schedule: {batch.schedule}</div>
        <div className="text-gray-500">Trainer: {batch.trainer}</div>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <div className="text-sm">Students: {batch.students}</div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            Edit
          </Button>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
