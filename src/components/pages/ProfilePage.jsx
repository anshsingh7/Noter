import { useSelector } from "react-redux";

export default function ProfilePage() {
  const { user, loading } = useSelector((state) => state.user);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">Please login first.</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        {user.username && (
          <p>
            <strong>Username:</strong> {user.username}
          </p>
        )}
        {/* Add more fields if your backend returns */}
      </div>
    </div>
  );
}
