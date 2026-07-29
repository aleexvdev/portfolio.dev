import { useEffect, useState } from "react";

const STACK = [
  "React",
  "TypeScript",
  "Astro",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

export function HeroTerminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(STACK[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const current = STACK[lineIndex];
    const isComplete = !deleting && text === current;
    const isEmpty = deleting && text === "";

    const delay = deleting ? 40 : isComplete ? 1800 : 70;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setDeleting(true);
        return;
      }

      if (isEmpty) {
        setDeleting(false);
        setLineIndex((prev) => (prev + 1) % STACK.length);
        return;
      }

      setText((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [text, deleting, lineIndex, reducedMotion]);

  const displayText = reducedMotion ? STACK[0] : text;

  return (
    <div
      className="mx-auto mt-6 w-full max-w-xl rounded-xl border border-white/10 bg-black/40 px-4 py-3 font-mono text-sm text-white/80 shadow-lg backdrop-blur-sm md:text-base"
      aria-hidden="true"
    >
      <div className="mb-2 flex items-center gap-2 text-white/40">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-xs tracking-wide">~/alexvdev</span>
      </div>
      <p className="text-left">
        <span className="text-brand-muted">$</span>{" "}
        <span className="text-brand">build</span> --with{" "}
        <span className="text-white">{displayText}</span>
        {!reducedMotion && (
          <span className="ml-0.5 inline-block h-[1.1em] w-2 animate-pulse bg-brand-muted align-middle" />
        )}
      </p>
    </div>
  );
}
