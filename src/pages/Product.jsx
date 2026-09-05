import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, whatsappUrl } from "../data";

export default function Product() {
  const { id } = useParams();
  const product = products.find(item => item.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    setSelectedImage(0);
  }, [id]);
  if (!product) return <main className="page page-top missing-page"><div><h1 className="page-title">Fitment not found.</h1><Link to="/shop" className="btn-primary">Back to catalogue</Link></div></main>;
  const related = products.filter(item => item.id !== product.id && item.type === product.type).slice(0, 3);
  const message = `Hi ProGear Mats, I want to enquire about ${product.model} ${product.type} mats. My car year/variant is:`;
  return <main className="page page-top product-page"><Link className="back-link" to="/shop">← Back to all cars</Link><div className="product-layout"><div><div className="product-gallery"><img src={product.images[Math.min(selectedImage, product.images.length - 1)]} alt={`${product.model} ${product.type} mat fitment`} /><span className="fitment-badge">{product.type}</span></div><div className="thumb-row" aria-label="Fitment photos">{product.images.map((image, index) => <button key={image} type="button" className={index === selectedImage ? "active" : ""} onClick={() => setSelectedImage(index)} aria-label={`View fitment photo ${index + 1}`}><img src={image} alt="" /></button>)}</div></div><div className="product-copy"><div className="product-title-line"><p className="eyebrow">{product.type} fitment</p><span className={product.confirmed ? "status-pill" : "status-pill pending"}>{product.confirmed ? "Listed fitment" : "Confirm details"}</span></div><h1 className="page-title">{product.model}</h1><p className="product-lede">{product.description}</p><ul className="product-highlights">{product.highlights.map(item => <li key={item}><span>✓</span>{item}</li>)}</ul><a className="btn-primary full-mobile" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Enquire on WhatsApp <span aria-hidden="true">↗</span></a><p className="microcopy">Send your exact year and variant so the team can check the pattern before ordering.</p></div></div><section className="details-block"><div><p className="eyebrow">Fitment details</p><h2 className="section-title">Made around<br />your cabin.</h2><p className="section-lede">The photos show the current gallery entry for this vehicle. Availability and exact compatibility are confirmed in conversation.</p></div><dl className="details-list"><div><dt>Coverage</dt><dd>{product.coverage}</dd></div><div><dt>Construction</dt><dd>{product.material}</dd></div><div><dt>Care</dt><dd>{product.care}</dd></div><div><dt>Fitment</dt><dd>{product.fitment}</dd></div></dl></section>{related.length > 0 && <section className="related-section"><div className="section-heading"><div><p className="eyebrow">More in the library</p><h2 className="section-title">Explore more {product.type} fits.</h2></div><Link className="text-link" to="/shop">View all cars ↗</Link></div><div className="catalog-grid">{related.map(item => <ProductCard key={item.id} product={item} />)}</div></section>}</main>;
}
