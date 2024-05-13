import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Preview from "./pages/Preview";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Toaster position="top-center" />
      <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/books" element={<Books />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
