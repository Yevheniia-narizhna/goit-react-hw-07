import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   //initialState=state//
//   items: [],
// };
const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const selectContact = (state) => state.contacts.items;
export const contactReducer = contactSlice.reducer;

export const { deleteContact, addContact } = contactSlice.actions;
