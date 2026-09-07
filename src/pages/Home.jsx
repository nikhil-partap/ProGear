import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collections, heroSlides } from '../catalog';
import { site } from '../data';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { ClosingCta, FitmentShowcase, MaterialStory, Process, Testimonials } from '../components/HomeSections';

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setSlide(i => (i + 1) % heroSlides.length), 6000);
    return () => clearInterval(timer);
  }, [paused]);
  const current = heroSlides[slide];
  return <main id="main-content">
    <section className="hero" aria-label="ProGear collections">
      <div className="hero-photos">{heroSlides.map((item, index) => <img key={item.id} src={item.image} className={index === slide ? 'active' : ''} alt={item.name + ' car mats, ' + item.type} fetchPriority={index === 0 ? 'high' : 'auto'} />)}</div>
      <div className="hero-shade" />
      <div className="page hero-content"><p className="eyebrow light"><span /> BUILT FOR YOUR CAR. MADE FOR YOUR LIFE.</p><h1>A better drive.<br />Starts <em>underfoot.</em></h1><p className="hero-description">Premium car mats. A made-for-you fit.<br />Because every detail of your drive deserves better.</p><div className="hero-actions"><Link to="/shop" className="button red">Shop the collection <Icon name="arrow" /></Link><a href="#real-fitments" className="hero-secondary">See the real fit <Icon name="diagonal" size={17} /></a></div><div className="hero-proof"><Icon name="shield" size={19} /><span>Custom-fit protection</span><i /><span>Delivered across India</span></div></div>
      <div className="page hero-bottom"><div className="hero-pagination">{heroSlides.map((item, index) => <button key={item.id} aria-label={'Show ' + item.name} aria-pressed={slide === index} className={slide === index ? 'active' : ''} onClick={() => { setSlide(index); setPaused(true); }}><span>0{index + 1}</span><i /></button>)}<button className="pause-button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(p => !p)}><Icon name={paused ? 'play' : 'pause'} size={14} /></button></div><Link className="hero-caption" to={'/product/' + current.id}><span>IN THE FRAME</span><strong>{current.name} <small>{current.type}</small></strong><Icon name="diagonal" size={20} /></Link></div>
    </section>
    <section className="benefit-strip"><div className="page benefit-grid">{[['truck', 'Free shipping', 'Across India'], ['car', 'Made for your car', 'A precise, tailored fit'], ['layers', 'Protection in every layer', 'Built for everyday life'], ['chat', 'Real people. Real help.', 'Expert fitment support']].map(([icon, title, text]) => <div key={title}><Icon name={icon} size={27} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>
    <section className="section page" id="collections"><div className="section-heading"><div><p className="eyebrow">THE PROGEAR COLLECTION</p><h2>Find your kind of upgrade.</h2></div><Link className="text-link" to="/shop">Shop all mats <Icon name="arrow" size={18} /></Link></div><div className="collection-grid">{collections.map(p => <ProductCard key={p.id} product={p} />)}</div><p className="collection-footnote">From everyday essentials to the full luxury treatment. There’s a ProGear for your drive.</p></section>
    <MaterialStory /><FitmentShowcase />
    <section className="offer-band"><div className="page"><div><p className="eyebrow light">A LITTLE EXTRA, ON US</p><h2>Your upgrade.<br />Now <em>10% better.</em></h2></div><div><p>Get an additional 10% off when you pay in full.<br />Plus, free shipping anywhere in India.</p><Link className="button white" to="/shop">Choose your mats <Icon name="arrow" /></Link><span className="offer-note">Prefer to pay later? Confirm your order with 20% advance.</span></div></div></section>
    <Testimonials /><Process /><ClosingCta />
    <div className="social-line page"><Icon name="instagram" /><span>A little inspiration for your next upgrade.</span><a href={site.instagram} target="_blank" rel="noreferrer">@insta_pro.gear <Icon name="diagonal" size={16} /></a></div>
  </main>;
}

