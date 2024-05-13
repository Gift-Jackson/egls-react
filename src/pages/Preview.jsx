import Header from "../components/Header";
import PageTransition from "../components/PageTransition";
import PreviewWrap from "../components/PreviewWrap";

const Preview = () => {
  return (
    <>
      <Header />
      <PageTransition>
        <PreviewWrap />
      </PageTransition>
    </>
  );
};

export default Preview;
