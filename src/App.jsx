import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import React from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import Modal from "./components/Modal/Modal";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    page: 1,
    images: [],
    isLoaded: false,
    searchInput: "",
    largeImg: "",
    largeImgAlt: "",
    isModalOpen: false,
    totalImages: 0,
    imagesDisplayed: 0,
  };

  fetchImages = (searchValue, page) => {
    try {
      fetch(
        `https://pixabay.com/api/?&key=24785169-ce0e5464f046c25feb9965069&q=${searchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((data) => data.json())
        .then((data) => {
          this.setState({ totalImages: data.total });
          this.state.page === 1
            ? this.setState({
                images: data.hits,
                page: page + 1,
                imagesDisplayed: data.hits.length,
              })
            : this.setState({
                images: [...this.state.images, ...data.hits],
                page: page + 1,
                imagesDisplayed: this.state.imagesDisplayed + data.hits.length,
              });
        })
        .finally(() => this.setState({ isLoaded: true }));
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.fetchImages(this.state.searchInput, this.state.page);
  }

  changeHandler = (e) => {
    const value = e.target.value;
    this.setState({ searchInput: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ page: 1 });
    this.fetchImages(this.state.searchInput, this.state.page);
  };

  loadMore = (e) => {
    e.preventDefault();
    this.fetchImages(this.state.searchInput, this.state.page);
  };

  openModalWindow = (e) => {
    if (e.target.nodeName !== "IMG") {
      return;
    }
    this.setState({
      largeImg: e.target.dataset.img,
      largeImgAlt: e.target.alt,
      isModalOpen: true,
    });
  };

  closeModalWithEsc = (e) => {
    if (e.code === "Escape") {
      this.setState({ isModalOpen: false });
    }
  };

  closeModal = (e) => {
    if (e.target.nodeName === "IMG") {
      return;
    }
    this.setState({ isModalOpen: false });
  };

  render() {
    window.addEventListener("keydown", this.closeModalWithEsc);

    return (
      <div className="App">
        <Searchbar
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />

        {this.state.isLoaded === true ? (
          <ImageGallery
            images={this.state.images}
            openModalWindow={this.openModalWindow}
          />
        ) : (
          <Oval color="blue" secondaryColor="white" height="100" width="100" />
        )}

        {this.state.imagesDisplayed === this.state.totalImages ? (
          <></>
        ) : (
          <Button loadMore={this.loadMore} />
        )}

        {this.state.isModalOpen === true ? (
          <Modal
            closeModal={this.closeModal}
            largeImg={this.state.largeImg}
            largeImgAlt={this.state.largeImgAlt}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;

App.propTypes = {
  page: PropTypes.number,
  images: PropTypes.array,
  isLoaded: PropTypes.bool,
  searchInput: PropTypes.string,
  largeImg: PropTypes.string,
  largeImgAlt: PropTypes.string,
  isModalOpen: PropTypes.bool,
  totalImages: PropTypes.number,
  imagesDisplayed: PropTypes.number,
};
