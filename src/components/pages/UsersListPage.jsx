import { useEffect, useState } from "react";
import { useUser } from "../context/userAuth";
import { MoreVertical } from "lucide-react";

function UsersListPage() {
  const { user, allUsers, loading, error, getAllUsersData } = useUser();
  const [updatingUserId, setUpdatingUserId] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [showRoleDropdownId, setShowRoleDropdownId] = useState(null);

  useEffect(() => {
    if (user?.role && allUsers.length === 0) {
      getAllUsersData({ role: user.role });
    }
  }, [user?.role, allUsers.length, getAllUsersData]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      setUpdatingUserId(userId);
      const res = await fetch(`http://localhost:3000/v1/auth/updateUserRole/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (!res.ok) throw new Error("Failed to update user role");

      await getAllUsersData({ role: user.role });
    } catch (err) {
      console.error("Error updating role:", err);
    } finally {
      setUpdatingUserId(null);
      setShowRoleDropdownId(null);
      setMenuOpenId(null);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const getAvailableRoles = () => {
    if (user?.role === "admin") return ["user", "moderator", "admin"];
    if (user?.role === "moderator") return ["user", "moderator"];
    return [];
  };

  const canChangeRole = (loggedInUserRole, targetUserRole) => {
    if (loggedInUserRole === "admin" && targetUserRole === "admin") return false;
    if (loggedInUserRole === "moderator" && targetUserRole === "moderator")
      return false;
    return true;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">All Users</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allUsers.length > 0 ? (
          allUsers.map((u) => (
            <div
              key={u._id}
              className="relative p-4 bg-white shadow-md border rounded-xl hover:shadow-lg transition duration-200"
            >
              {/* --- Three-dot menu --- */}
              {(user?.role === "admin" || user?.role === "moderator") &&
                canChangeRole(user?.role, u.role) && (
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() =>
                        setMenuOpenId(menuOpenId === u._id ? null : u._id)
                      }
                      className="text-gray-500 hover:text-gray-700 transition"
                    >
                      <MoreVertical size={18} />
                    </button>

                    {menuOpenId === u._id && (
                      <div
                        className="absolute right-0 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10 animate-fadeIn"
                      >
                        <button
                          className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                          onClick={() => {
                            setShowRoleDropdownId(u._id);
                            setMenuOpenId(null);
                          }}
                        >
                          Change Role
                        </button>
                      </div>
                    )}
                  </div>
                )}

              <h3 className="text-lg font-semibold">
                {u.firstName} {u.lastName}
              </h3>
              <p className="text-sm text-gray-500">{u.email}</p>

              <div className="mt-3">
                <p>
                  Role: <strong>{u.role}</strong>
                </p>
              </div>

              {/* --- Role dropdown shown when Change Role clicked --- */}
              {showRoleDropdownId === u._id && (
                <div className="mt-3 flex items-center space-x-2 animate-fadeIn">
                  <select
                    value={u.role}
                    disabled={updatingUserId === u._id}
                    onChange={(e) => handleRoleChange(u._id, e.target.value)}
                    className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-300"
                  >
                    {getAvailableRoles().map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  {updatingUserId === u._id && (
                    <span className="text-xs text-blue-500">Updating...</span>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default UsersListPage;


// import { useEffect, useState } from "react";
// import { useUser } from "../context/userAuth";

// function UsersListPage() {
//   const { user, allUsers, loading, error, getAllUsersData } = useUser();
//   const [updatingUserId, setUpdatingUserId] = useState(null);

//   useEffect(() => {
//     if (user?.role && allUsers.length === 0) {
//       getAllUsersData({ role: user.role });
//     }
//   }, [user?.role, allUsers.length, getAllUsersData]);

//   const handleRoleChange = async (userId, newRole) => {
//     try {
//       setUpdatingUserId(userId);

//       await fetch(`/api/users/${userId}/role`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ role: newRole }),
//       });

//       getAllUsersData({ role: user.role });
//     } catch (err) {
//       console.error("Error updating role:", err);
//     } finally {
//       setUpdatingUserId(null);
//     }
//   };

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   const getAvailableRoles = () => {
//     if (user?.role === "admin") return ["user", "moderator", "admin"];
//     if (user?.role === "moderator") return ["user", "moderator"];
//     return [];
//   };

//   const shouldShowDropdown = (loggedInUserRole, targetUserRole) => {
//     // Admin cannot change role of another Admin
//     if (loggedInUserRole === "admin" && targetUserRole === "admin") return false;
//     // Moderator cannot change role of another Moderator
//     if (loggedInUserRole === "moderator" && targetUserRole === "moderator")
//       return false;
//     return true;
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">All Users</h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {allUsers.length > 0 ? (
//           allUsers.map((u) => (
//             <div
//               key={u._id}
//               className="p-4 bg-white shadow-md border rounded-xl hover:shadow-lg transition"
//             >
//               <h3 className="text-lg font-semibold">
//                 {u.firstName} {u.lastName}
//               </h3>
//               <p className="text-sm text-gray-500 mb-3">{u.email}</p>

//               {user?.role === "admin" || user?.role === "moderator" ? (
//                 shouldShowDropdown(user?.role, u.role) ? (
//                   <div className="flex items-center space-x-2">
//                     <label className="text-sm font-medium">Role:</label>
//                     <select
//                       value={u.role}
//                       disabled={updatingUserId === u._id}
//                       onChange={(e) =>
//                         handleRoleChange(u._id, e.target.value)
//                       }
//                       className="border rounded px-2 py-1 text-sm"
//                     >
//                       {getAvailableRoles().map((role) => (
//                         <option key={role} value={role}>
//                           {role}
//                         </option>
//                       ))}
//                     </select>
//                     {updatingUserId === u._id && (
//                       <span className="text-xs text-blue-500">Updating...</span>
//                     )}
//                   </div>
//                 ) : (
//                   <p>
//                     Role: <strong>{u.role}</strong>
//                   </p>
//                 )
//               ) : (
//                 <p>
//                   Role: <strong>{u.role}</strong>
//                 </p>
//               )}
//             </div>
//           ))
//         ) : (
//           <p>No users found</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default UsersListPage;