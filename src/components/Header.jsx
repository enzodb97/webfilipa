import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden "
      style={{ backgroundImage: `url(${assets.header_img})` }}
      id="Header"
    >
      <Navbar />
      {/*
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <p className="text-4xl md:text-6xl font-bold">Eleva tus espacios con arte</p>
        <p className="text-2xl md:text-4xl font-semibold mt-4">MURALES . CUADROS . ARTE</p>
      </div>
 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h2 className="catamaran text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          ELEVA TUS ESPACIOS CON ARTE
        </h2>
        <div>
          <p className="bebas text-4xl sm:text-3xl md:text-[42px] inline-block max-w-3xl font-semibold pt-20">
            MURALES . CUADROS . ARTE
          </p>
          {/* boton 
    <div >
        <a href="" className="border border-white px-8 py-3 rounded ">hola </a>
    </div>
    */}
        </div>
        <div>
          <img src={assets.scroll} alt="Scroll Down" className="w-42 mx-auto" />
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
