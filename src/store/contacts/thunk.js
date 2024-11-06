import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../services/ApiContacts";

export const getContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createContactsThunk = createAsyncThunk(
  "contacts/addContact",
  async (newContact) => {
    try {
      return await addContact(newContact);
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      console.log(error);
    }
  }
);
