import { User } from "lucide-react";
import { useInView } from "./hooks/useInView";

// TODO: reemplaza estos hitos con tu trayectoria real (años y logros).
const TIMELINE = [
  {
    year: "2019",
    title: "Primeras instalaciones",
    text: "Empecé resolviendo problemas de acceso para vecinos y conocidos.",
  },
  {
    year: "2021",
    title: "Certificación TTLock",
    text: "Formalicé el oficio con certificación oficial en cerraduras digitales TTLock.",
  },
  {
    year: "2023",
    title: "Especialización en Tuya",
    text: "Sumé el ecosistema Tuya para ofrecer automatización completa del hogar.",
  },
  {
    year: "Hoy",
    title: "+150 instalaciones",
    text: "Sigo aprendiendo, certificándome y mejorando cada instalación que hago.",
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
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                <User className="h-7 w-7 text-gold" />
              </div>
              <span className="font-inter text-[10px] uppercase tracking-widest text-muted">
                Foto próximamente
              </span>
            </div>
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
              Soy Franklin Palacio. Empecé en el mundo de la seguridad
              electrónica resolviendo problemas puntuales para vecinos y
              conocidos — con el tiempo esa curiosidad se convirtió en una
              especialización. Hoy diseño e instalo sistemas de acceso
              inteligente para hogares, oficinas y empresas.
            </p>
            <p className="mt-4 max-w-xl font-inter text-sm leading-relaxed text-muted sm:text-base">
              No trabajo con cualquier cerradura: elijo TTLock y Tuya porque
              son los sistemas que mejor equilibran seguridad real y
              facilidad de uso, sin sacrificar ninguna de las dos cosas por
              la otra.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="mt-12 space-y-8">
            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
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
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-1 w-px flex-1 bg-white/10" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-podium text-lg uppercase tracking-tight text-accent">
                      {item.year}
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
    </section>
  );
}

export default AboutSection;
