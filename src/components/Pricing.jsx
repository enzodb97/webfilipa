import { CheckIcon } from "@heroicons/react/20/solid";
import { cuadrosData } from "../assets/assets";
import { motion } from "motion/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white py-24 sm:py-32"
      id="Pricing"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-2xl sm:text-4xl font-semibold md-2 catamaran text-yellow uppercase">
            EL tamaño perfecto <span>{String.fromCharCode(32)}</span>
            <span className="underline underline-offset-4 decoration-1 font-semibold under catamaran">
              para tu espacio
            </span>
          </h1>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Todos nuestros cuadros están elaborados con los mejores materiales y
          acabados profesionales para garantizar una calidad excepcional.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3 lg:gap-8">
          {cuadrosData.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-base font-semibold leading-7"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-4xl font-bold tracking-tight"
                  )}
                >
                  {tier.precio}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base leading-7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm leading-6"
                )}
              >
                {tier.caracteristicas.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Comprar ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
