import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: contactReducer,
  },
});
