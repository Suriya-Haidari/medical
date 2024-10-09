import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openFaqIndices: [], // Initialize as an empty array
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    toggleFaq: (state, action) => {
      const index = action.payload;
      if (state.openFaqIndices.includes(index)) {
        // If already open, remove it
        state.openFaqIndices = state.openFaqIndices.filter((i) => i !== index);
      } else {
        // Else, add it
        state.openFaqIndices.push(index);
      }
    },
  },
});

export const { toggleFaq } = faqSlice.actions;
export default faqSlice.reducer;
