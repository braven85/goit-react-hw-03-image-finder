import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ changeHandler, submitHandler }) => {
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={submitHandler} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={changeHandler}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  changeHandler: PropTypes.func,
  submitHandler: PropTypes.func,
};
