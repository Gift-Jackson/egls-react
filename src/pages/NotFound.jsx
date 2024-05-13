import { Link } from "react-router-dom";
import svg from "../assets/no-data.svg";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
const NotFound = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <main>
          <div className="not-found">
            <img src={svg} height={150} alt="" />
            <p>
              Page Not Found! <br />
              Go back to{" "}
              <Link to="/" className="mark">
                {" "}
                Homepage
              </Link>
            </p>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
};

export default NotFound;
