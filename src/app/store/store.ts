import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemsSlice";
import editReducer from "./slices/editSlice";
import filterReducer from "./slices/filterSlice";
import faqReducer from "./slices/faqSlice"; // Adjust the path to your slice
import formReducer from "./slices/formSlice";
import authReducer from "./slices/authSlice";
import expandedItemState from "./slices/expandedItemState";
import userReducer from "./slices/userSlice";
import profileReducer from "./slices/profileSlice";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    edit: editReducer,
    filter: filterReducer,
    faq: faqReducer,
    auth: authReducer,
    form: formReducer,
    expandedItem: expandedItemState,
    user: userReducer,
    profile: profileReducer,
  },
});
