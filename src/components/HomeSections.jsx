import { Link } from "react-router-dom";
import { fitmentGallery, fitmentGroups, materials, processSteps, site, testimonials, whatsappUrl } from "../data";

export function MaterialStory() {
  return (
    <section className="section border-y border-white/10 bg-[#0c0c0c]">
      <div className="page grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div className="media-panel">
          <img src="/images/red-diamond-mats.png" alt="Close-up of red diamond stitched ProGear car mats" loading="lazy" />
          <div className="media-badge"><b>Multi-layer</b><span>cabin protection</span></div>
        </div>
        <div>
          <p className="eyebrow">Made for daily life</p>
          <h2 className="title mt-4">Protection that<br />looks premium.</h2>
          <p className="mt-6 max-w-xl leading-7 text-zinc-400">Every surface, edge and layer has a job: contain the mess, stay securely in place and complement your cabin.</p>
          <div className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {materials.map(([number, title, copy]) => <article key={number} className="material-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section page">
      <div className="section-head">
        <div><p className="eyebrow">Simple from the start</p><h2 className="title mt-4">Three steps.<br />One perfect fit.</h2></div>
        <p className="max-w-md leading-7 text-zinc-500">No confusing checkout. Tell us what you drive, compare the right options and confirm everything with a real person.</p>
      </div>
      <div className="process-line mt-14 grid gap-5 md:grid-cols-3">
        {processSteps.map(([number, title, copy]) => <article key={number} className="process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>
  );
}

export function FitmentShowcase() {
  return (
    <section className="section page">
      <div className="section-head">
        <div><p className="eyebrow">Real model-specific work</p><h2 className="title mt-4">Fittings made<br />for your car.</h2></div>
        <p className="max-w-md leading-7 text-zinc-500">Our current custom-fit library includes these confirmed 7D and 9D floor patterns. Share your exact year and variant before ordering.</p>
      </div>
      <div className="fitment-gallery mt-12">
        {fitmentGallery.map(item => <figure key={item.model}><img src={item.image} alt={`${item.model} ${item.type} ProGear mat fitment`} loading="lazy" /><figcaption><span>{item.type} fitting</span><b>{item.model}</b></figcaption></figure>)}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {fitmentGroups.map(group => <article key={group.type} className="fitment-list"><div><span>{group.type}</span><h3>{group.title}</h3></div><ul>{group.models.map(model => <li key={model}>{model}</li>)}</ul></article>)}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="pb-28">
      <div className="page">
        <div className="section-head"><div><p className="eyebrow">Verified Google reviews</p><h2 className="title mt-4">Loved after<br />the first drive.</h2></div><a className="rating" href={site.googlePage} target="_blank" rel="noreferrer"><span>★★★★★</span><b>{site.rating} from {site.reviewCount} reviews</b><p>View the Google business page ↗</p></a></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map(item => <figure key={item.name} className="review-card"><div className="text-red-500">★★★★★</div><blockquote>“{item.quote}”</blockquote><figcaption><b>{item.name}</b><span>{item.car}</span></figcaption></figure>)}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="page pb-24">
      <div className="closing-cta">
        <div><p className="eyebrow">Ready for an upgrade?</p><h2>Let’s find your fit.</h2><p>Share your car details and get a personalised recommendation.</p></div>
        <div className="flex flex-wrap gap-3"><a className="btn-red" href={whatsappUrl("Hi ProGear Mats, help me choose mats for my car.")} target="_blank" rel="noreferrer">Start on WhatsApp <span aria-hidden="true">↗</span></a><Link className="btn-dark" to="/shop">Browse collections</Link></div>
      </div>
    </section>
  );
}
