import { createSlice } from "@reduxjs/toolkit";

interface EditState {
  item: any;
  title: string;
  paragraph: string;
  option: string;
  image: string | null; // Change File to string to store image URL
}

const initialState: EditState = {
  item: null,
  title: "",
  paragraph: "",
  option: "hospital",
  image: null,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setEditItem: (state, action) => {
      state.item = action.payload;
      state.title = action.payload?.title || "";
      state.paragraph = action.payload?.paragraph || "";
      state.option = action.payload?.option || "hospital";

      const image = action.payload?.image || state.image;
      if (image && typeof image === "string") {
        state.image = image;
      }
    },

    clearEditItem: (state) => {
      state.item = null;
      state.title = "";
      state.paragraph = "";
      state.option = "hospital";
      state.image = null;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setParagraph: (state, action) => {
      state.paragraph = action.payload;
    },
    setOption: (state, action) => {
      state.option = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  setEditItem,
  clearEditItem,
  setTitle,
  setParagraph,
  setOption,
  setImage,
} = editSlice.actions;
export default editSlice.reducer;
