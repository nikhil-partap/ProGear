import { site, whatsappUrl } from "../data";

export default function Contact() {
  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    window.open(whatsappUrl(`Hi ProGear Mats!\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nCar: ${data.get("car")}\nMessage: ${data.get("message")}`), "_blank", "noopener,noreferrer");
  };

  return (
    <main className="page min-h-screen py-32">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Let’s talk</p>
          <h1 className="title mt-4">Your perfect fit<br />starts here.</h1>
          <p className="mt-5 max-w-md leading-7 text-zinc-400">Share your car details. The form opens WhatsApp with everything filled in—just hit send.</p>
          <div className="mt-10 space-y-6 text-sm">
            <div><p className="text-zinc-600">Call or WhatsApp</p><a className="mt-1 inline-block text-lg hover:text-red-400" href={`tel:+${site.whatsapp}`}>{site.phone}</a></div>
            <div><p className="text-zinc-600">Email</p><a className="mt-1 inline-block text-lg hover:text-red-400" href={`mailto:${site.email}`}>{site.email}</a></div>
            <div><p className="text-zinc-600">Showroom</p><p className="mt-1 max-w-xs text-lg">{site.address}</p><p className="mt-2 text-zinc-500">{site.hours}</p></div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-[#0d0d0d] p-6 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="label">Your name<input className="field" name="name" required placeholder="Rahul Sharma" /></label>
            <label className="label">Phone number<input className="field" name="phone" required type="tel" placeholder="+91 98765 43210" /></label>
          </div>
          <label className="label mt-5">Car brand, model and year<input className="field" name="car" required placeholder="Hyundai Creta, 2024" /></label>
          <label className="label mt-5">What are you looking for?<textarea className="field min-h-32 resize-y" name="message" placeholder="Black 7D mats with red stitching..." /></label>
          <button className="btn-red mt-6 w-full justify-center" type="submit">Continue on WhatsApp <span aria-hidden="true">↗</span></button>
        </form>
      </div>

      <section className="social-qr-section" aria-labelledby="connect-heading">
        <div>
          <p className="eyebrow">Scan & connect</p>
          <h2 className="title mt-4" id="connect-heading">Keep in touch.<br />Share your experience.</h2>
          <p className="mt-5 max-w-lg leading-7 text-zinc-400">Follow new fitments on Instagram or leave a review on our verified Google Business page.</p>
        </div>
        <div className="social-qr-grid">
          <a className="qr-card" href={site.instagram} target="_blank" rel="noreferrer">
            <img src="/images/client/instagram-qr.png" alt="Instagram QR code for ProGear Mats" loading="lazy" />
            <span>Instagram</span>
            <strong>@insta_pro.gear ↗</strong>
          </a>
          <a className="qr-card" href={site.googleReviews} target="_blank" rel="noreferrer">
            <img src="/images/client/google-review-qr.png" alt="Google review QR code for Pro Gear Car Mats" loading="lazy" />
            <span>Google reviews</span>
            <strong>Rated {site.rating} from {site.reviewCount} reviews ↗</strong>
          </a>
        </div>
      </section>
    </main>
  );
}
