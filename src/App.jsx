import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [search, setSearch] = useState("");

  return (
    <section>
      <SearchBar onSubmit={(el) => setSearch(el)} />
      <div className="container"></div>
    </section>
  );
}

export default App;
