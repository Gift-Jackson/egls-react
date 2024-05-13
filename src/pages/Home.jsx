import FeaturedBook from "../components/FeaturedBook";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import PageTransition from "../components/PageTransition";

const Home = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <Hero />
        <FeaturedBook />
        <Service />
        <Testimonials />
        <Newsletter />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Home;
