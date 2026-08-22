import ProjectVideoPlayer from "./components/ProjectVideoPlayer";
import { useInView } from "./hooks/useInView";

// TODO: reemplaza estos placeholders con tus proyectos reales
// (foto/video, tipo de espacio y modelo instalado).
type Project = {
  spaceType: string;
  model: string;
  videoSrc: string;
  videoSrcWebm?: string;
  posterSrc?: string;
};

const PROJECTS: Project[] = [
  {
    spaceType: "Apartamento residencial",
    model: "TTLock G3",
    videoSrc: "/videos/apartamento-ttlock.mp4",
    videoSrcWebm: "/videos/apartamento-ttlock.mp4",
    posterSrc: "/videos/apartamento-ttlock-poster.mp4",
  },
  {
    spaceType: "Oficina corporativa",
    model: "Tuya Smart Lock T5",
    videoSrc: "/videos/corporativa.mp4",
    videoSrcWebm: "/videos/corporativa.mp4",
    posterSrc: "/videos/corporativa-poster.jpg",
  },
  {
    spaceType: "Oficina comercial",
    model: "TTLock Fingerprint FP",
    videoSrc: "/public/videos/local_comercial.mp4",
    videoSrcWebm: "/public/videos/local_comercial.mp4",
    posterSrc: "/public/videos/local_comercial.mp4",
  },
  {
    spaceType: "Casa unifamiliar",
    model: "Tuya Smart Padlock",
    videoSrc: "/videos/casa-tuya-deadbolt.mp4",
    videoSrcWebm: "/videos/casa-tuya-deadbolt.mp4",
    posterSrc: "/videos/casa-tuya-deadbolt-poster.jpg",
  },
  {
    spaceType: "Edificio de oficinas",
    model: "TTLock Access Pro",
    videoSrc: "/videos/edificio-ttlock-access.mp4",
    videoSrcWebm: "/videos/edificio-ttlock-access.mp4",
    posterSrc: "/videos/edificio-ttlock-access-poster.jpg",
  },
  {
    spaceType: "Local Comercial",
    model: "Tuya Tuya Smart Lock T7",
    videoSrc: "/videos/bodega-tuya-padlock.mp4",
    videoSrcWebm: "/videos/bodega-tuya-padlock.mp4",
    posterSrc: "/videos/bodega-tuya-padlock-poster.jpg",
  },
];

function ProjectsSection() {
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>(0.05);

  return (
    <section
      id="proyectos"
      className="relative bg-background px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Intro */}
        <div
          ref={introRef}
          className={introInView ? "animate-fade-up" : "opacity-0"}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-accent">
            Proyectos
          </span>
          <h2 className="mt-3 max-w-2xl font-podium text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Instalaciones que hablan
            <br />
            por sí solas.
          </h2>
          <p className="mt-5 max-w-lg font-inter text-sm leading-relaxed text-muted sm:text-base">
            Cada acceso es distinto. Estos son algunos de los espacios donde
            ya implementé soluciones de cerraduras inteligentes.
          </p>
        </div>

        {/* Project grid */}
        <div
          ref={gridRef}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
        >
          {PROJECTS.map((project, i) => (
            <div
              key={project.spaceType}
              className="group transition-all duration-700"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: gridInView ? 1 : 0,
                transform: gridInView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-white/[0.03] transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:border-accent/50 group-hover:shadow-glow-sm">
                {/* Video area with lazy loading */}
                <ProjectVideoPlayer
                  src={project.videoSrc}
                  srcWebm={project.videoSrcWebm}
                  poster={project.posterSrc}
                  className="absolute inset-0"
                />

                {/* Hover glow */}
                <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent/0 blur-2xl transition-all duration-300 group-hover:bg-accent/20" />

                {/* Hover overlay with project details */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="font-inter text-[10px] uppercase tracking-widest text-accent">
                    {project.model}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="font-inter text-sm font-semibold uppercase tracking-wide text-foreground">
                  {project.spaceType}
                </div>
                <div className="mt-0.5 font-inter text-xs uppercase tracking-widest text-muted">
                  {project.model}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
