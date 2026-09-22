import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { whatsappUrl } from '../data';

export default function ReplacementPolicy() {
  return (
    <main id="main-content" className="page page-top policy-page">
      <section className="page-intro">
        <p className="eyebrow">Customer Guarantee</p>
        <h1 className="page-title">Replacement <span>Policy.</span></h1>
        <p className="page-lede">
          At ProGear Mats, every set is tailored for exact vehicle cabin floor contours. We stand behind our quality with a 7-day hassle-free replacement guarantee.
        </p>
      </section>

      <section className="section policy-content">
        <div className="policy-grid">
          <article className="policy-card highlight-card">
            <Icon name="shield" size={28} />
            <h2>7-Day Direct Replacement Guarantee</h2>
            <p>
              If your ProGear mats do not fit your specified vehicle model correctly or arrive with any manufacturing defect, we will replace them at no extra charge to you.
            </p>
          </article>

          <article className="policy-card">
            <h3>1. Eligible Reasons for Replacement</h3>
            <ul>
              <li><strong>Fitment Mismatch:</strong> Floor mat pattern does not align with your car’s original cabin floor contour (for the year & variant confirmed).</li>
              <li><strong>Manufacturing Defect:</strong> Stitching issues, clip damage, or surface tears upon unboxing.</li>
              <li><strong>Transit Damage or Wrong Item:</strong> Damaged during shipping or incorrect finish received.</li>
            </ul>
          </article>

          <article className="policy-card">
            <h3>2. Easy 3-Step Replacement Process</h3>
            <ol className="policy-steps">
              <li>
                <strong>01. Take photos or a video</strong>
                <span>Snap 2–3 clear photos showing the fitting in your car floor or the affected area.</span>
              </li>
              <li>
                <strong>02. Contact on WhatsApp</strong>
                <span>Share your photos with our support team on <a href={whatsappUrl("Hi ProGear Team, I need help with a replacement request for my order.")} target="_blank" rel="noreferrer">+91 75308 19890</a>.</span>
              </li>
              <li>
                <strong>03. Get your replacement</strong>
                <span>Once verified, our team will dispatch the correct replacement piece or full set immediately.</span>
              </li>
            </ol>
          </article>

          <article className="policy-card">
            <h3>3. Important Guidelines</h3>
            <p>
              To ensure a smooth replacement process:
            </p>
            <ul>
              <li>Replacement requests must be submitted within <strong>7 days of delivery</strong>.</li>
              <li>The mats should be in clean condition without intentional damage or alterations.</li>
              <li>Please confirm your exact car brand, model year, and variant when placing your order so our team checks the correct floor pattern before dispatch.</li>
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
