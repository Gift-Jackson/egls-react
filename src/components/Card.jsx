import styles from "../styles/books.module.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ book }) => {
  const navigate = useNavigate();

  const previewBook = (bookDetails) => {
    navigate("/preview", { state: { book: bookDetails } });
  };

  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        if (thumbnail !== undefined) {
          return (
            <li key={index} className={styles.card}>
              <div className={styles.img}>
                <img src={thumbnail} alt="" />
              </div>
              <div className={styles.info}>
                <h4>{item.volumeInfo.title}</h4>
                <p>{item.volumeInfo.authors}</p>
              </div>
              <button className={styles.btn} onClick={() => previewBook(item)}>
                View Details &nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </li>
          );
        }
        return null;
      })}
    </>
  );
};

Card.propTypes = {
  book: PropTypes.array.isRequired,
};

export default Card;
