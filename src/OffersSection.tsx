import { Droplets, Fingerprint, KeyRound, Package } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { buildWhatsAppLink } from "./lib/whatsapp";

// TODO: reemplaza estos productos con tu catálogo real
// (foto, marca, modelo y specs clave de cada uno).
//
// Para la imagen puedes usar:
// 1) Una ruta local importada: import g3 from "./assets/ttlock-g3.jpg"; luego image: g3
// 2) Una ruta desde la carpeta /public: image: "/images/ttlock-g3.jpg"
// 3) Una URL externa: image: "https://tu-cdn.com/ttlock-g3.jpg"
const PRODUCTS = [
  {
    brand: "TTLock",
    model: "G3 Fingerprint",
    image: "/cerradura_t1.png", 
    specs: [
      { icon: Fingerprint, label: "Huella dactilar" },
      { icon: KeyRound, label: "Código y tarjeta" },
      { icon: Droplets, label: "Resistente al agua" },
    ],
  },
  {
    brand: "Tuya",
    model: "Smart Lock T5",
    image: "/cerradura_t2.png",
    specs: [
      { icon: Fingerprint, label: "Huella dactilar" },
      { icon: KeyRound, label: "App remota" },
      { icon: Droplets, label: "Resistente al agua" },
    ],
  },
  {
    brand: "TTLock",
    model: "Access Pro",
    image: "/cerradura_t3.png",
    specs: [
      { icon: KeyRound, label: "Código y tarjeta" },
      { icon: Fingerprint, label: "Huella dactilar" },
      { icon: Droplets, label: "Uso exterior" },
    ],
  },
  {
    brand: "Tuya",
    model: "Wi-Fi Deadbolt",
    image: "/cerradura_t4.png",
    specs: [
      { icon: KeyRound, label: "App remota" },
      { icon: Fingerprint, label: "Huella dactilar" },
      { icon: Droplets, label: "Resistente al agua" },
    ],
  },
  {
    brand: "Tuya",
    model: "Smart Padlock",
    image: "/cerradura_t5.png",
    specs: [
      { icon: KeyRound, label: "Código y app" },
      { icon: Droplets, label: "Uso exterior" },
      { icon: Fingerprint, label: "Huella dactilar" },
    ],
  },
];

function OffersSection() {
  const { ref: introRef, inView: introInView } = useInView<HTMLDivElement>();
  const { ref: carouselRef, inView: carouselInView } =
    useInView<HTMLDivElement>(0.05);

  return (
    <section
      id="ofertas"
      className="relative overflow-hidden bg-background px-6 py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-0 sm:px-10 lg:px-16">
        {/* Intro */}
        <div
          ref={introRef}
          className={introInView ? "animate-fade-up" : "opacity-0"}
        >
          <span className="font-inter text-xs uppercase tracking-[0.3em] text-accent">
            Ofertas
          </span>
          <h2 className="mt-3 max-w-2xl font-podium text-3xl uppercase leading-[0.95] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Productos disponibles
            <br />
            por encargo.
          </h2>
          <p className="mt-5 max-w-lg font-inter text-sm leading-relaxed text-muted sm:text-base">
            Trabajo con estos modelos de TTLock y Tuya. No manejo stock
            físico — cada unidad se consigue bajo pedido según tu proyecto.
          </p>
        </div>
      </div>

      {/* Horizontal carousel */}
      <div className="relative mt-12 lg:mt-16">
        {/* edge fade hints */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent sm:w-10 lg:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-background to-transparent sm:w-10 lg:w-28" />

        <div
          ref={carouselRef}
          className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [-webkit-overflow-scrolling:touch] sm:px-10 sm:scroll-pl-10 lg:px-16 lg:scroll-pl-16"
          style={{ scrollPaddingLeft: "1.5rem" }}
        >
          {PRODUCTS.map((product, i) => (
            <div
              key={product.model}
              className="w-72 shrink-0 snap-start transition-all duration-700 sm:w-80"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: carouselInView ? 1 : 0,
                transform: carouselInView
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              <div className="group border border-white/10 bg-white/[0.03] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-accent/40 hover:shadow-glow-sm">
                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-white/10 bg-white/[0.02]">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.brand} ${product.model}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      onError={(e) => {
                        // Si la imagen falla, oculta el <img> y muestra el ícono placeholder
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove(
                          "hidden"
                        );
                      }}
                    />
                  ) : null}
                  <div
                    className={`${
                      product.image ? "hidden" : "flex"
                    } absolute inset-0 items-center justify-center`}
                  >
                    <Package className="h-10 w-10 text-white/15" />
                  </div>
                  <span className="absolute right-3 top-3 border border-black/30 bg-gold/10 px-2.5 py-1 font-inter text-[9px] uppercase tracking-widest text-black/80">
                    Imagen de referencia
                  </span>
                </div>

                <div className="p-5">
                  <div className="font-inter text-[10px] uppercase tracking-widest text-muted">
                    {product.brand}
                  </div>
                  <div className="mt-1 font-podium text-xl uppercase tracking-tight text-foreground">
                    {product.model}
                  </div>

                  <div className="mt-4 space-y-2">
                    {product.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center gap-2"
                      >
                        <spec.icon className="h-3.5 w-3.5 text-accent" />
                        <span className="font-inter text-xs text-muted">
                          {spec.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={buildWhatsAppLink(product.model)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 bg-accent px-4 py-3 font-inter text-[11px] font-semibold uppercase tracking-widest text-background transition hover:shadow-glow-sm"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OffersSection;