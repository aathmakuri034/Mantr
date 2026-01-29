import { WaitlistForm } from "./WaitlistForm";

export function CTA() {
  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(900px_circle_at_20%_10%,color-mix(in_oklab,var(--accent-saffron)_35%,transparent)_0%,transparent_55%),radial-gradient(900px_circle_at_90%_20%,color-mix(in_oklab,var(--accent-royal)_25%,transparent)_0%,transparent_55%)]" />

        <div className="relative">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">
            Your Journey Begins Here
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base leading-7 text-black/70 dark:text-white/70">
            Be among the first to experience a new reality in Sanskrit language
            learning. Join the exclusive waitlist and we&apos;ll notify you the
            moment the doors open.
          </p>

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
