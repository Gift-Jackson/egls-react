import styles from "../styles/form.module.css";
import PropTypes from "prop-types";
const BookForm = ({ title, authors, toggleForm }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>Inquiry Form</h3>
          <div>
            <button className={styles.close_btn} onClick={toggleForm}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.input_grp}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Full Name..."
              required
            />
          </div>
          <div className={styles.input_grp}>
            <label htmlFor="email">E-mail Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className={styles.input_grp}>
            <label htmlFor="book-title">Book Title:</label>
            <input
              value={title}
              type="text"
              name="book-title"
              id="bookTitleInput"
              required
              readOnly
            />
          </div>
          <div className={styles.input_grp}>
            <label htmlFor="book-author">Book Author:</label>
            <input
              value={authors}
              type="text"
              name="book-author"
              id="bookAuthorInput"
              required
              readOnly
            />
          </div>
          <div className={styles.input_grp}>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="e.g I'm interested in this book, may I inquire the Price..."
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>Send</button>
        </form>
      </div>
    </>
  );
};

BookForm.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.string,
  toggleForm: PropTypes.string,
};

export default BookForm;
