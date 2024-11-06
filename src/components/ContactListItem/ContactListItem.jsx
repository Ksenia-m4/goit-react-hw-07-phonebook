import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContactsThunk } from "../../store/contacts/thunk";
// import { deleteContact } from "../../store/contacts/contactsSlice";

import css from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContactsThunk(contactId));
  };

  return (
    <li className={css.item}>
      {name}: {phone}
      <button onClick={() => handleDeleteContact(id)}>Delete</button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
