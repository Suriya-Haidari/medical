import { createSlice } from "@reduxjs/toolkit";
import { carouselItems, thumbnails } from "../../home/data";

interface CarouselState {
  items: typeof carouselItems;
  thumbnails: typeof thumbnails;
  activeIndex: number;
}

const initialState: CarouselState = {
  items: carouselItems,
  thumbnails: thumbnails,
  activeIndex: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.activeIndex = (state.activeIndex + 1) % state.items.length;
    },
    prevSlide: (state) => {
      state.activeIndex =
        (state.activeIndex - 1 + state.items.length) % state.items.length;
    },
  },
});

export const { nextSlide, prevSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
