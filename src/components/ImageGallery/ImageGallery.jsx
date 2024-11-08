import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ items, getRef }) => {
  return (
    <ul className={s.list} ref={getRef}>
      {items.map((el) => {
        return (
          <li key={el.id}>
            <ImageCard src={el.urls.small} alt={el.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
