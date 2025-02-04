import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 footer-bg w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Sección del logo y descripción */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.filipan} alt="logo" className="w-30" />
          <p className="catamaran text-gray-100 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa deserunt voluptas aspernatur error.
          </p>
        </div>

        {/* Sección de enlaces */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="catamaran text-white text-2xl font-bold">Links</h3>
          <br />
          <ul className="catamaran flex flex-col gap-2 text-gray-200 text-xl">
            <a href="/" className="hover:text-yellow-300 transition">Volver a la página principal</a>
          </ul>
        </div>

        {/* Sección de suscripción */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Suscríbete</h3>
          <p className="text-gray-300 mb-4 max-w-80">Recibe novedades y contenido exclusivo.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Ingrese su mail"
              className="p-2 rounded bg-gray-200 border border-gray-400 text-gray-800 focus:outline-none w-full sm:w-auto"
            />
            <button className="py-2 px-4 rounded bg-white text-gray-900 font-bold hover:bg-gray-300 transition">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-500 py-4 mt-10 text-center text-white">
        Copyright 2025 | Filipa. All rights reserved. Creado por 
        <a href="https://porfolio-swart-phi.vercel.app/" target="_blank" className="text-gray-300 hover:text-white transition"> Scriptal</a>
      </div>
    </div>
  );
};

export default Footer;
