import styles from "../styles/feature.module.css";
import PropTypes from "prop-types"


const ViewFeatureBook = ({closeModal}) => {
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.overlay}></div>
        <div className={styles.box}>
          <div className={styles.header}>
            <h3>Inquiry Form</h3>
            <button className={styles.close_btn} onClick={closeModal}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div>
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
                  value="Starting Letter Sounds"
                  type="text"
                  name="book-title"
                  id="bookTitleInput"
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
                  placeholder="e.g I'm interested in this book, I would love to purchase it..."
                ></textarea>
              </div>
              <button type="submit" className={styles.btn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

ViewFeatureBook.propTypes = {
    closeModal: PropTypes.string,
}

export default ViewFeatureBook;
