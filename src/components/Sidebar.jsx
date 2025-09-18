import React from "react";
import { LayoutDashboard, FileText, ListChecks, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/logo.png";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r shadow-sm flex flex-col">
      {/* Logo */}
      <div className="gap-1 p-2 border-b flex items-center">
         <Link to={"/"}>
            <img className="h-25 w-auto" src={logo} alt="Noter Logo" />
          </Link>
        <h1 className="text-3xl font-bold text-purple-600">Noter</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <a
          href="/dashboard"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
        >
          <LayoutDashboard className="h-5 w-5" /> Dashboard
        </a>
        <a
          href="/notes"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
        >
          <FileText className="h-5 w-5" /> Notes
        </a>
        <a
          href="/tasks"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
        >
          <ListChecks className="h-5 w-5" /> Tasks
        </a>
        <a
          href="#"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
        >
          <Settings className="h-5 w-5" /> Settings
        </a>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition">
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
