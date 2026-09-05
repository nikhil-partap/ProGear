import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, whatsappUrl } from "../data";

const navItems = [["/", "Home"], ["/shop", "Find your car"], ["/about", "About"], ["/contact", "Contact"]];

export function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles = { "/": "ProGear Mats — Premium Custom-Fit Car Mats", "/shop": "Find Your Car — ProGear Mats", "/about": "About ProGear Mats", "/contact": "Contact ProGear Mats" };
    document.title = pathname.startsWith("/product/") ? "Fitment details — ProGear Mats" : titles[pathname] || "ProGear Mats";
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="page header-inner">
        <Link to="/" className="brand-lockup" aria-label="ProGear Mats home">
          <img src="/images/progear-logo1.png" alt="ProGear Mats" />
          <span>Premium custom-fit mats</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>)}
        </nav>
        <a className="header-cta" href={whatsappUrl("Hi ProGear Mats, I want to check mats for my car.")} target="_blank" rel="noreferrer">Check fit <span aria-hidden="true">↗</span></a>
        <button className="menu-button" type="button" onClick={() => setOpen(current => !current)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? "×" : "☰"}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav page" aria-label="Mobile navigation">{navItems.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>)}<a href={whatsappUrl("Hi ProGear Mats, I want to check mats for my car.")} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="mobile-nav-cta">Chat on WhatsApp <span aria-hidden="true">↗</span></a></nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page footer-grid">
        <div><Link to="/" className="footer-brand">PRO<span>GEAR</span></Link><p className="footer-note">Premium custom-fit car mats for everyday Indian drives.</p></div>
        <div><p className="footer-label">Explore</p><div className="footer-links"><Link to="/shop">Find your car</Link><Link to="/about">About ProGear</Link><Link to="/contact">Contact</Link></div></div>
        <div><p className="footer-label">Talk to the team</p><div className="footer-links"><a href={`tel:${site.whatsapp}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><a href={site.mapLink} target="_blank" rel="noreferrer">Visit the shop ↗</a></div></div>
      </div>
      <div className="page footer-bottom"><span>© {new Date().getFullYear()} ProGear Mats</span><span>Made for the road ahead.</span></div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return <a className="whatsapp-float" href={whatsappUrl("Hi ProGear Mats, I need help choosing mats for my car.")} target="_blank" rel="noreferrer" aria-label="Chat with ProGear Mats on WhatsApp"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a12 12 0 0 0 5.6 1.4c6.5 0 11.9-5.3 11.9-11.8 0-3.2-1.2-6.2-3.5-8.4Zm-8.4 18.2c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2 10 10 0 0 1 10-9.9 9.9 0 0 1 0 19.8Zm5.4-7.4c-.3-.2-1.7-.9-2-.9-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.7.1a8 8 0 0 1-2.4-1.5A9 9 0 0 1 9 11.2c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.5L9 6.9c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.2.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" /></svg><span>WhatsApp</span></a>;
}
