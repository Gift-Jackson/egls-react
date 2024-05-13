import Title from "./Title";
import styles from "../styles/contacts.module.css";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
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
        toast.success("Form submitted successfully!");
        // Clear form fields after successful submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <main>
        <Title
          title="Contact Us"
          subtitle="For support or acquaintances, fill and submit the form"
        />

        <form className={styles.form} onSubmit={handleSubmit}>
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
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="5"
              placeholder="Your Query..."
            ></textarea>
          </div>
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
    </>
  );
};

export default ContactForm;
