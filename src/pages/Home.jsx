import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collections, heroSlides, money, startingPrice } from '../catalog';
import { site } from '../data';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import Icon from '../components/Icon';
import { ClosingCta, FitmentShowcase, Testimonials } from '../components/HomeSections';

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
      <div className="page hero-content"><p className="eyebrow light">PROGEAR CAR MATS</p><h1>Made for<br />your car.</h1><p className="hero-description">Tailored coverage. Everyday comfort.</p><div className="hero-actions"><Button asChild variant="destructive"><Link to="/shop">Shop mats <Icon name="arrow" /></Link></Button></div></div>
      <div className="mobile-product-caption"><div><span>{current.type}</span><h1>{current.name} car mats</h1><p>From {money(startingPrice(collections.find(p => p.id === current.id)))}</p></div><Button asChild><Link to={'/product/' + current.id}>Explore <Icon name="arrow" size={16} /></Link></Button></div>
      <div className="page hero-bottom"><div className="hero-pagination">{heroSlides.map((item, index) => <button key={item.id} aria-label={'Show ' + item.name} aria-pressed={slide === index} className={slide === index ? 'active' : ''} onClick={() => { setSlide(index); setPaused(true); }}><span>0{index + 1}</span><i /></button>)}<button className="pause-button" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'} onClick={() => setPaused(p => !p)}><Icon name={paused ? 'play' : 'pause'} size={14} /></button></div><Link className="hero-caption" to={'/product/' + current.id}><span>IN THE FRAME</span><strong>{current.name} <small>{current.type}</small></strong><Icon name="diagonal" size={20} /></Link></div>
    </section>
    <section className="benefit-strip"><div className="page benefit-grid">{[['truck', 'Free shipping', 'Across India'], ['car', 'Made for your car', 'A precise, tailored fit'], ['layers', 'Protection in every layer', 'Built for everyday life'], ['chat', 'Real people. Real help.', 'Expert fitment support']].map(([icon, title, text]) => <div key={title}><Icon name={icon} size={27} /><div><strong>{title}</strong><span>{text}</span></div></div>)}</div></section>
    <section className="section page" id="collections"><div className="section-heading"><div><p className="eyebrow">THE PROGEAR COLLECTION</p><h2>Shop car mats</h2></div><Link className="text-link" to="/shop">Shop all mats <Icon name="arrow" size={18} /></Link></div><div className="collection-grid">{[...collections.filter(p => p.id !== 'universal'), ...collections.filter(p => p.id === 'universal')].map(p => <ProductCard key={p.id} product={p} />)}</div></section>
    <FitmentShowcase />
    <section className="payment-note page"><Icon name="truck" size={20} /><p><strong>Free shipping across India.</strong> Extra 10% off on full payment.</p></section>
    <Testimonials /><ClosingCta />
    <div className="social-line page"><Icon name="instagram" /><span>A little inspiration for your next upgrade.</span><a href={site.instagram} target="_blank" rel="noreferrer">@insta_pro.gear <Icon name="diagonal" size={16} /></a></div>
  </main>;
}

