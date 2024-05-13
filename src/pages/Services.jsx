import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import Service from "../components/Service";

const Services = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <Service />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Services;
