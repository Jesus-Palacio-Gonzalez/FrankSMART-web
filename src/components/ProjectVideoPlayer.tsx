import { useRef, useState, useEffect } from "react";

interface ProjectVideoPlayerProps {
  src: string;
  srcWebm?: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  showFallbackIcon?: boolean;
}

function ProjectVideoPlayer({
  src,
  srcWebm,
  poster,
  className = "",
  videoClassName = "",
  showFallbackIcon = true,
}: ProjectVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleError = () => setHasError(true);
  const handleLoadedData = () => setIsLoaded(true);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const shouldPlayVideo = isInView && !prefersReducedMotion && !hasError;

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
    >
      {shouldPlayVideo && (
        <video
          ref={videoRef}
          className={`h-full w-full object-cover ${videoClassName}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          onError={handleError}
          onLoadedData={handleLoadedData}
          onCanPlay={handleLoadedData}
          aria-hidden="true"
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {(!shouldPlayVideo || !isLoaded) && (
        <>
          {poster && !hasError ? (
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          ) : showFallbackIcon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-10 w-10 text-white/15"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          ) : null}
        </>
      )}
    </div>
  );
}

export default ProjectVideoPlayer;
