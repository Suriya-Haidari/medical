import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Item {
  id: string;
  title: string;
  paragraph: string;
  option: string;
  image: string;
}

interface ItemsState {
  items: Item[];
  status: "idle" | "loading" | "failed";
}

const initialState: ItemsState = {
  items: [],
  status: "idle",
};

// Async thunk for fetching items
export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (option: string) => {
    const response = await axios.get(
      `http://localhost:3001/api/items/${option}` // Use option here
    );
    return response.data;
  }
);
const itemsSlice = createSlice({
  name: "items",
  initialState,

  reducers: {
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    addItem: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    updateItem: (state, action) => {
      const { id, data } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload.reverse();
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { deleteItem, addItem, updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
