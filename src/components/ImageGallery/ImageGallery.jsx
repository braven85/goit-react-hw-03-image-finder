import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends React.Component {
  render() {
    const { images, openModalWindow } = this.props;
    return (
      <ul className={styles.ImageGallery} onClick={openModalWindow}>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
