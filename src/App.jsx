import { useEffect, useRef, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { getGallery } from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import smoothScroll from "./services/smoothScroll";
import ImageModal from "./components/ImageModal/ImageModal";

import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState({});
  const galleryRef = useRef(null);
  const prevSearchRef = useRef("");
  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImages = async () => {
      try {
        setIsLoading(true);
        let request = page;
        if (prevSearchRef.current !== search) {
          prevSearchRef.current = search;
          request = 1;
          setImages([]);
        }
        const { data, pages } = await getGallery(search, request);
        setImages((prevImages) => [...prevImages, ...data.results]);

        setTotalPages(pages);
      } catch (errors) {
        setError(errors.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [search, page]);
  const onOpenModal = (obj) => {
    setIsModalOpen(true);
    setModalImg(obj);
  };
  return (
    <section>
      <SearchBar onSubmit={(el) => setSearch(el)} />
      <div className="container">
        {error ? (
          <ErrorMessage text={error} />
        ) : (
          !!images.length && (
            <ImageGallery
              getRef={galleryRef}
              items={images}
              openModal={onOpenModal}
            />
          )
        )}
        {isLoading && <Loader />}
        {!images.length ||
          (totalPages > page && (
            <LoadMoreBtn
              onClick={() => {
                setPage((prevPage) => prevPage + 1);
                setTimeout(() => {
                  smoothScroll(galleryRef);
                }, 100);
              }}
            >
              Load more
            </LoadMoreBtn>
          ))}
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          imageData={modalImg}
        />
      </div>
    </section>
  );
}

export default App;
