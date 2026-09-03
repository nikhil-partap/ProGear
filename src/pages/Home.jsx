import { Link } from "react-router-dom";
import CarFinder from "../components/CarFinder";
import ProductCard from "../components/ProductCard";
import { ClosingCta, FitmentShowcase, MaterialStory, Process, Testimonials } from "../components/HomeSections";
import { benefits, products, whatsappUrl } from "../data";

const ticker = ["Tailored fit", "Premium finish", "All-weather protection", "Easy to clean", "WhatsApp assistance"];

export default function Home() {
  return (
    <>
      <section className="hero min-h-[820px] pt-20">
        <div className="page relative z-10 flex min-h-[740px] items-center py-20">
          <div className="max-w-2xl hero-copy">
            <p className="eyebrow mb-5">Engineered for every drive</p>
            <h1 className="display">Your car.<br /><span>Your fit.</span><br />No compromise.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">Custom-fit premium mats that protect every curve of your cabin—and look like they were born there.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link className="btn-red" to="/shop">Explore collections <span aria-hidden="true">↗</span></Link>
              <a className="btn-dark" href={whatsappUrl("Hi ProGear Mats, help me find the right mat for my car.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="hero-stats mt-12 flex flex-wrap gap-7 text-sm text-zinc-400"><span><b className="text-white">100%</b> model-specific</span><span><b className="text-white">Multi-layer</b> protection</span><span><b className="text-white">Easy</b> to clean</span></div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </section>

      <div className="ticker" aria-label="Product qualities">
        <div>{[...ticker, ...ticker].map((item, index) => <span key={`${item}-${index}`}>{item}<b>◆</b></span>)}</div>
      </div>

      <section className="border-b border-white/10 bg-[#0c0c0c]"><div className="page grid md:grid-cols-3">{benefits.map(([number, title, copy]) => <div key={number} className="benefit"><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></div>)}</div></section>

      <section className="section page">
        <div className="section-head"><div><p className="eyebrow">Choose your coverage</p><h2 className="title mt-4">Two collections.<br />Made for your car.</h2></div><Link className="text-link" to="/shop">Compare 7D and 9D <span aria-hidden="true">↗</span></Link></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">{products.map(product => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <MaterialStory />
      <FitmentShowcase />
      <Process />

      <section className="page pb-28">
        <div className="fit-panel">
          <div><p className="eyebrow">Find your fit</p><h2 className="title mt-4">Tell us what<br />you drive.</h2><p className="mt-5 max-w-lg text-zinc-400">Choose your car and continue on WhatsApp. We’ll confirm the year, floor pattern and perfect-fit options.</p></div>
          <CarFinder />
        </div>
      </section>

      <Testimonials />
      <ClosingCta />
    </>
  );
}
