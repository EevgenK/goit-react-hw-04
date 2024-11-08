import s from "./ErrorMessage.module.css";

const ErrorMessage = ({ text }) => {
  return <p className={s.error}>{text}</p>;
};

export default ErrorMessage;
