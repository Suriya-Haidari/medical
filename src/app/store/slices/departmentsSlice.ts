import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Department {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface DepartmentsState {
  searchValue: string;
  suggestions: string[];
  departments: Department[];
}

const initialState: DepartmentsState = {
  searchValue: "",
  suggestions: [],
  departments: [
    {
      id: 1,
      image: "/image.jpg",
      title: "Emergency Room",
      description: "24/7 emergency care.",
    },
    {
      id: 2,
      image: "/image.jpg",
      title: "Emergency ",
      description: "24/7 emergency care.",
    },
    {
      id: 3,
      image: "/image.jpg",
      title: "Emergency Room",
      description: "24/7 emergency care.",
    },
    {
      id: 4,
      image: "/image.jpg",
      title: " Room",
      description: "24/7 emergency care.",
    },
    {
      id: 5,
      image: "/image.jpg",
      title: "swsw Room",
      description: "24/7 emergency care.",
    },
  ],
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSuggestions(state, action: PayloadAction<string[]>) {
      state.suggestions = action.payload;
    },
  },
});

export const { setSearchValue, setSuggestions } = departmentsSlice.actions;

export default departmentsSlice.reducer;
