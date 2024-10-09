import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  title: string;
  paragraph: string;
  option: string;
  image: string | null;
  error: string | null;
  success: string | null;
}

const initialState: FormState = {
  title: "",
  paragraph: "",
  option: "",
  image: null,
  error: null,
  success: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setParagraph(state, action: PayloadAction<string>) {
      state.paragraph = action.payload;
    },
    setOption(state, action: PayloadAction<string>) {
      state.option = action.payload;
    },
    setImage(state, action: PayloadAction<string | null>) {
      // Changed to string (base64)
      state.image = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setSuccess(state, action: PayloadAction<string | null>) {
      state.success = action.payload;
    },
    resetForm(state) {
      return initialState;
    },
  },
});

export const {
  setTitle,
  setParagraph,
  setOption,
  setImage,
  setError,
  setSuccess,
  resetForm,
} = formSlice.actions;
export default formSlice.reducer;
