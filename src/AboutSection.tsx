import { useInView } from "./hooks/useInView";

// TODO: ajusta estos pasos a tu proceso real de instalación.
const PROCESS = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Evalúo tu puerta, cerradura actual y necesidades de acceso — en sitio o por fotos/video.",
  },
  {
    step: "02",
    title: "Selección del sistema",
    text: "Te recomiendo el modelo TTLock o Tuya ideal según huella, código, tarjeta o control remoto.",
  },
  {
    step: "03",
    title: "Instalación",
    text: "Instalo la cerradura y configuro la app, usuarios y métodos de acceso el mismo día.",
  },
  {
    step: "04",
    title: "Prueba y entrega",
    text: "Verificamos juntos que todo funcione, y te explico el uso antes de irme.",
  },
  {
    step: "05",
    title: "Soporte post-instalación",
    text: "Quedo disponible si surge cualquier duda o ajuste después de la instalación.",
  },
];

function AboutSection() {
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();
  const { ref: timelineRef, inView: timelineInView } =
    useInView<HTMLDivElement>(0.1);

  return (
    <section
      id="acerca"
      className="relative bg-background px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo placeholder */}
        <div
          ref={introRef}
          className={`lg:col-span-2 ${
            introInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              src="/franklin.jpg"
              alt="Franklin Palacio"
              className="h-full w-full object-cover object-top"
            />
            {/* subtle corner glow to keep the accent language alive */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>

        {/* Bio + timeline */}
        <div className="lg:col-span-3">
          <div
            className={introInView ? "animate-fade-up-delay-1" : "opacity-0"}
          >
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-accent">
              Quién soy
            </span>
            <h2 className="mt-3 font-podium text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              La persona detrás
              <br />
              de cada instalación.
            </h2>

            <p className="mt-6 max-w-xl font-inter text-sm leading-relaxed text-foreground sm:text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.
            </p>
            <p className="mt-4 max-w-xl font-inter text-sm leading-relaxed text-muted sm:text-base">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem.
            </p>
          </div>

          {/* Process */}
          <div ref={timelineRef} className="mt-12">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-accent">
              Cómo trabajo
            </span>

            <div className="mt-6 space-y-8">
              {PROCESS.map((item, i) => (
                <div
                  key={item.step}
                  className="flex gap-5 transition-all duration-700"
                  style={{
                    transitionDelay: `${i * 120}ms`,
                    opacity: timelineInView ? 1 : 0,
                    transform: timelineInView
                      ? "translateY(0)"
                      : "translateY(16px)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-glow-sm" />
                    {i < PROCESS.length - 1 && (
                      <div className="mt-1 w-px flex-1 bg-white/10" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-podium text-lg uppercase tracking-tight text-accent">
                        {item.step}
                      </span>
                      <span className="font-inter text-sm font-semibold uppercase tracking-wide text-foreground">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-1 max-w-md font-inter text-sm leading-relaxed text-muted">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;