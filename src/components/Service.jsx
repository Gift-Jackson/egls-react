import { services } from "../constants/content";
import Title from "./Title";
import styles from "../styles/service.module.css"

const Service = () => {
  return (
    <>
      <main>
        <Title title="Our Services" subtitle="What we offer..." />

        <ul className={styles.container}>
          {services.map((service, index) => (
            <li key={index} className={styles.box}>
              <div className={styles.icon}>
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </div>
              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Service;
