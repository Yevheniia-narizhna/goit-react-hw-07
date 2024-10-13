import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";

// const initialState = {
//   //initialState=state//
//   items: [],
// };
const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          fetchContacts.pending,
          addContact.pending
        ),
        (state, action) => {
          state.loading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          fetchContacts.fulfilled,
          addContact.fulfilled
        ),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          fetchContacts.rejected,
          addContact.rejected
        ),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export const selectContact = (state) => state.contacts.items;
export const contactReducer = contactSlice.reducer;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

// export const { deleteContact, addContact, fetchContacts } =
//   contactSlice.actions;
