
import { useState } from "react";
import { proyectos } from "../assets/assets";


export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white" id="Projects">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Gallery</h2>

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
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
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
            <img src={selectedImage} alt="Zoomed in view" className="max-w-4xl max-h-screen rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
}
