import React from "react";

export type TodoItem = {
  label: string;
  category: string;
  time: string;
  checked: boolean;
};

export default function TodoList({ items }: { items: TodoItem[] }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <div className="font-semibold mb-2">To Do List</div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.checked}
              readOnly
              className="accent-teal-500"
            />
            <span className="font-medium">{item.label}</span>
            <span className="text-xs text-gray-400">{item.category}</span>
            <span className="text-xs text-orange-500 font-semibold">
              {item.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
