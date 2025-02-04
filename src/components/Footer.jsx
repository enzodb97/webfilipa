import { assets } from "../assets/assets";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Importamos iconos de redes sociales

const Footer = () => {
  return (
    <div className="bg-gray-600 text-gray-400 pt-12 px-6 md:px-20 lg:px-32" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Logo y descripción */}
        <div className="w-full md:w-1/3">
          <img src={assets.filipan} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            Descubre más sobre nuestros proyectos artísticos y únete a nuestra comunidad creativa.
          </p>
        </div>

        {/* Links de navegación */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-2xl font-bold mb-4">Navegación</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/" className="hover:text-white transition">Inicio</a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">Artista</a>
            </li>
            <li>
              <a href="#Services" className="hover:text-white transition">Servicios</a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-white transition">Proyectos</a>
            </li>
            <li>
              <a href="/Blog" className="hover:text-white transition">Blog</a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">Contacto</a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-2xl font-bold mb-4">Síguenos</h3>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y copyright */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; 2025 | Filipa. Todos los derechos reservados. Creado por 
        <a href="https://porfolio-swart-phi.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-500 ml-1 transition">Scriptal</a>
      </div>
    </div>
  );
};

export default Footer;
