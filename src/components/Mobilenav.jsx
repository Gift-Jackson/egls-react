import { NavLink, Link } from "react-router-dom";
import headerLogo from "../assets/logo.png";
import styles from "../styles/mobilenav.module.css";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Mobilenav = ({ closeMenu }) => {
  const isNotBooksPage = location.pathname !== "/books";
  const navVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
    },
    exit: {
      scaleY: 0,
    },
  };
  return (
    <>
        <motion.div
          variants={navVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.wrapper}
        >
          <div className={styles.header}>
            <Link to="/">
              <div className={styles.brand}>
                <img src={headerLogo} alt="" height={40} />
                <h2>EGLS</h2>
              </div>
            </Link>
            <button className={styles.close_btn} onClick={closeMenu}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <nav className={styles.nav} id="mobile-nav">
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/services">
                  Our Services
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contacts">
                  Contact Us
                </NavLink>
              </li>
            </ul>

            {isNotBooksPage && (
              <Link to="/books">
                <button className={styles.btn}>
                  <i className="fa-solid fa-book"></i> &nbsp; Book Shelf
                </button>
              </Link>
            )}
          </nav>
        </motion.div>
    </>
  );
};

Mobilenav.propTypes = {
  closeMenu: PropTypes.func,
};

export default Mobilenav;
