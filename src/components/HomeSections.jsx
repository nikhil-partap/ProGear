import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fitments, materials, processSteps, site, testimonials, whatsappUrl } from "../data";

export function MaterialStory() {
  return <section className="section soft-section"><div className="page two-column-story"><div className="story-image"><img src={fitments.find(item => item.id === "fortuner")?.images[1]} alt="9D mats fitted in a Toyota Fortuner" loading="lazy" /><span>Real client fitment photo</span></div><div><p className="eyebrow">Why fitment matters</p><h2 className="section-title">A better floor starts with the right pattern.</h2><p className="section-lede">Every vehicle has its own floor shape. Share your exact model and variant, and the ProGear team will help you choose the right coverage.</p><div className="material-grid">{materials.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></div></section>;
}

export function Process() {
  return <section className="section"><div className="page"><div className="section-heading"><div><p className="eyebrow">Simple enquiry flow</p><h2 className="section-title">From car model<br />to right fit.</h2></div><p className="section-side-copy">No confusing checkout. Tell us what you drive and speak to the team directly.</p></div><div className="process-grid">{processSteps.map(([number, title, copy]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>;
}

export function FitmentShowcase() {
  const visible = fitments.slice(0, 8);
  return <section className="section fitment-section"><div className="page"><div className="section-heading"><div><p className="eyebrow">Car-wise catalogue</p><h2 className="section-title">See the fit.<br />Find your car.</h2></div><div className="section-side-copy"><p>Browse real fitment images from the current library.</p><Link className="text-link" to="/shop">View all models <span aria-hidden="true">↗</span></Link></div></div><div className="fitment-grid">{visible.map(item => <Link to={`/product/${item.id}`} className="fitment-card" key={item.id}><img src={item.images[0]} alt={`${item.model} ${item.type} mat fitment`} loading="lazy" /><span className="fitment-badge">{item.type}</span><strong>{item.model}</strong></Link>)}</div></div></section>;
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches || testimonials.length < 2) return undefined;
    timer.current = window.setInterval(() => setCurrent(index => (index + 1) % testimonials.length), 4500);
    return () => window.clearInterval(timer.current);
  }, [paused]);
  const review = testimonials[current];
  return <section className="section reviews-section"><div className="page"><div className="section-heading"><div><p className="eyebrow">From Google</p><h2 className="section-title">Good mats.<br />Happy drives.</h2></div><a className="text-link" href={site.googlePage} target="_blank" rel="noreferrer">See all reviews <span aria-hidden="true">↗</span></a></div><div className="review-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)} onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)} onTouchCancel={() => setPaused(false)} role="region" aria-label="Customer reviews"><div className="review-stars" aria-label="Google review">★★★★★</div><blockquote aria-live="polite">“{review.quote}”</blockquote><div className="review-byline" aria-live="polite"><div className="review-avatar"><span aria-hidden="true">{review.initials}</span><img src={review.avatar} alt={`${review.name} profile photo`} loading="lazy" onError={event => { event.currentTarget.style.display = "none"; }} /></div><div className="review-byline-copy"><strong>{review.name}</strong><span>{review.source}</span></div></div><div className="review-controls" aria-label="Choose a review">{testimonials.map((item, index) => <button key={item.name} type="button" className={index === current ? "active" : ""} aria-label={`Show review from ${item.name}`} aria-pressed={index === current} onClick={() => setCurrent(index)} />)}</div></div></div></section>;
}

export function ClosingCta() {
  return <section className="page closing-section"><div className="closing-cta"><div><p className="eyebrow">Have a car in mind?</p><h2>Let’s find your fit.</h2><p>Share your model and get a direct recommendation from ProGear.</p></div><div className="cta-actions"><a className="btn-primary" href={whatsappUrl("Hi ProGear Mats, help me choose mats for my car.")} target="_blank" rel="noreferrer">Start on WhatsApp <span aria-hidden="true">↗</span></a><Link className="btn-secondary" to="/shop">Browse cars</Link></div></div></section>;
}
