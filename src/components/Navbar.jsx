import { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <a href="/" className="flex items-start">
          <img src={assets.logo} alt="logo" className="w-13 logotype" />
        </a>

        <ul className="hidden lg:flex gap-7 text-lg text-black catamaran">
          <a href="/" className="cursor-pointer hover:text-gray-400">
            Inicio
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            Artista
          </a>
          <a href="#Services" className="cursor-pointer hover:text-gray-400">
            Servicios
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Proyectos
          </a>
          <a href="#Blog" className="cursor-pointer hover:text-gray-400">
            Blog
          </a>
          <a href="#Pricing" className="cursor-pointer hover:text-gray-400">
            Precios
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contacto
          </a>
          <button className="hidden md:block bg-black px-8 py-2 rounded-full">
            <a href="#Contact" className="text-white">
              Contactame
            </a>
          </button>
        </ul>

        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="menu"
          className="flex lg:hidden w-7 cursor-pointer"
        />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-all duration-300 ${
          showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt="cerrar"
            className="w-6"
          />
        </div>

        <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-3xl font-medium">
          <a onClick={() => setShowMobileMenu(false)} href="/">
            Inicio
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#About">
            Artista
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Services">
            Servicios
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Projects">
            Proyectos
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Blog">
            Blog
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Pricing">
            Precios
          </a>
          <a onClick={() => setShowMobileMenu(false)} href="#Contact">
            Contacto
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
