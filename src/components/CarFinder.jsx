import { useState } from "react";
import { carBrands, carModels, whatsappUrl } from "../data";

export default function CarFinder({ compact = false }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const models = brand ? carModels[brand] : [];
  const ready = Boolean(brand && model);
  return <div className={`car-finder ${compact ? "compact" : ""}`}><div><label className="label">Car brand<select className="field" value={brand} onChange={event => { setBrand(event.target.value); setModel(""); }}><option value="">Choose a brand</option>{carBrands.map(item => <option key={item}>{item}</option>)}</select></label><label className="label">Car model<select className="field" value={model} onChange={event => setModel(event.target.value)} disabled={!brand}><option value="">Choose a model</option>{models.map(item => <option key={item}>{item}</option>)}</select></label></div><a className={`btn-primary ${!ready ? "disabled" : ""}`} href={ready ? whatsappUrl(`Hi ProGear Mats, I need mats for my ${brand} ${model}.`) : undefined} target="_blank" rel="noreferrer" aria-disabled={!ready} tabIndex={ready ? undefined : -1}>Check my fit <span aria-hidden="true">↗</span></a><p>No payment required. We’ll confirm the suitable fit on WhatsApp.</p></div>;
}
