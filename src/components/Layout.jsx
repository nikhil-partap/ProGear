import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site, whatsappUrl } from "../data";

export function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  }, [pathname]);

  return null;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/shop", "Collections"], ["/about", "About"], ["/contact", "Contact"]];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="page flex h-20 items-center justify-between">
        <Link to="/" className="logo-crop" aria-label="ProGear Mats home"><img src="/images/progear-logo.png" alt="ProGear Mats" /></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `nav-link ${isActive ? "text-white" : "text-zinc-400"}`}>{label}</NavLink>)}
        </nav>
        <a className="btn-red hidden sm:inline-flex" href={whatsappUrl("Hi ProGear Mats, I want mats for my car.")} target="_blank" rel="noreferrer">Get a quote <span aria-hidden="true">↗</span></a>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-xl md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? "×" : "☰"}</button>
      </div>
      {open && <nav className="page grid gap-1 border-t border-white/10 py-4 md:hidden">{links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5">{label}</NavLink>)}</nav>}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><div className="text-2xl font-black italic">PRO<span className="text-red-600">GEAR</span></div><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">Premium custom-fit mats for Indian roads and the cars that own them.</p></div>
        <div><p className="eyebrow">Explore</p><div className="mt-4 grid gap-2 text-sm text-zinc-400"><Link to="/shop">Collections</Link><Link to="/about">Our story</Link><Link to="/contact">Contact</Link></div></div>
        <div><p className="eyebrow">Contact</p><div className="mt-4 grid gap-2 text-sm text-zinc-400"><a href={`tel:${site.phone}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><span>{site.hours}</span></div></div>
      </div>
      <div className="page flex flex-wrap justify-between gap-3 border-t border-white/10 py-5 text-xs text-zinc-600"><span>© {new Date().getFullYear()} ProGear Mats</span><span>Made for the road ahead.</span></div>
    </footer>
  );
}
