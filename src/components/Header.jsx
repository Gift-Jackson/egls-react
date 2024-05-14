import { Link, NavLink } from "react-router-dom";
import headerLogo from "../assets/logo.png";
import styles from "../styles/header.module.css";
import Mobilenav from "./Mobilenav";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
const Header = () => {
  const isNotBooksPage = location.pathname !== "/books";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      document.getElementById("header").classList.remove("fixed");
    } else {
      document.getElementById("header").classList.add("fixed");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header id="header" className={styles.header}>
        <Link to="/">
          <div className={styles.brand}>
            <img src={headerLogo} alt="" height={40} />
            <h2>EGLS</h2>
          </div>
        </Link>

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

          <button onClick={toggleMenu} className={styles.menu_btn}>
            <span className="material-symbols-outlined">
              {!isMenuOpen ? "menu" : "close"}
            </span>
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {isMenuOpen && <Mobilenav closeMenu={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
