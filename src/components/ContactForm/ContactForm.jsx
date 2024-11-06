import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createContactsThunk } from "../../store/contacts/thunk";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setContactName] = useState("");
  const [phone, setContactNumber] = useState("");

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setContactName(value);
        break;
      case "number":
        setContactNumber(value);
        break;

      default:
        throw new Error(`Unsupported name type ${name}`);
    }
  };

  const reset = () => {
    setContactName("");
    setContactNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duplicateContact = contacts.items.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateContact) {
      reset();
      return alert(`${name} is already in contacts`);
    }

    dispatch(createContactsThunk({ name, phone }));

    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor="number">Phone</label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        id="number"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
