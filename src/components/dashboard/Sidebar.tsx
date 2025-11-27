import React from "react";
import {
  Home,
  FileText,
  BarChart,
  Inbox,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { label: "Overview", icon: <Home />, active: true },
  { label: "Assignment", icon: <FileText />, badge: 0 },
  { label: "Reports", icon: <BarChart />, badge: 12 },
  { label: "File Storage", icon: <FileText />, badge: 0 },
  { label: "Inbox", icon: <Inbox />, badge: 7 },
  { label: "Settings", icon: <Settings />, badge: 0 },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <aside
      className={`bg-white rounded-2xl shadow flex flex-col py-8 px-4 min-h-screen transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center gap-2 mb-10 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 to-orange-300 rounded-lg" />
          {!collapsed && (
            <span className="font-bold text-lg text-gray-800">Learninja</span>
          )}
          <span className="ml-1 text-xs text-orange-500">•</span>
        </div>
        <button
          className="ml-auto p-1 rounded hover:bg-gray-100"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item, idx) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-700 font-medium ${
              item.active ? "bg-gray-900 text-white" : "hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
            {item.badge && item.badge > 0 && !collapsed && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
