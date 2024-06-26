import styles from "../styles/feature.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {  motion } from "framer-motion";

const ViewFeatureBook = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
      .post("https://formsubmit.co/ajax/exceedinggloryls@gmail.com", {
        ...formData,
        bookTitle: "Starting Letter Sounds", // Hardcoded value for book title
      })
      .then((response) => {
        console.log(response);
        toast.success(`Form submitted successfully!`);
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        // Close the modal
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  const modalVars = {
    initial: {
      scale: 0,
      y: 20,
    },
    animate: {
      scale: 1,
      y: 0,
      transition:{
        delay:0.2,
      }
    },
    exit: {
      scale: 0,
      y: 10,
    },
    
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.overlay} onClick={closeModal}></div>
          <motion.div
            variants={modalVars}
            initial="initial"
            animate="animate"
          exit="exit"
          
            className={styles.box}
          >
            <div className={styles.header}>
              <h3>Inquiry Form</h3>
              <button className={styles.close_btn} onClick={closeModal}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div>
              <form onSubmit={handleSubmit} className={styles.form}>
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
                    value="Starting Letter Sounds"
                    type="text"
                    name="bookTitle"
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
                    value={formData.message}
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    placeholder="e.g I'm interested in this book, I would love to purchase it..."
                  ></textarea>
                </div>
                <button type="submit" className={styles.btn} disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </motion.div>
      </div>
    </>
  );
};

ViewFeatureBook.propTypes = {
  closeModal: PropTypes.func,
};

export default ViewFeatureBook;
