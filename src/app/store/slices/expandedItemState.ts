import { createSlice } from "@reduxjs/toolkit";

interface ExpandedItemState {
  expandedItemId: string | null;
}

const initialState: ExpandedItemState = {
  expandedItemId: null,
};

const expandedItemSlice = createSlice({
  name: "expandedItem",
  initialState,
  reducers: {
    setExpandedItemId: (state, action) => {
      state.expandedItemId = action.payload;
    },
  },
});

export const { setExpandedItemId } = expandedItemSlice.actions;
export default expandedItemSlice.reducer;
