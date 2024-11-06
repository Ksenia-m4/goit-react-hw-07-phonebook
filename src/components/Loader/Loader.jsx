import { Circles } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles height="80" width="80" ariaLabel="loading" color="#3f51b5" />
    </div>
  );
};
