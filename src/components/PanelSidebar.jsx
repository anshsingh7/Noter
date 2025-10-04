import { User, Users, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "./context/userAuth";

const PanelSidebar = () => {
     const { user } = useUser();

  const commonLinks = [
    { name: "Profile", path: "/profile", icon: <User /> },
  ];

  const adminLinks = [
    { name: "Users", path: "/profile/users", icon: <Users /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

 const moderatorLinks = [
    { name: "Users", path: "/profile/users", icon: <Users /> },
    { name: "Settings", path: "/settings", icon: <Settings /> },
  ];

  const userLinks = [
    // { name: "Profile", path: "/profile", icon: <Users /> },
  ];

  let links = [...commonLinks];

  if (user?.role === "admin") {
    links = [...commonLinks, ...adminLinks];
  } else if (user?.role === "moderator") {
    links = [...commonLinks, ...moderatorLinks];
  } else {
    links = [...commonLinks, ...userLinks];
  }

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg font-bold mb-6">NOTER AI</h2>
      <nav className="space-y-3">
        {links.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            className="flex items-center gap-3 p-2 rounded hover:bg-gray-700"
          >
            {link.icon}
            <span>{link.name}</span>
          </Link>
        ))}
      </nav>

    </aside>
  );
};

export default PanelSidebar;
