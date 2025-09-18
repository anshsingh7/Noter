import React from "react";
import { Search } from "lucide-react";

const Topbar = () => {
  return (
    <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">Hi, Ansh 👋</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </header>
  );
};

export default Topbar;
