import styles from "../styles/form.module.css";
import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import PreLoader from "./PreLoader";

const BookForm = ({ title, authors, toggleForm }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://formsubmit.co/ajax/giftjacksun@gmail.com", {
        ...formData,
        bookTitle: title,
        bookAuthor: authors,
      })
      .then((response) => {
        console.log(response);
        toast.success("Form Submitted Successfully!");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("An Error Ocureed!", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
     
      <div className={styles.container}>
        {loading && <PreLoader />}
        <div className={styles.header}>
          <h3>Inquiry Form</h3>
          <div>
            <button className={styles.close_btn} onClick={toggleForm}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="Book Inquiry" />

          <div className={styles.input_grp}>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className={styles.input_grp}>
            <label htmlFor="book-title">Book Title:</label>
            <input
              value={title}
              type="text"
              name="bookTitle"
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
              name="bookAuthor"
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
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g I'm interested in this book, may I inquire the Price..."
            ></textarea>
          </div>
          <button type="submit" className={styles.btn}>
          {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

BookForm.propTypes = {
  title: PropTypes.string,
  authors: PropTypes.string,
  toggleForm: PropTypes.func,
};

export default BookForm;
