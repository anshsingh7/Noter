import { useState, useRef, useEffect } from "react";
import { Search, User, Moon } from "lucide-react";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full h-16 bg-[#fefefe] border-b shadow-sm flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="relative w-1/3 bg-[#f4f4f6] rounded-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search notes, tasks, or anything..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <span className="text-gray-600 text-sm">Hi, Ansh 👋</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}/>

        {/* Dropdown Card */}
        {isOpen && (
          <div className="absolute right-0 top-12 w-56 bg-white rounded-lg shadow-lg border p-4 z-50">
            <div className="mb-3">
              <p className="font-semibold">Demo User</p>
              <p className="text-sm text-gray-500">demo@ainotes.app</p>
            </div>
            <div className="space-y-2">
              <button className="flex items-center w-full px-2 py-2 text-sm hover:bg-gray-100 rounded-md">
                <User className="h-4 w-4 mr-2" /> Profile
              </button>
              <button className="flex items-center w-full px-2 py-2 text-sm hover:bg-gray-100 rounded-md">
                <Moon className="h-4 w-4 mr-2" /> Dark Mode
              </button>
              <button className="w-full text-left px-2 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-md">
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;

// import { Search } from "lucide-react";

// const Topbar = () => {
//   return (
//     <header className="w-full h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      
//       {/* Search Bar */}
//       <div className="relative w-1/3">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
//         />
//       </div>

//       {/* User Profile */}
//       <div className="flex items-center gap-4">
//         <span className="text-gray-600 text-sm">Hi, Ansh 👋</span>
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="User Avatar"
//           className="w-10 h-10 rounded-full border"
//         />
//       </div>
//     </header>
//   );
// };

// export default Topbar;