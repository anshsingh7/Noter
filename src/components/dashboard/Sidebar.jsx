import { useState } from "react";
import { LayoutDashboard, NotepadText, ListTodo, Settings, PanelLeftClose, PanelLeftOpen,} from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo3.png";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const linkClasses =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition";
  const inactiveClasses =
    "text-gray-700 hover:bg-purple-50 hover:text-purple-600";
  const activeClasses = "bg-purple-50 text-purple-600 font-medium";

  return (
    <aside
      className={`${ collapsed ? "w-20" : "w-64"} min-h-screen bg-white border-r shadow-sm flex flex-col transition-all duration-300`}>

      {/* Logo */}
      <div className="h-16 border-b flex items-center px-4 gap-3">
        <NavLink to={"/"} className="flex items-center gap-2">
          <img className="h-10 w-10" src={logo} alt="Logo" />
          {!collapsed && (<h1 className="text-xl font-bold text-purple-600">NOTER AI</h1>)}
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink to="/dashboard"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}>
              
          <LayoutDashboard className="h-5 w-5" />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/notes"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}>

          <NotepadText className="h-5 w-5" />
          {!collapsed && "Notes"}
        </NavLink>

        <NavLink to="/tasks"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}>

          <ListTodo className="h-5 w-5" />
          {!collapsed && "Tasks"}
        </NavLink>

        <NavLink to="/settings"
          className={({ isActive }) =>
            `${linkClasses} ${isActive ? activeClasses : inactiveClasses}`}>
              
          <Settings className="h-5 w-5" />
          {!collapsed && "Settings"}
        </NavLink>
      </nav>

      {/* Collapse Button */}
      <div className="p-4 border-t">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center gap-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition">
          {collapsed ? (
            <PanelLeftOpen className="h-5 w-5" />
          ) : (
            <PanelLeftClose className="h-5 w-5" />
          )}
          {!collapsed && (collapsed)}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;