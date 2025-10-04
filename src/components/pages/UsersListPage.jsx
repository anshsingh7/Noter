import { useEffect, useState } from "react";
import { useUser } from "../context/userAuth";

function UsersListPage() {
  const { user, allUsers, loading, error, getAllUsersData } = useUser();
  const [updatingUserId, setUpdatingUserId] = useState(null);

  useEffect(() => {
    if (user?.role && allUsers.length === 0) {
      getAllUsersData({ role: user.role });
    }
  }, [user?.role, allUsers.length, getAllUsersData]);

  const handleRoleChange = async (userId, newRole) => {
    try {
      setUpdatingUserId(userId);

      await fetch(`/api/users/${userId}/role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole }),
      });

      getAllUsersData({ role: user.role });
    } catch (err) {
      console.error("Error updating role:", err);
    } finally {
      setUpdatingUserId(null);
    }
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const getAvailableRoles = () => {
    if (user?.role === "admin") return ["user", "moderator", "admin"];
    if (user?.role === "moderator") return ["user", "moderator"];
    return [];
  };

  const shouldShowDropdown = (loggedInUserRole, targetUserRole) => {
    // Admin cannot change role of another Admin
    if (loggedInUserRole === "admin" && targetUserRole === "admin") return false;
    // Moderator cannot change role of another Moderator
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
              className="p-4 bg-white shadow-md border rounded-xl hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">
                {u.firstName} {u.lastName}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{u.email}</p>

              {user?.role === "admin" || user?.role === "moderator" ? (
                shouldShowDropdown(user?.role, u.role) ? (
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium">Role:</label>
                    <select
                      value={u.role}
                      disabled={updatingUserId === u._id}
                      onChange={(e) =>
                        handleRoleChange(u._id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-sm"
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
                ) : (
                  <p>
                    Role: <strong>{u.role}</strong>
                  </p>
                )
              ) : (
                <p>
                  Role: <strong>{u.role}</strong>
                </p>
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
//                 <div className="flex items-center space-x-2">
//                   <label className="text-sm font-medium">Role:</label>
//                   <select
//                     value={u.role}
//                     disabled={updatingUserId === u._id}
//                     onChange={(e) =>
//                       handleRoleChange(u._id, e.target.value)
//                     }
//                     className="border rounded px-2 py-1 text-sm"
//                   >
//                     {getAvailableRoles().map((role) => (
//                       <option key={role} value={role}>
//                         {role}
//                       </option>
//                     ))}
//                   </select>
//                   {updatingUserId === u._id && (
//                     <span className="text-xs text-blue-500">Updating...</span>
//                   )}
//                 </div>
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

