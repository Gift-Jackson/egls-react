import styles from "../styles/books.module.css";
// import img from "../assets/book-sample.jpg";
import PropTypes from "prop-types";

const Card = ({ book }) => {
  console.log(book);

  return (
    <>
          {book.map((item, index) => {
            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
              if (thumbnail !== undefined) {
                return (
                    <>
                      <li key={index} className={styles.card}>
                        <div className={styles.img}>
                          <img src={thumbnail} alt="" />
                        </div>
                        <div className={styles.info}>
                                <h4>{item.volumeInfo.title}</h4>
                                <p>{item.volumeInfo.authors}</p>
                        </div> 
                        <button className={styles.btn}>
                          View Details &nbsp;{" "}
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                      </li>
                    </>
                  )
            }
        
      })}
    </>
  );
};

Card.propTypes = {
  book: PropTypes.string,
};

export default Card;
