import Modal from "react-modal";

import { SlClose, SlHeart } from "react-icons/sl";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");

const ImageModal = ({
  onClose,
  isOpen,
  imageData: { modalImg, alt, likes },
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={s.overlay}
      className={s.modal}
      closeTimeoutMS={250}
      bodyOpenClassName={s.reactModal}
      contentLabel={alt}
    >
      <img src={modalImg} alt={alt} className={s.img} />
      {alt && <p className={s.description}>{alt}</p>}
      <button className={s.btn} onClick={onClose}>
        <SlClose className={s.icon} />
      </button>
      {!!likes && (
        <div className={s.likes}>
          <SlHeart className={s.heart} />
          <p className={s.amount}>{likes}</p>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
