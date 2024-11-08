import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (error) {
      toast.error("Sorry, search-bar can't be empty! Please, try again.", {
        className: s.error,
      });
      setError(false);
    }
  }, [error]);
  const onHandleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target.input;
    if (value.trim() === "") {
      setSearch("");
      setError(true);
      return;
    }
    onSubmit(value);
  };
  return (
    <header className={s.searchbar}>
      <form onSubmit={onHandleSubmit} className={s.searchform}>
        <input
          value={search}
          onChange={onHandleChange}
          name="input"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={`${s.button} ${s.icon}`} type="submit">
          <CiSearch />
        </button>
      </form>

      <Toaster
        containerStyle={{
          top: "10%",
          left: "60%",
        }}
        toastOptions={{
          error: {
            style: {
              background: "var(--second-color)",
              color: "white",
            },
          },
        }}
      />
    </header>
  );
};

export default SearchBar;
