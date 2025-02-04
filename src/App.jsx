import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Blog from "./components/Blog"; // 
import { ToastContainer } from "react-toastify";

const Home = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
