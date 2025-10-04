import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import {
  loginUserDataAPI,
  fetchUserDataAPI,
  getAllUsersAPI,
  loginUserWithFaceAPI,
} from "../../utils/authUtils";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // -----------------------------
  // Login User
  // -----------------------------
  const loginUserData = useCallback(
    async ({ email, password, useFaceAuth }) => {
      console.log("Logging in with:", { email, password, useFaceAuth });
      setLoading(true);
      setError(null);
      try {
        let data;

        if (useFaceAuth) {
          // 🔑 Face login
          data = await loginUserWithFaceAPI({ email });
        } else {
          // 🔑 Normal login
          data = await loginUserDataAPI({ email, password });
        }

        if (!data.token) throw new Error("Token missing from login response");

        // Save only token
        localStorage.setItem("token", data.token);

        // Fetch current user after login
        const userData = await fetchUserDataAPI(data.token);
        setUser(userData.user);

        return userData;
      } catch (err) {
        setError(err.message);
        setUser(null);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // -----------------------------
  // Fetch All Users
  // -----------------------------
  const getAllUsersData = useCallback(async ({ role }) => {
    setLoading(true);
    setError(null);
    try {
      if (role === "user") return setAllUsers([]);
      const data = await getAllUsersAPI({ role });
      setAllUsers(data.users || []);
      return data;
    } catch (err) {
      setError(err.message);
      setAllUsers([]);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // -----------------------------
  // Logout
  // -----------------------------
  const clearUser = useCallback(() => {
    setUser(null);
    setAllUsers([]);
    setError(null);
    localStorage.removeItem("token");
  }, []);

  // -----------------------------
  // Hydrate user on mount
  // -----------------------------
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setLoading(true);
    fetchUserDataAPI(token)
      .then((data) => setUser(data.user))
      .catch((err) => {
        console.error("Failed to fetch user with token:", err.message);
        setError("Session expired, please login again.");
        setUser(null);
        // do NOT clear token automatically
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        allUsers,
        loading,
        error,
        loginUserData,
        getAllUsersData,
        clearUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook
export function useUser() {
  return useContext(UserContext);
}
