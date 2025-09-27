export const fetchUserDataAPI = async (token) => {
  try {
    const res = await fetch("http://localhost:3000/api/user/current", {
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
