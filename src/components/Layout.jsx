import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site, whatsappUrl } from '../data';
import { collections } from '../catalog';
import { readCart } from '../cart';
import Icon from './Icon';

const navItems = [['/', 'Home'], ['/shop', 'Shop now'], ['/gallery', 'Customer gallery'], ['/about', 'Our story']];
export function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const product = collections.find(p => pathname === '/product/' + p.id);
    const titles = { '/': 'Premium Car Mats, Made for Your Drive', '/shop': 'Shop All Collections', '/about': 'Our Story', '/contact': 'Contact & Support', '/gallery': 'Customer Photos', '/cart': 'Your Cart', '/policies': 'Returns, Cancellations & Refunds', '/terms': 'Terms & Conditions' };
    document.title = (product ? product.name + ' ' + product.type + ' Car Mats' : titles[pathname] || 'ProGear Mats') + ' | ProGear';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
export function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [count, setCount] = useState(cartCount);
  const location = useLocation();
  useEffect(() => {
    if (!open) return;
    const dismiss = event => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
      else if (event.type === 'pointerdown' && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 901px)');
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', dismiss);
    document.addEventListener('pointerdown', dismiss);
    desktop.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', dismiss);
      document.removeEventListener('pointerdown', dismiss);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);
  useEffect(() => setOpen(false), [location.pathname, location.search]);
  useEffect(() => { const update = () => setCount(readCart().reduce((sum, item) => sum + item.quantity, 0)); update(); window.addEventListener('storage', update); window.addEventListener('progear-cart-updated', update); return () => { window.removeEventListener('storage', update); window.removeEventListener('progear-cart-updated', update); }; }, [location.pathname]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="announcement"><div className="page"><span><Icon name="truck" size={15} /> FREE SHIPPING ACROSS INDIA</span><span><b>EXTRA 10% OFF ON FULL PAYMENT</b> <Icon name="arrow" size={14} /></span><a href={'tel:' + site.whatsapp}>Need help? Call us <Icon name="diagonal" size={13} /></a></div></div>
    <header ref={headerRef} className="site-header"><div className="page header-inner"><Link to="/" className="brand-lockup" aria-label="ProGear Mats home"><img src="/images/progear-logo1.png" alt="ProGear premium car mats" /></Link><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([to, label]) => <NavLink to={to} end={to === '/'} key={to}>{label}</NavLink>)}</nav><div className="header-actions"><Link className="header-help" to="/contact">Let’s talk <Icon name="diagonal" size={16} /></Link><Link to="/cart" className="cart-link" aria-label={'Shopping cart, ' + count + ' items'}><Icon name="bag" /><span className="cart-word">Cart</span><span className="cart-count">{count}</span></Link><button ref={menuRef} type="button" className="icon-button menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}><Icon name={open ? 'close' : 'menu'} /></button></div></div>{open && <nav className="mobile-nav page" id="mobile-navigation" aria-label="Mobile navigation">{[...navItems, ['/contact', 'Contact & support'], ['/cart', 'Cart']].map(([to, label]) => <NavLink to={to} end={to === '/'} key={to} onClick={() => setOpen(false)}><span>{label}</span><Icon name="arrow" size={16} /></NavLink>)}</nav>}</header>
  </>;
}
export function Footer() {
  return <footer className="site-footer">
    <div className="page footer-grid">
      <div className="footer-brand-column">
        <Link to="/" className="footer-wordmark" aria-label="ProGear home">PRO<span>GEAR</span><sup>®</sup></Link>
        <p>Car mats made for your drive.<br />Delivered across India.</p>
        <div className="footer-socials">
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="ProGear on Instagram"><Icon name="instagram" size={20} /></a>
          <a href={whatsappUrl('Hi ProGear, I need help choosing my mats.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Icon name="chat" size={20} /></a>
          <a href={site.googlePage} target="_blank" rel="noreferrer" aria-label="ProGear on Google Maps">Google <Icon name="diagonal" size={14} /></a>
        </div>
      </div>
      <nav className="footer-link-group" aria-label="Footer collections"><h3>Shop mats</h3>{collections.map(p => <Link key={p.id} to={'/product/' + p.id}>{p.name}</Link>)}</nav>
      <nav className="footer-link-group" aria-label="Footer support"><h3>Explore & help</h3><Link to="/gallery">Customer gallery</Link><Link to="/about">Our story</Link><Link to="/contact">Contact us</Link><Link to="/contact">Order support</Link></nav>
      <div className="footer-contact"><h3>Talk to ProGear</h3><p>Need help finding your fit?</p><a className="footer-primary-phone" href={'tel:' + site.whatsapp}>+91 75308 19890 <Icon name="diagonal" size={17} /></a><div className="footer-other-phones">{['+91 88515 85780', '+91 87007 11921'].map(n => <a href={'tel:' + n.replaceAll(' ', '')} key={n}>{n}</a>)}</div><a href={'mailto:' + site.email}>{site.email}</a><a href={site.mapLink} target="_blank" rel="noreferrer" className="footer-location">Rohini, New Delhi <Icon name="diagonal" size={14} /></a></div>
    </div>
    <div className="page footer-bottom"><span>© {new Date().getFullYear()} ProGear Mats</span><span>All rights reserved.</span></div>
  </footer>;
}
export function WhatsAppFloat() {
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const update = () => setTyping(['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName));
    document.addEventListener('focusin', update);
    document.addEventListener('focusout', update);
    return () => { document.removeEventListener('focusin', update); document.removeEventListener('focusout', update); };
  }, []);
  return <a className={'whatsapp-float' + (typing ? ' is-typing' : '')} href={whatsappUrl('Hi ProGear Mats, help me choose mats for my car.')} target="_blank" rel="noreferrer" aria-label="Chat with ProGear on WhatsApp"><Icon name="chat" size={22} /><span>Let’s find your fit</span></a>;
}

