import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserDataAPI, fetchUserDataAPI } from "../../utils/authUtils";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (token, thunkAPI) => {
    try {
      const data = await fetchUserDataAPI(token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUserData = createAsyncThunk(
  "user/loginUserData",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await loginUserDataAPI({email, password});
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  user: null,      
  loading: false,  
  error: null,     
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });

    builder
      .addCase(loginUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
