import Title from "./Title";
import styles from "../styles/feature.module.css";
import bookCover from "../assets/Starting new sounds.jpg";

const FeaturedBook = () => {
  return (
    <>
      <main>
        <Title title="Featured Book" subtitle="Special from EGLS" />

        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.img_wrap}>
              <img
                src={bookCover}
                alt="Special from EGLS -Starting Letter Sounds"
              />
              <div className={styles.circle}></div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <h3>
                <i className="fa-solid fa-play"></i> Starting Letter Sounds
              </h3>
              <p>
                We have put together the nursery rhymes, songs , pictures,
                tracing and coloring activities to help prepare the child&apos;s
                hearing, speaking and memory pathway for future language and
                literacy development. These directly brings about the sense of
                achievement and confidence in the learner.
              </p>
              <div className={styles.rating}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </div>
              <button className={styles.btn}>
                View Details &nbsp;{" "}
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FeaturedBook;
