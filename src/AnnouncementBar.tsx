import { useState } from "react";
import { X } from "lucide-react";

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center border-b border-white/10 bg-white/[0.04] px-10 py-2.5 text-center overflow-hidden">
      <p className="animate-scroll-left font-inter text-[11px] uppercase tracking-widest text-accent sm:text-xs">
        <span className="tracking-[0.2em]"></span> Cerraduras inteligentes, controles de acceso y video porteros
      </p>

      <button
        onClick={() => setVisible(false)}
        aria-label="Cerrar aviso"
        className="absolute right-4 text-muted transition hover:text-accent"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

export default AnnouncementBar;
