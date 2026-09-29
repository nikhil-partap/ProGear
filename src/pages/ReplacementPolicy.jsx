import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { whatsappUrl } from '../data';

export default function ReplacementPolicy() {
  return (
    <main id="main-content" className="page page-top policy-page">
      <section className="page-intro policy-intro">
        <p className="eyebrow">Customer Guarantee</p>
        <h1 className="page-title">Replacement <span>Policy.</span></h1>
        <p className="page-lede">
          At ProGear Mats, every set is tailored for exact vehicle cabin floor contours. We stand behind our quality with a 7-day hassle-free replacement guarantee.
        </p>
      </section>

      <section className="section policy-content">
        <div className="policy-grid">
          <article className="policy-card highlight-card">
            <div className="policy-card-icon">
              <Icon name="shield" size={24} />
            </div>
            <h2>7-Day Hassle-Free Replacement</h2>
            <p>
              If your ProGear mats do not fit your specified vehicle model correctly or arrive with any manufacturing defect, we will replace them at no extra charge to you.
            </p>
          </article>

          <article className="policy-card">
            <h3>Eligible Reasons for Replacement</h3>
            <ul className="policy-list">
              <li><strong>Fitment Mismatch:</strong> Floor mat pattern does not align with your car’s original cabin floor contour (for the year & variant confirmed).</li>
              <li><strong>Manufacturing Defect:</strong> Stitching issues, clip damage, or surface tears upon unboxing.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h3>Replacement Process</h3>
            <ul className="policy-list">
              <li>
                <strong>Take photos or a video:</strong> Snap 2–3 clear photos showing the fitting in your car floor or the affected area.
              </li>
              <li>
                <strong>Contact on WhatsApp:</strong> Share your photos with our support team on{' '}
                <a href={whatsappUrl("Hi ProGear Team, I need help with a replacement request for my order.")} target="_blank" rel="noreferrer">
                  +91 75308 19890
                </a>.
              </li>
              <li>
                <strong>Get your replacement:</strong> Once verified, our team will dispatch the correct replacement piece or full set immediately.
              </li>
            </ul>
          </article>

          <article className="policy-card">
            <h3>Important Guidelines</h3>
            <p>
              To ensure a smooth replacement process:
            </p>
            <ul className="policy-list">
              <li>Replacement requests must be submitted within <strong>7 days of delivery</strong>.</li>
              <li>The mats should be in clean condition without intentional damage or alterations.</li>
              <li>Please confirm your exact car brand, model year, and variant when placing your order so our team checks the correct floor pattern before dispatch.</li>
              <li>Replacements are not accepted for custom-made products or change-of-mind requests, unless specifically permitted by Pro Gear.</li>
            </ul>
          </article>
        </div>

        <div className="policy-cta">
          <div>
            <h3>Need assistance with your mats?</h3>
            <p>Our fitment experts are available on WhatsApp to help resolve any issue right away.</p>
          </div>
          <div className="policy-cta-buttons">
            <a className="btn-primary" href={whatsappUrl("Hi ProGear Mats, I have a question regarding replacement.")} target="_blank" rel="noreferrer">
              Chat on WhatsApp <Icon name="arrow" />
            </a>
            <Link className="btn-secondary" to="/contact">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

