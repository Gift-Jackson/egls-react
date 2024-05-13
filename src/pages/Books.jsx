import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import SearchBar from "../components/SearchBar";

const Books = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <SearchBar />
      </PageTransition>
    </>
  );
};

export default Books;
