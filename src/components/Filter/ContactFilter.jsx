import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../store/filter/filterSlice";
import css from "./ContactFilter.module.css";

const ContactFilter = () => {
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const onChangeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter">Find contacts by name</label>
      <input id="filter" type="text" value={filter} onChange={onChangeFilter} />
    </div>
  );
};

export default ContactFilter;
