import { useState } from "react";
import { useUser } from "../context/userAuth";
import { MoreVertical, User2, Mail, Shield } from "lucide-react";

function ProfileInfo() {
  const { user, loading } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  if (!user) return <p className="text-center mt-10 text-gray-500">Please login first.</p>;

  // Open modal with user data
  const handleEditClick = () => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/update/${user._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Profile updated successfully!");
        setIsModalOpen(false);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="relative bg-white/80 backdrop-blur-lg shadow-xl border border-gray-100 rounded-2xl p-6 w-full max-w-md transition-all hover:shadow-2xl">
        
        {/* Menu Icon */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={handleEditClick}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                ✏️ Edit Profile
              </button>
            </div>
          )}
        </div>

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-white flex items-center justify-center text-3xl font-bold shadow-md">
            {user.firstName[0]}
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-gray-800">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-sm text-gray-500 capitalize">{user.role}</p>
        </div>

        {/* Profile Info */}
        <div className="space-y-3 text-gray-700">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <User2 className="text-blue-500" size={18} />
            <span className="text-sm">
              <strong>Name:</strong> {user.firstName} {user.lastName}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <Mail className="text-blue-500" size={18} />
            <span className="text-sm">
              <strong>Email:</strong> {user.email}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
            <Shield className="text-blue-500" size={18} />
            <span className="text-sm">
              <strong>Role:</strong> {user.role}
            </span>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Edit Profile</h2>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileInfo;
