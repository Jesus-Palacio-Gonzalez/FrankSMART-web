import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";
import { buildWhatsAppLink } from "./lib/whatsapp";

const NAV_LINKS = [
  { label: "Proyectos", href: "#proyectos" },
  { label: "Acerca de mi", href: "#acerca" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Soporte", href: "#soporte" },
];

const VIDEO_URL = "/herosection.mp4";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col overflow-y-auto">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
            FRANKSMART
          </span>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-inter text-sm uppercase tracking-widest text-muted transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="group hidden items-center gap-2 border border-white/15 px-6 py-3 font-inter text-xs uppercase tracking-widest text-foreground transition hover:border-accent/60 hover:bg-accent/5 md:flex"
          >
            Contactame
            <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-accent" />
          </a>

          <button
            className="flex flex-col items-end space-y-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="h-0.5 w-6 bg-foreground" />
            <div className="h-0.5 w-6 bg-foreground" />
            <div className="h-0.5 w-4 bg-foreground" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 shrink-0 flex-col justify-center px-6 py-6 sm:px-10 lg:px-16">
          <div className="mb-4 flex animate-fade-up items-center gap-2 lg:mb-6">
            <Crown className="h-4 w-4 text-accent" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-muted sm:text-sm">
              Protege lo que más importa con seguridad inteligente.
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight">
            <span className="block text-[clamp(2.2rem,6vw,5.5rem)] text-foreground">
              Control
            </span>
            <span className="block text-[clamp(2.2rem,6vw,5.5rem)] text-foreground">
              y acceso
            </span>
            <span className="block text-[clamp(2.2rem,6vw,5.5rem)] text-accent">
              seguro.
            </span>
          </h1>

          <p className="mt-4 max-w-md animate-fade-up-delay-2 font-inter text-sm leading-relaxed text-foreground sm:text-base lg:mt-6">
            Franklin Palacio, especialista en cerraduras digitales TTLock y Tuya para hogares, oficinas y empresas.
            <br />
            <br />
            Instalo, configuro y dejo todo listo para que controles tus accesos desde el celular.
          </p>

          <div className="mt-6 flex animate-fade-up-delay-3 flex-wrap items-center gap-4 sm:gap-6 lg:mt-8">
            <a
              href={buildWhatsAppLink("Hola, quiero solicitar una instalación.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-accent px-5 py-3 font-inter text-[11px] font-semibold uppercase tracking-widest text-background shadow-glow-sm transition hover:shadow-glow sm:px-7 sm:py-4 sm:text-xs"
            >
              Solicitar Instalacion
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-gold" />
              <div className="font-inter text-xs uppercase tracking-wider text-foreground">
                <div>Tecnico</div>
                <div>Calificado</div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid animate-fade-up-delay-4 grid-cols-2 gap-x-6 gap-y-6 sm:mt-8 sm:flex sm:flex-wrap sm:gap-12 lg:mt-10 lg:gap-16">
            {[
              { value: "+150", label: "Clientes Satisfechos." },
              { value: "+300", label: "Accesos Configurados." },
              { value: "+5", label: "Años de Experiencia." },
              { value: "100%", label: "Instalaciones con garantía." },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-2xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-muted sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-foreground sm:text-3xl">
              FRANKSMART
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7 text-foreground" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl uppercase text-foreground transition-all duration-500 hover:text-accent sm:text-5xl"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="group mt-4 flex items-center gap-2 border border-white/15 px-6 py-3 font-inter text-xs uppercase tracking-widest text-foreground transition-all duration-500 hover:border-accent/60 hover:bg-accent/5"
              style={{
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Contactame
              <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;