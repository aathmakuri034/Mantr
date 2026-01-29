const features = [
  {
    title: "Real Conversations, Real Situations",
    description:
      "From ordering at temples to navigating daily life, practice Sanskrit in realistic scenarios with your AI companion.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M7 10h6m-6 4h10M12 3a9 9 0 0 0-9 9c0 1.6.4 3.1 1.1 4.4L3 21l4.7-1.1A9 9 0 1 0 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "A Curriculum Tailored by Educators",
    description:
      "A structured learning path from basics like family and greetings to advanced topics like philosophy and literature.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M4 19.5V6.2c0-.6.4-1.1 1-1.2L12 4l7 1c.6.1 1 .6 1 1.2v13.3c0 .7-.6 1.2-1.3 1.1L12 19l-6.7 1.6c-.7.2-1.3-.4-1.3-1.1Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 4v15"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Personalized Sanskrit Learning Journey",
    description:
      "Create personalized Sanskrit lessons on any topic you wish, shaping your learning to your own interests and ambitions.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
      >
        <path
          d="M12 21s7-4.4 7-10.3A4.7 4.7 0 0 0 14.3 6c-1.3 0-2.4.6-3 1.6A3.6 3.6 0 0 0 8.3 6 4.7 4.7 0 0 0 5 10.7C5 16.6 12 21 12 21Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-black sm:text-3xl dark:text-white">
          Real practice. Real progress.
        </h2>
        <p className="max-w-2xl text-pretty text-base leading-7 text-black/70 dark:text-white/70">
          Everything you need to move from memorizing to speaking—built around
          conversation, structure, and personalization.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 text-black/70 transition group-hover:bg-black/10 dark:bg-white/10 dark:text-white/80 dark:group-hover:bg-white/15">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-black dark:text-white">
                {f.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-black/70 dark:text-white/70">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
