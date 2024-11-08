import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, modalImg, likes, openModal }) => {
  return (
    <div className={s.card} onClick={() => openModal({ modalImg, alt, likes })}>
      <img className={s.img} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
