import { Link } from "react-router-dom";
import CarFinder from "../components/CarFinder";
import ProductCard from "../components/ProductCard";
import { ClosingCta, FitmentShowcase, MaterialStory, Process, Testimonials } from "../components/HomeSections";
import { benefits, products, site, whatsappUrl } from "../data";

const heroImage = "/images/car%20wise%20images/Fortuner%20automatic%209D/0ef4d54c-c30c-43b7-8d56-7c2d2381da33.jpg";

export default function Home() {
  return <main>
    <section className="home-hero"><div className="page hero-grid"><div className="hero-copy"><p className="eyebrow">Premium custom-fit car mats</p><h1>Made for your car.<br /><span>Ready for the road.</span></h1><p className="hero-lede">Explore real 7D and 9D fitments for your vehicle. Share your model and get a clear recommendation on WhatsApp.</p><div className="hero-actions"><a className="btn-primary" href={whatsappUrl("Hi ProGear Mats, I want to check mats for my car.")} target="_blank" rel="noreferrer">Check my fit on WhatsApp <span aria-hidden="true">↗</span></a><Link className="btn-secondary" to="/shop">Browse car models</Link></div><p className="hero-note">No online payment. Confirm the right fit with the team.</p></div><div className="hero-media"><img src={heroImage} alt="ProGear 9D mats fitted in a Toyota Fortuner" /><div className="hero-image-label"><span>Real fitment photo</span><strong>Toyota Fortuner · 9D</strong></div></div></div></section>

    <section className="trust-strip"><div className="page trust-grid">{benefits.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div></section>

    <section className="section catalogue-discovery"><div className="page"><div className="section-heading"><div><p className="eyebrow">Shop the fitment library</p><h2 className="section-title">Start with a car,<br />not a category.</h2></div><div className="section-side-copy"><p>One catalogue for both 7D and 9D patterns. Every card is tagged so you can see the fitment type at a glance.</p><Link className="text-link" to="/shop">View the full catalogue <span aria-hidden="true">↗</span></Link></div></div><div className="catalog-grid catalogue-preview">{products.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}</div></div></section>

    <section className="highlight-band"><div className="page highlight-inner"><div><p className="eyebrow">Made for real Indian drives</p><h2>Clean cabin. Clear fitment. Zero guesswork.</h2></div><p>From the first message to the final fit, ProGear keeps the enquiry simple and personal.</p></div></section>

    <Testimonials />
    <FitmentShowcase />
    <MaterialStory />
    <Process />

    <section className="page finder-section"><div className="finder-panel"><div><p className="eyebrow">Can’t see your car?</p><h2 className="section-title">Tell us what<br />you drive.</h2><p className="section-lede">Choose your brand and model. We’ll continue the fitment check on WhatsApp.</p></div><CarFinder /></div></section>
    <ClosingCta />
  </main>;
}
