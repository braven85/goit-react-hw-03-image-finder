import React from "react";
import styles from "./Modal.module.css";

class Modal extends React.Component {
  render() {
    const { largeImg, largeImgAlt, closeModal } = this.props;

    return (
      <div className={styles.Overlay} onClick={closeModal}>
        <div className={styles.Modal}>
          <img src={largeImg} alt={largeImgAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;
