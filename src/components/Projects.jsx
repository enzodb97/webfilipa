import { useState } from "react";
import { proyectos } from "../assets/assets";
import { motion } from "motion/react";

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="bg-white"
      id="Projects"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
        <h1 className="text-2xl sm:text-4xl font-semibold md-2 catamaran text-yellow">
          PROYECTOS <span>{String.fromCharCode(32)}</span>
          <span className="underline underline-offset-4 decoration-1 font-semibold under catamaran">
            REALIZADOS
          </span>
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {proyectos.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.name}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover cursor-pointer group-hover:opacity-75"
                onClick={() => setSelectedImage(product.imageSrc)}
              />
              <div className="mt-4">
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Zoomed in view"
              className="max-w-4xl max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
