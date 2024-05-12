import { useLocation } from "react-router-dom";
import styles from "../styles/preview.module.css";
import BookForm from "./BookForm";
import { useState } from "react";

const PreviewWrap = () => {
  const [showForm, setShowForm] = useState(false);
  const location = useLocation();
  const { book } = location.state || { book: null };
  let thumbnail =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <main>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={thumbnail} height={300} alt="" />
        </div>

        {showForm ? (
          <BookForm
            authors={book.volumeInfo.authors}
            title={book.volumeInfo.title}
            toggleForm={toggleForm}
          />
        ) : (
          <div>
            <div>
              <div>
                <h1 className={styles.title}>{book.volumeInfo.title}</h1>
                <p className={styles.category}>
                  {book.volumeInfo.category
                    ? book.volumeInfo.category
                    : "Not categorized..."}
                </p>
                <p className={styles.author}>
                  {book.volumeInfo.authors
                    ? book.volumeInfo.authors
                    : "Author unknown..."}
                </p>
                <p>
                  Publishers:{" "}
                  <span className={styles.publisher}>
                    {" "}
                    {book.volumeInfo.publisher
                      ? book.volumeInfo.publisher
                      : "Unknown publisher"}
                  </span>
                </p>
                <small>
                  <i className="far fa-calendar-alt"></i>&nbsp;
                  <span className={styles.date}>
                    {book.volumeInfo.publishedDate
                      ? book.volumeInfo.publishedDate
                      : "Published date unknown.."}
                  </span>
                </small>
              </div>
              <div className={styles.des_wrapper}>
                <p>
                  <b>Description:</b>
                </p>
                <article className={styles.description}>
                  {book.volumeInfo.description
                    ? book.volumeInfo.description
                    : "No description availble..."}
                </article>
              </div>
              <button
                className={styles.btn}
                onClick={toggleForm}
              >
                <span>I&apos;m Interested</span>
                <span className="material-symbols-outlined">touch_app</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PreviewWrap;
