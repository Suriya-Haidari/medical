import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  role: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UserState = {
  role: null,
  status: "idle",
  error: null,
};

export const fetchUserRole = createAsyncThunk("user/fetchRole", async () => {
  const response = await fetch("/api/user-role"); // Adjust to your API endpoint
  if (!response.ok) {
    throw new Error("Failed to fetch role");
  }
  const data = await response.json();
  return data.role;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserRole.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserRole.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.role = action.payload;
      })
      .addCase(fetchUserRole.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserRole = (state: any) => state.user.role;

export default userSlice.reducer;
