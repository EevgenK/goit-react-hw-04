import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ children, onClick }) => {
  return (
    <button className={s.btn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
