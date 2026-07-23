import { useState } from "react";
import { X } from "lucide-react";

function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center gap-2.5 border-b border-white/10 bg-white/[0.04] px-10 py-2.5 text-center">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>

      <p className="font-inter text-[11px] uppercase tracking-widest text-muted sm:text-xs">
        Este sitio está en construcción — algunos contenidos son de ejemplo
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
