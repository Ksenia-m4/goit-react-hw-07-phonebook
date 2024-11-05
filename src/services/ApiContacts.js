import axios from "axios";

axios.defaults.baseURL = "https://67289583270bd0b975565579.mockapi.io/";

const getAllContacts = async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data from API");
  }
};

const createContact = async (newContact) => {
  try {
    const response = await axios.post("/contacts", newContact);
    return response.data;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw new Error("Failed to create contact in API");
  }
};

const deleteContact = async (id) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw new Error("Failed to delete contact from API");
  }
};

export { getAllContacts, createContact, deleteContact };
