import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing"; 
import Newsletter from "./components/Newsletter";
import BlogSection from "./components/BlogSection";


const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <BlogSection/>
      <Pricing />
      <Contact />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default App;