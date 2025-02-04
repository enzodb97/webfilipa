import { useState } from "react";
import { assets } from "../assets/assets";
import { useEffect } from "react";

const Navbar = () => {

  const [showMobileMenu, setshowMobileMenu] = useState(false);
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow ='hidden'
    }else {
      document.body.style.overflow ='auto'
    }
    return()=>{
      document.body.style.overflow ='hidden'
    }
  },[showMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="logo" className="w-20 " href={"/"} />

        <ul className="hidden lg:flex gap-7 text-lg text-white catamaran">
          <a href="/" className="cursor-pointer  hover:text-gray-400">
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
          <a href="/Blog" className="cursor-pointer hover:text-gray-400">
            Blog
          </a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">
            Contacto
          </a>
          <button className="hidden md:block bg-white px-8 py-2 rounded-full">
            <span className="text-black">
            Contactame
            </span>
          </button>
        </ul>
        <img onClick={() => setshowMobileMenu(true)} src={assets.menu_icon} alt="" className="flex lg:hidden w-7 " />
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden ${showMobileMenu ? 'fixed w-full top-0 right-0 bottom-0 bg-white transition-all duration-300' : 'h-0 w-0 overflow-hidden'} `}>
        <div className="flex justify-end p-6 cursor-pointer" >
          <img onClick={() => setshowMobileMenu(false)} src={assets.cross_icon} alt="icono cierre" className="w-6" />
        </div>
        
        <ul className="flex catamaran flex-col items-center gap-2 mt-5 px-5 text-3xl font-medium">
          <a onClick={() => setshowMobileMenu(false)} href="" className="px-4 py-2 rounded-full inline-block">
            Inicio
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">
            Artista
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="#Services" className="px-4 py-2 rounded-full inline-block">
            Servicios
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">
            Proyectos
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="/Blog" className="px-4 py-2 rounded-full inline-block">
            Blog
          </a>
          <a onClick={() => setshowMobileMenu(false)} href="#Contact" className="px-4 py-2 rounded-full inline-block">
            Contacto
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
