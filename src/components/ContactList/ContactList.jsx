import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactListItem from "../ContactListItem/ContactListItem";

import { getContactsThunk } from "../../store/contacts/thunk";

import css from "./ContactList.module.css";
import { selectContacts, selectFilter } from "../../store/contacts/selectors";

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts.length === 0 ? (
    <p>There are no contacts</p>
  ) : (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
