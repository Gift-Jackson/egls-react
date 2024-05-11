import { Link, NavLink } from "react-router-dom";
import headerLogo from "../assets/logo.png";
import styles from "../styles/header.module.css";
const Header = () => {
  const isNotBooksPage = location.pathname !== "/books";
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={headerLogo} alt="" height={40} />
        <h2>EGLS</h2>
      </div>

      <nav className={styles.nav}>
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

        <button className={styles.menu_btn}>
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
