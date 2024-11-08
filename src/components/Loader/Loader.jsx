import { CirclesWithBar } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <CirclesWithBar
      outerCircleColor="var(--accent-color)"
      innerCircleColor="var(--second-color)"
      barColor="var(--accent-color)"
      ariaLabel="circles-with-bar-loading"
      wrapperClass={s.icon}
    />
  );
};

export default Loader;
