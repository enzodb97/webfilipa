import { assets } from "../assets/assets";
import Footer from "./Footer";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Para los iconos de redes sociales

const Blog = () => {
  return (
    <>
      {/* Título */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-32 py-16 text-center">
        <h1 className=" text-yellow catamaran text-4xl sm:text-6xl font-bold uppercase text-gray-800">
          Almas Libres
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Un mural que refleja la unión familiar, la pérdida y la esencia de la vida.
        </p>
      </div>

      {/* Imagen */}
      <div className="relative w-full h-[60vh] sm:h-[70vh]">
        <img
          src={assets.blog}
          alt="Foto de la artista"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Resto de la descripción */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-32 py-16 text-gray-700">
        <article className="max-w-2xl mx-auto leading-relaxed">
          <p className="text-lg">
            Éste mural sin dudas fue de los que más me atravesó a la hora de pintarlo.
            Agustina, mi clienta, quería que todo tuviese un porqué. Escuché su historia
            y armamos juntas este proyecto que no solo quedó soñado sino que también fue
            liberador para ella.
          </p>

          <p className="mt-6">
            Agus quería plasmar la esencia de la unión familiar aunque no estén todos
            los integrantes en el mismo plano. Su familia estaba conformada por su mamá,
            su hermana mayor y ella, quien a su vez tiene su pequeña familia: su compañero
            y dos hijos. Hace muy poco sufrió la pérdida de 3 pilares: su abuelo, su papá
            y su hermano.
          </p>

          <p className="mt-6">
            De esta manera, y a libre interpretación, el mural cuenta con un árbol de la vida, 
            flores blancas, tres follajes rosas, un nido con tres huevos y 3 almas libres.
          </p>

          {/* Info destacada */}
          <div className="bg-gray-100 border-l-4 border-yellow-500 p-4 mt-8 text-gray-800">
            <p className="font-semibold">📌 Materiales:</p>
            <p>Acrílicos, pinceles.</p>
            <p className="font-semibold mt-2">⏳ Tiempo:</p>
            <p>18 horas.</p>
          </div>
        </article>
      </div>

      {/* Links para compartir en redes sociales */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-32 py-8 text-center">
        <p className="text-lg text-gray-600">¡Comparte este blog!</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:5173/Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=http://localhost:5173/Blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blog;
