import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./Title";
import { testimonials } from "../constants/content";
import styles from "../styles/testimonials.module.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <Title
        title="Testimonials"
        subtitle="Here what our recent clients say about us..."
      />
      <div className="slider-container">
        <Slider {...settings}>
          {testimonials.map((testimony, index) => (
            <div key={index} className={styles.wrap}>
              <div className={styles.box}>
                <i className="fa-solid fa-quote-left"></i>
                <div className={styles.content}>
                  <p>{testimony.content}</p>
                </div>
                <div className={styles.role}>
                  <h3>{testimony.name}</h3>
                  <p>{testimony.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Testimonials;
