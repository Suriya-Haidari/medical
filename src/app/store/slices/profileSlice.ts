import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  message: "",
  status: "idle",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearProfileMessage: (state) => {
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("profile/update/pending", (state) => {
        state.status = "loading";
      })
      .addCase("profile/update/fulfilled", (state, action) => {
        state.status = "succeeded";
        state.message = "Profile updated successfully!";
      })
      .addCase("profile/update/rejected", (state) => {
        state.status = "failed";
        state.message = "Error updating profile";
      });
  },
});

export const { setFullName, setEmail, setMessage, clearProfileMessage } =
  profileSlice.actions;
export default profileSlice.reducer;
