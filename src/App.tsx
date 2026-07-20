import { useState } from "react";
import { ArrowUpRight, Award, Crown, X } from "lucide-react";

const NAV_LINKS = ["Proyectos", "Acerca de mi", "Ofertas", "Soporte"];

const VIDEO_URL =
"/herosection.mp4";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-black/40" />

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-5 sm:px-10 lg:px-16 lg:py-7">
          <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
            FRANKSMART
          </span>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="font-inter text-sm uppercase tracking-widest text-white/80 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#"
            className="hidden items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition hover:border-white/60 hover:bg-white/10 md:flex"
          >
            Contactame
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <button
            className="flex flex-col items-end space-y-1.5 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-6 bg-white" />
            <div className="h-0.5 w-4 bg-white" />
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16">
          <div className="mb-6 flex animate-fade-up items-center gap-2 lg:mb-8">
            <Crown className="h-4 w-4 text-white/70" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">
              Protege lo que más importa con seguridad inteligente.
            </span>
          </div>

          <h1 className="animate-fade-up-delay-1 font-podium uppercase leading-[0.92] tracking-tight text-white">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Control</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">y acceso</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">seguro.</span>
          </h1>

          <p className="mt-6 max-w-md animate-fade-up-delay-2 font-inter text-sm leading-relaxed text-white/70 sm:text-base lg:mt-8">
            Franklin Palacio, especialista en soluciones de acceso inteligente. Instalo cerraduras digitales compatibles con TTLock y Tuya, integrando tecnología, seguridad y comodidad para que controles cada acceso desde tu smartphone.
            <br />
            <br />
            ¿Listo para modernizar tus accesos? Agenda una asesoría y encuentra la cerradura digital ideal para tus necesidades.{" "} 
            <br />
          </p>

          <div className="mt-8 flex animate-fade-up-delay-3 flex-wrap items-center gap-4 sm:gap-6 lg:mt-10">
            <button className="group flex items-center gap-2 bg-black px-5 py-3 font-inter text-[11px] uppercase tracking-widest text-white transition hover:bg-neutral-900 sm:px-7 sm:py-4 sm:text-xs">
              ¿Quieres saber mas de mi?
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>

            <div className="hidden items-center gap-3 sm:flex">
              <Award className="h-8 w-8 text-white/50" />
              <div className="font-inter text-xs uppercase tracking-wider text-white/60">
                <div>Tecnico</div>
                <div>Calificado</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex animate-fade-up-delay-4 flex-wrap gap-6 sm:mt-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {[
              { value: "150+", label: "Clientes Satisfechos." },
              { value: "+300", label: "Accesos Configurados." },
              { value: "+5", label: "Años de Experiencia." },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-inter text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-inter text-[9px] uppercase tracking-widest text-white/50 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-sm transition-all duration-500 md:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5 sm:px-10">
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
              FRANKSMART
            </span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7 text-white" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-podium text-4xl uppercase text-white transition-all duration-500 sm:text-5xl"
                style={{
                  transitionDelay: `${i * 80 + 100}ms`,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {link}
              </a>
            ))}

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center gap-2 border border-white/30 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white transition-all duration-500 hover:border-white/60 hover:bg-white/10"
              style={{
                transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              Contactame
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
