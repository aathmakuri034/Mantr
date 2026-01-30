import "../css/Hero.css";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-badge">
            Early access • AI-powered Sanskrit practice
          </p>

          <h1 className="hero-heading">
            The Future of{" "}
            <span className="hero-gradient-text">Sanskrit</span> Learning is
            Here.
          </h1>

          <p className="hero-description">
            Always wanted to fluently converse in Sanskrit? Your personal AI
            tutor will help you every step of the way.
          </p>

          <div className="hero-cta-container">
            <a href="#waitlist" className="hero-cta-primary">
              Get Early Access
            </a>
            <a href="#features" className="hero-cta-secondary">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
