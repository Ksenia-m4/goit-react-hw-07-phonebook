import { createSlice } from "@reduxjs/toolkit";
import { contactsInitialState } from "./contactsInitialState";
import {
  createContactsThunk,
  deleteContactsThunk,
  getContactsThunk,
} from "./thunk";

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(createContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [action.payload, ...state.items];
        state.error = null;
      })
      .addCase(createContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(deleteContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((e) => e.id !== action.payload.id);
        state.error = null;
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact } = contactSlice.actions;
