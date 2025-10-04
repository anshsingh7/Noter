export const fetchUserDataAPI = async (token) => {
  try {
    const res = await fetch("http://localhost:3000/v1/auth/currentUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
    });

    if (!res.ok) {
      const errMsg = await res.text();
      throw new Error(errMsg || "Failed to fetch user data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Auth Fetch Error:", error.message);
    throw error;
  }
};

export const loginUserDataAPI = async ({email, password}) => {
  try {
    const res = await fetch("http://localhost:3000/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });


      if (!res.ok) {
      const errMsg = await res.text();
      throw new Error(errMsg || "Login failed");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Auth Login Error:", error.message);
    throw error;
  }
};

// utils/authUtils.js

export async function loginUserWithFaceAPI({ email }) {
  const res = await fetch("http://localhost:3000/v1/auth/login-through-face", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Face login failed");
  }

  return res.json();
}


export const getAllUsersAPI = async ({role}) => {
  try {
    if (role === "user") return { users: [] };
    
    const res = await fetch(`http://localhost:3000/v1/auth/${role}/getAllUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    });


      if (!res.ok) {
      const errMsg = await res.text();
      throw new Error(errMsg || "No user found");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Users not Found:", error.message);
    throw error;
  }
};
