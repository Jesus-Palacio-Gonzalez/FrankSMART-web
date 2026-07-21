import { ArrowUpRight, Heart } from "lucide-react";
import { NAV_LINKS } from "./lib/navLinks";
import { buildWhatsAppLink } from "./lib/whatsapp";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        {/* Brand + CTA */}
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <span className="font-podium text-2xl font-bold uppercase tracking-wider text-foreground">
              FRANKSMART
            </span>
          </div>

          <a
            href={buildWhatsAppLink("Hola, quiero más información.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 border border-white/15 px-6 py-3 font-inter text-xs uppercase tracking-widest text-foreground transition hover:border-accent/60 hover:bg-accent/5"
          >
            Hablemos
            <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-accent" />
          </a>
        </div>

        {/* Quick nav */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-xs uppercase tracking-widest text-muted transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal row */}
        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter text-xs text-muted">
            © {year} FRANKSMART. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-inter text-xs text-muted transition hover:text-accent"
            >
              Política de privacidad
            </a>

            <p className="flex items-center gap-1.5 font-inter text-xs text-muted">
              Hecho con
              <Heart className="h-3.5 w-3.5 fill-accent text-accent" />
              by{" "}
              <span className="font-semibold text-foreground">
                PalacioTECH
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
