import { Link } from "react-router-dom";
import styles from "../styles/hero.module.css";
import img1 from "../assets/masonary-1.jpg";
import img2 from "../assets/masonary-2.jpg";
import img3 from "../assets/masonary-3.jpg";

const Hero = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.content}>
            <h1>Exceeding Glory Learning System</h1>
            <p>
              Empower your learning journey with our extensive selection of
              books and educational resources spanning various categories.
            </p>
            <Link to="/books">
              <button className={styles.btn}>
                Start Reading &nbsp; <i className="fa-solid fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.masonry}>
            <div>
              <img src={img1} />
            </div>
            <div>
              <img src={img2} />
            </div>
            <div>
              <img src={img3} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
