import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Preview from "./pages/Preview";
const App = () => {
  return (
    <>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books/>} />
          <Route path="/preview" element={<Preview/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
