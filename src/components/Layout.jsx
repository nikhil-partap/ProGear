import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { site, whatsappUrl } from '../data';
import { collections } from '../catalog';
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
  const [count, setCount] = useState(cartCount);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname, location.search]);
  useEffect(() => { const update = () => setCount(JSON.parse(localStorage.getItem('progear-cart') || '[]').reduce((sum, item) => sum + item.quantity, 0)); update(); window.addEventListener('storage', update); window.addEventListener('progear-cart-updated', update); return () => { window.removeEventListener('storage', update); window.removeEventListener('progear-cart-updated', update); }; }, [location.pathname]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="announcement"><div className="page"><span><Icon name="truck" size={15} /> FREE SHIPPING ACROSS INDIA</span><span>YOUR NEXT UPGRADE, FOR LESS. <b>EXTRA 10% OFF ON FULL PAYMENT</b> <Icon name="arrow" size={14} /></span><a href={'tel:' + site.whatsapp}>Need help? Call us <Icon name="diagonal" size={13} /></a></div></div>
    <header className="site-header"><div className="page header-inner"><Link to="/" className="brand-lockup" aria-label="ProGear Mats home"><img src="/images/progear-logo1.png" alt="ProGear premium car mats" /></Link><nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([to, label]) => <NavLink to={to} end={to === '/'} key={to}>{label}</NavLink>)}</nav><div className="header-actions"><Link className="header-help" to="/contact">Let’s talk <Icon name="diagonal" size={16} /></Link><Link to="/cart" className="cart-link" aria-label={'Shopping cart, ' + count + ' items'}><Icon name="bag" /><span className="cart-word">Cart</span><span className="cart-count">{count}</span></Link><button className="icon-button menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}><Icon name={open ? 'close' : 'menu'} /></button></div></div>{open && <nav className="mobile-nav page" id="mobile-navigation" aria-label="Mobile navigation">{[...navItems, ['/contact', 'Contact & support'], ['/cart', 'Cart']].map(([to, label]) => <NavLink to={to} end={to === '/'} key={to}>{label}<Icon name="arrow" size={16} /></NavLink>)}</nav>}</header>
  </>;
}
export function Footer() {
  return <footer className="site-footer"><div className="page footer-grid"><div className="footer-brand-column"><Link to="/" className="footer-wordmark">PRO<span>GEAR</span><i>®</i></Link><p>A better drive starts with the details.<br />Premium car mats, made for your life.</p><div className="footer-socials"><a href={site.instagram} target="_blank" rel="noreferrer" aria-label="ProGear on Instagram"><Icon name="instagram" /></a><a href={whatsappUrl('Hi ProGear, I need help choosing my mats.')} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><Icon name="chat" /></a><a href={site.googlePage} target="_blank" rel="noreferrer">Google ↗</a></div></div><div><h3>THE COLLECTION</h3>{collections.map(p => <Link key={p.id} to={'/product/' + p.id}>{p.name}{p.id === 'universal' ? '' : ' / ' + p.type}</Link>)}</div><div><h3>HERE TO HELP</h3><Link to="/contact">Contact us</Link><Link to="/gallery">Customer gallery</Link><Link to="/policies">Returns & cancellations</Link><Link to="/terms">Terms & conditions</Link></div><div><h3>TALK TO PROGEAR</h3>{['+91 75308 19890', '+91 88515 85780', '+91 87007 11921'].map(n => <a href={'tel:' + n.replaceAll(' ', '')} key={n}>{n}</a>)}<a href={'mailto:' + site.email}>{site.email}</a><a href={site.mapLink} target="_blank" rel="noreferrer" className="footer-location">Rohini, New Delhi <Icon name="diagonal" size={14} /></a></div></div><div className="page footer-bottom"><span>© {new Date().getFullYear()} ProGear Mats. All rights reserved.</span><span>MADE FOR THE ROAD AHEAD.</span><span>DELIVERING PAN INDIA <Icon name="truck" size={17} /></span></div></footer>;
}
export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={whatsappUrl('Hi ProGear Mats, help me choose mats for my car.')} target="_blank" rel="noreferrer" aria-label="Chat with ProGear on WhatsApp"><Icon name="chat" size={22} /><span>Let’s find your fit</span></a>;
}

