import toast from "react-hot-toast";
import s from "./ErrorMessage.module.css";
import { useEffect } from "react";

const ErrorMessage = ({ text }) => {
  useEffect(() => {
    if (text) {
      toast.error(text);
    }
  }, []);
  return null;
};

export default ErrorMessage;
