import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "./hooks/useInView";

// TODO: ajusta preguntas/respuestas a tu operación real
// (tiempos, garantía, zonas de cobertura, etc.)
const FAQS = [
  {
    question: "¿Qué pasa si se va la luz?",
    answer:
      "Las cerraduras funcionan con batería propia, independiente de la energía eléctrica de la vivienda. Además siempre dejo un método de acceso físico de respaldo (llave o código) por si la batería llegara a agotarse.",
  },
  {
    question: "¿La instalación tiene garantía?",
    answer:
      "Sí. Toda instalación incluye garantía sobre el trabajo realizado y sobre el equipo, según las condiciones del fabricante (TTLock o Tuya).",
  },
  {
    question: "¿Cuánto dura la instalación?",
    answer:
      "En la mayoría de los casos, entre 1 y 2 horas, dependiendo del tipo de puerta y si requiere adaptaciones adicionales.",
  },
  {
    question: "¿Funciona si no tengo wifi?",
    answer:
      "Sí. El acceso por huella, código o tarjeta funciona sin conexión a internet. El wifi solo es necesario si quieres controlar la cerradura de forma remota desde tu celular.",
  },
  {
    question: "¿Puedo instalarla en una puerta con cerradura tradicional?",
    answer:
      "En la mayoría de los casos sí. Antes de instalar, evalúo el tipo de puerta y cerradura actual para confirmar compatibilidad o recomendarte la mejor alternativa.",
  },
];

function SupportSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();
  const { ref: listRef, inView: listInView } = useInView<HTMLDivElement>(0.05);

  return (
    <section
      id="soporte"
      className="relative bg-background px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-3xl">
        {/* Intro */}
        <div
          ref={introRef}
          className={introInView ? "animate-fade-up" : "opacity-0"}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-accent">
            Soporte
          </span>
          <h2 className="mt-3 font-podium text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Resolvemos tus dudas.
          </h2>
          <p className="mt-5 max-w-lg font-inter text-sm leading-relaxed text-muted sm:text-base">
            Estas son las preguntas que más me hacen antes de instalar. Si la
            tuya no está aquí, escríbeme directo.
          </p>
        </div>

        {/* Accordion */}
        <div
          ref={listRef}
          className="mt-12 divide-y divide-white/10 border-t border-white/10 lg:mt-16"
        >
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className="transition-all duration-700"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  opacity: listInView ? 1 : 0,
                  transform: listInView ? "translateY(0)" : "translateY(16px)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                        isOpen ? "bg-accent shadow-glow-sm" : "bg-white/20"
                      }`}
                    />
                    <span className="font-inter text-sm font-semibold uppercase tracking-wide text-foreground sm:text-base">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl pb-5 pl-5 font-inter text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
