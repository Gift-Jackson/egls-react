import { NavLink } from "react-router-dom";
import footerLogo from "../assets/logo.png";
import styles from "../styles/footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={footerLogo} height={80} />
          <div>
            <h3>EGLS</h3>
            <p>First Touch, Great Impact...</p>
          </div>
        </div>

        <nav className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <NavLink className="nav-link" to="/">
                <i className="fa-solid fa-circle"></i> &nbsp; Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                <i className="fa-solid fa-circle"></i> &nbsp; About Us
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/services">
                <i className="fa-solid fa-circle"></i> &nbsp; Our Services
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contacts">
                <i className="fa-solid fa-circle"></i> &nbsp; Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <p className={styles.info}>
        <span>
          <i className="fa-solid fa-location-dot"></i> Address is suite 6 & 9,
          Henry plaza on New Road Rumuewhara, off Eneka-igwuruta road Port
          Harcourt.
        </span>
        &nbsp;
        <span>
          <a href="mailto:exceedingglory@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            &nbsp;exceedinggloryls@gmail.com.
          </a>
        </span>
        &nbsp;
        <span>
          <a href="tel:08171471380">
            <i className="fa-solid fa-phone"></i>
            &nbsp; 08171471380
          </a>
        </span>
      </p>
      <p className={styles.text}>
        Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
