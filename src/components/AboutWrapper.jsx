import { Link } from "react-router-dom";
import Title from "./Title";
import styles from '../styles/about.module.css'

const AboutWrapper = () => {
  return (
    <>
      <main>
        <div>
          <div className={styles.content}>
            <Title
              title="About EGLS"
              subtitle="Everything about us and what we stand for..."
            />
            <div>
              <article>
                Exceeding Glory Learning System Ltd is an educational firm
                established in 2017 for sales of books and teacher training.
                Egls offers sales of quality foreign and local books that aid
                learning as specified in the British, American and Nigeria
                curriculum.
              </article>
              <article>
                Our training center is well equipped to deliver long and short
                courses on Montessori Education, Handwriting and design, Jolly
                Phonics, Classroom Management, School Administrative seminars.
                The Executive Director is an astute reader and a leader in
                different facets of life.
                          </article>
                          <Link to="/books">
                <button className={styles.btn}>
                  Start Reading &nbsp; <i className="fa-solid fa-arrow-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutWrapper;
