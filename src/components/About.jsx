import { assets } from "../assets/assets";
import { BiUser } from "react-icons/bi";
import { PiPaintBrushBroad } from "react-icons/pi";
import { GiStoneWall } from "react-icons/gi";
import { SlPicture } from "react-icons/sl";
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl md-2 bebas text-yellow">
        SOBRE <span>{String.fromCharCode(32)}</span>
        <span className="underline underline-offset-4 decoration-1 under bebas">
          LA ARTISTA
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Mi nombre es Mariana Arias
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="foto de la artista"
          className="w-full sm:w-1/2 max-w-lg rounded-4xl"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <PiPaintBrushBroad size={45} color="gray" />
              <p className="text-4xl font-medium text-gray-800">7+</p>
              <p>años creando</p>
            </div>
            <div>
              <GiStoneWall size={45} color="gray" />
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>muros pintados </p>
            </div>
            <div>
              <SlPicture size={45} color="gray" />
              <p className="text-4xl font-medium text-gray-800">37+</p>
              <p>cuadros pintados</p>
            </div>
            <div>
              <BiUser size={45} color="gray" />
              <p className="text-4xl font-medium text-gray-800">50+</p>
              <p>clientes confiaron</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            {" "}
            Soy una artista visual apasionada por fusionar el arte pop con el
            realismo en formas orgánicas y tonos pasteles. Me especializo en
            crear murales y retratos de animales personalizados que reflejan la
            esencia y personalidad de mis clientes. Mi enfoque se centra en
            respetar los gustos e intenciones del cliente, adaptando colores y
            estilos para armonizar con el ambiente. Trabajo del arte desde 2018.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
