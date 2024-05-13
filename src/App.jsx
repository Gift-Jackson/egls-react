import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Preview from "./pages/Preview";
import { Toaster } from "react-hot-toast";


const App = () => {

  return (
    <>
       <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
