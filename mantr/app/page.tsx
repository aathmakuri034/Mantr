import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(1200px_circle_at_10%_0%,color-mix(in_oklab,var(--accent-saffron)_25%,transparent)_0%,transparent_55%),radial-gradient(1200px_circle_at_95%_10%,color-mix(in_oklab,var(--accent-royal)_18%,transparent)_0%,transparent_55%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.03))]" />

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-black dark:text-white"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/5 text-black dark:bg-white/10 dark:text-white">
            म
          </span>
          Mantr
        </a>
        <a
          href="#waitlist"
          className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Get Early Access
        </a>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6 text-xs text-black/60 dark:text-white/60">
        © {new Date().getFullYear()} Mantr. All rights reserved.
      </footer>
    </div>
  );
}
