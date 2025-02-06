import { Helmet } from "react-helmet-async";
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
      {/* Metadatos dinámicos con Helmet */}
      <Helmet>
        <title>Filipa - Murales y Cuadros en Rosario. Pinturas de tu mascota y murales en tu negocio.</title>
        <meta name="author" content="Scriptal - Enzo Bertolusso" />
        <meta name="keywords" content="pintura, murales, a mano, filipa, retrato de mascotas, envíos a todo el país, Rosario Santa Fe" />
        <meta name="description" content="Arte personalizado: murales, retratos de mascotas y más. Envíos a todo el país desde Rosario, Santa Fe." />
        <link rel="canonical" href="filipa-tau.vercel.app" />

      </Helmet>

      {/* Componentes principales */}
      <Header />
      <About />
      <Projects />
      <BlogSection />
      <Pricing />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
