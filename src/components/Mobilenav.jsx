import { NavLink, Link } from "react-router-dom";
import styles from "../styles/mobilenav.module.css";

const Mobilenav = () => {
  const isNotBooksPage = location.pathname !== "/books";
  return (
    <>
      <div className={styles.wrapper}>
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
      </div>
    </>
  );
};

export default Mobilenav;
