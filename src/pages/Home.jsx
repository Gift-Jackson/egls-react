import { Toaster } from "sonner";
import FeaturedBook from "../components/FeaturedBook";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";

const Home = () => {
  

  return (
    <>
      <Toaster position="top-center" richColors/>
      <Header />
      <Hero />
      <FeaturedBook />
      <Service />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
