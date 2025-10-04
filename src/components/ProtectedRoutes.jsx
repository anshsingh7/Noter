// components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useSelector((state) => state.user);

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login"  />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" />; // or /unauthorized if you add that page
  }

  return children;
};

export default ProtectedRoute;
