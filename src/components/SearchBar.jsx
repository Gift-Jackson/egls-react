import { useState } from "react";
import styles from "../styles/search.module.css";
import axios from "axios";
import Card from "./Card";
import NoResult from "./NoResult";

const SearchBar = () => {
  const [searchInp, setSearchInp] = useState("");
  const [results, setResults] = useState([]);

  const searchBook = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            searchInp +
            "&key=AIzaSyCTw5uPrpxqVdbBM23ygUr4_6lkXiP6fak" +
            "&maxResults=40"
        )
        .then((res) => {
          setResults(res.data.items);
        })
        .catch((error) => console.log(error));

      console.log(searchInp);
    }
  };

  return (
    <>
      <div className={styles.search}>
        <span className="material-symbols-outlined">search</span>
        <input
          value={searchInp}
          onChange={(e) => setSearchInp(e.target.value)}
          onKeyDown={searchBook}
          type="text"
          placeholder="Search by book title or author's name..."
        />
      </div>

      <div className="books-container">
        {results.length === 0 ? (
          <NoResult />
        ) : (
          <ul className={styles.wrapper}>
            <Card book={results} />
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBar;
