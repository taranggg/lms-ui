import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ClassmateListProps {
  classmates: string[];
}

export default function ClassmateList({ classmates }: ClassmateListProps) {
  return (
    <Card className="bg-[var(--card)] text-[var(--card-foreground)]">
      <CardHeader>
        <CardTitle>Classmates</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-4">
          {classmates.map((name, idx) => (
            <li key={idx} className="flex flex-col items-center">
              <Avatar>
                <AvatarFallback>{name.split(" ")[0][0]}</AvatarFallback>
              </Avatar>
              <span className="mt-2 text-sm text-[var(--muted-foreground)]">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
