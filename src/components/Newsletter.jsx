import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "motion/react";
export default function Newsletter() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando tu consulta, aguarde unos segundos....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_SECRET_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log("Response Data:", data);

      if (data.success) {
        setResult("");
        toast.success("¡Mensaje enviado! En breve te estaré contactando");
        event.target.reset();
      } else {
        console.error("Error:", data);
        toast.error(
          "UPS! Hubo un error al enviar el mensaje. Intenté en unos minutos"
        );
        setResult("");
      }
    } catch (error) {
      console.error("Error de red:", error);
      toast.error("Error de red, intenta nuevamente más tarde.");
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-yellow catamaran uppercase">
              Suscribete
            </h2>

            <p className="mt-4 text-lg text-gray-600">
              ¡Descuentos, promociones, y más!
            </p>

            <form onSubmit={onSubmit} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Ingrese su email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                {result ? result : "Suscribirse"}
              </button>
            </form>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-gray-900"
                />
              </div>

              <dt className="mt-4 text-base font-semibold text-gray-900 catamaran">
                Promociones y descuentos
              </dt>

              <dd className="mt-2 text-base/7 text-gray-600">
                Recibe contenido semanal con artículos exclusivos, novedades y
                ofertas especiales solo para suscriptores.
              </dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-gray-900"
                />
              </div>

              <dt className="mt-4 text-base font-semibold text-gray-900 catamaran">
                Spam
              </dt>

              <dd className="mt-2 text-base/7 text-gray-600">
                No te enviaremos correos no deseados. Solo recibirás nuestras
                promociones y actualizaciones importantes.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </motion.div>
  );
}
