export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="flex flex-col items-start gap-6">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium tracking-wide text-black/70 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            Early access • AI-powered Sanskrit practice
          </p>

          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-black sm:text-6xl dark:text-white">
            The Future of{" "}
            <span className="bg-gradient-to-r from-[color:var(--accent-saffron)] via-[color:var(--accent-gold)] to-[color:var(--accent-royal)] bg-clip-text text-transparent">
              Sanskrit
            </span>{" "}
            Learning is Here.
          </h1>

          <p className="max-w-2xl text-pretty text-lg leading-8 text-black/70 dark:text-white/70">
            Always wanted to fluently converse in Sanskrit? Your personal AI
            tutor will help you every step of the way.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#waitlist"
              className="inline-flex h-12 items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 text-sm font-semibold text-black/80 backdrop-blur transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
            >
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
