import { assets } from "../assets/assets";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="bg-gray-600 text-gray-400 pt-12 px-6 md:px-20 lg:px-32"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo y descripción */}
        <div className="w-full md:w-1/3">
          <img src={assets.filipan} alt="logo" className="w-32 mb-4" />
          <p className="text-gray-400 leading-relaxed">
            Descubre más sobre nuestros proyectos artísticos y únete a nuestra
            comunidad creativa.
          </p>
        </div>

        {/* Links de navegación */}
        <div className="w-full md:w-1/5">
          <h3 className="text-white text-2xl mb-4 bebas uppercase">
            Navegación
          </h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white transition">
                Artista
              </a>
            </li>
            <li>
              <a href="#Services" className="hover:text-white transition">
                Servicios
              </a>
            </li>
            <li>
              <a href="#Projects" className="hover:text-white transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#Blog" className="hover:text-white transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-2xl bebas mb-4  uppercase">
            Sígueme
          </h3>
          <div className="flex space-x-6">
            <a
              href="https://wa.me/543876434135"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaWhatsapp size={24} />
            </a>

            <a
              href="https://www.instagram.com/filipa.painting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria y copyright */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-900">
        &copy; 2025 | Filipa. Todos los derechos reservados. Creado por
        <a
          href="https://porfolio-swart-phi.vercel.app/"
          target="_blank"
          className="text-green-600 hover:text-blue-500 ml-1 transition"
        >
          Scriptal
        </a>
      </div>
    </div>
  );
};

export default Footer;
