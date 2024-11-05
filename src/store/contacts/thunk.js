import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../services/ApiContacts";

export const getContactsThunk = createAsyncThunk("contacts/fetchAll", () => {
  fetchContacts();
});

export const createContactsThunk = createAsyncThunk(
  "contacts/addContact",
  (newContact) => {
    addContact(newContact);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  (id) => {
    deleteContact(id);
  }
);

// Объяви следующие операции:
// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".
