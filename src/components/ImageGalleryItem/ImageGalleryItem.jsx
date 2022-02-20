import React from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends React.Component {
  render() {
    const { id, webformatURL, largeImageURL, tags } = this.props;
    return (
      <li id={id} className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          data-img={largeImageURL}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
