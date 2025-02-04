import { assets } from "../assets/assets";
import { motion } from "motion/react"
const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 footer-bg w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb:-0">
          <img src={assets.filipan} alt="logo" className="w-30" />
          <p className="catamaran text-gray-700 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            deserunt voluptas aspernatur error ducimus recusandae quos, expedita
            repellat vero commodi veniam facere, dolorum excepturi maiores
            reprehenderit accusamus esse dolor. Corrupti?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="catamaran text-white text-2xl font-bold">Links</h3>
          <br />
          <ul className="catamaran flex flex-col gap-2 text-gray-700 text-xl">
            <a href="/" className="hover:text-white ">
              Inicio
            </a>
            <a href="#About" className="hover:text-white">
              Artista
            </a>
            <a href="#Services" className="hover:text-white ">
              Servicios
            </a>
            <a href="#Projects" className="hover:text-white ">
              Proyectos
            </a>
            <a href="#Blog" className="hover:text-white ">
              Blog
            </a>
            <a href="#Contact" className="hover:text-white ">
              Contacto
            </a>
          </ul>
        </div>
        <div className=" border-gray-700 py-4 mt-10 text-center text-gray-500">
       
      </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
      Copyright 2025 | Filipa. All right reserved. Creador por <a href="https://porfolio-swart-phi.vercel.app/" target="_blank">Scriptal </a> 
      </div>
    </div>
  );
};

export default Footer;
