import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTransition from "../components/PageTransition";

const Contacts = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <ContactForm />
      </PageTransition>
      <Footer />
    </>
  );
};

export default Contacts;
