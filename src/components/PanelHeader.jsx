import { User } from "lucide-react";
import { useUser } from "./context/userAuth";
import { useNavigate } from "react-router-dom";

const PanelHeader = () => {
  const { user, clearUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center bg-white shadow px-6 py-4">
      <h1 className="text-xl font-semibold">Hi, {user?.firstName || "Guest"} 👋</h1>
      <div className="flex items-center gap-3">
        <User className="w-6 h-6 text-gray-500" />
        <div className="text-right">
          <p className="font-medium">{user?.name}</p>
          <p className="text-sm text-gray-500">{user?.role}</p>
        </div>
        <button
          onClick={handleLogout}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default PanelHeader;
