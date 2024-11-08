import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, getRef, openModal }) => {
  return (
    <ul className={s.list} ref={getRef}>
      {items.map((el) => {
        return (
          <li key={el.id}>
            <ImageCard
              openModal={openModal}
              src={el.urls.small}
              modalImg={el.urls.regular}
              alt={el.alt_description}
              likes={el.likes}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
