import { WaitlistForm } from "./WaitlistForm";
import "../css/CTA.css";

export function CTA() {
  return (
    <section id="waitlist" className="cta-section">
      <div className="cta-container">
        <div className="cta-gradient-overlay" />

        <div className="cta-content">
          <h2 className="cta-heading">Your Journey Begins Here</h2>
          <p className="cta-description">
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
