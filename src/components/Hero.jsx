import { Link } from "react-router-dom";
import styles from "../styles/hero.module.css";
import img1 from "../assets/masonary-1.jpg";
import img2 from "../assets/masonary-2.jpg";
import img3 from "../assets/masonary-3.jpg";
import { useState, useEffect } from "react";
import PreLoader from "./PreLoader";

const Hero = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    const totalImages = 3; // Assuming there are 3 images
    if (imagesLoaded === totalImages) {
      setPageLoaded(true);
    }
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  return (
    <>
      {!pageLoaded && <PreLoader />}
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
                <img
                  loading="lazy"
                  src={img1}
                  alt="masonry-1"
                  onLoad={handleImageLoad}
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  src={img2}
                  alt="masonry-2"
                  onLoad={handleImageLoad}
                />
              </div>
              <div>
                <img
                  loading="lazy"
                  src={img3}
                  alt="masonry-3"
                  onLoad={handleImageLoad}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
