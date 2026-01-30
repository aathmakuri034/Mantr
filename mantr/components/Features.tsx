import "../css/Features.css";

const features = [
  {
    title: "Real Conversations, Real Situations",
    description:
      "From ordering at temples to navigating daily life, practice Sanskrit in realistic scenarios with your AI companion.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="features-icon"
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
        className="features-icon"
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
        className="features-icon"
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
    <section id="features" className="features-section">
      <div className="features-header">
        <h2 className="features-heading">Real practice. Real progress.</h2>
        <p className="features-description">
          Everything you need to move from memorizing to speaking—built around
          conversation, structure, and personalization.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f) => (
          <div key={f.title} className="features-card">
            <div className="features-card-header">
              <div className="features-icon-wrapper">{f.icon}</div>
              <h3 className="features-card-title">{f.title}</h3>
            </div>
            <p className="features-card-description">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
