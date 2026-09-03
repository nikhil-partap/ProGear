import { useState } from "react";
import { carBrands, carModels, whatsappUrl } from "../data";

export default function CarFinder({ compact = false }) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const models = brand ? carModels[brand] : [];
  const ready = brand && model;

  const chooseBrand = event => {
    setBrand(event.target.value);
    setModel("");
  };

  return (
    <div className={`car-finder ${compact ? "compact" : ""}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="label">Car brand
          <select className="field" value={brand} onChange={chooseBrand}>
            <option value="">Choose a brand</option>
            {carBrands.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="label">Car model
          <select className="field" value={model} onChange={event => setModel(event.target.value)} disabled={!brand}>
            <option value="">Choose a model</option>
            {models.map(item => <option key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      <a
        className={`btn-red mt-4 w-full justify-center ${!ready ? "pointer-events-none opacity-40" : ""}`}
        href={ready ? whatsappUrl(`Hi ProGear Mats, I need mats for my ${brand} ${model}.`) : undefined}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!ready}
        tabIndex={ready ? undefined : -1}
      >
        Check my fit <span aria-hidden="true">↗</span>
      </a>
      <p className="mt-4 text-center text-xs text-zinc-600">No payment required. We’ll confirm suitable options on WhatsApp.</p>
    </div>
  );
}
