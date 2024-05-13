import AboutWrapper from "../components/AboutWrapper";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <AboutWrapper />
      </PageTransition>

      <Footer />
    </>
  );
};

export default About;
