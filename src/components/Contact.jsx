import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "motion/react";
const Contact = () => {
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
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden "
      id="Contact"
    >
      <h1 className=" uppercase text-2xl sm:text-4xl mb-2 text-center text-yellow bebas">
        Contacto
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto ">
        Contactame, estoy esperando tu propuesta!
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Tu nombre
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Escribe tu nombre"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Tu Email
            <input
              type="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              name="email"
              placeholder="Escribe tu Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Mensaje
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Escribe tu consulta"
            required
          ></textarea>
        </div>
        <button className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto">
          {result ? result : "Enviar"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
