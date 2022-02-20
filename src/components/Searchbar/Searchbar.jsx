import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searchbar = ({ handleChange, handleSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
