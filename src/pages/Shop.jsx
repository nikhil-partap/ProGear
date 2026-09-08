import { Link } from 'react-router-dom';
import { collections } from '../catalog';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
export default function Shop() {
  return <main id="main-content" className="page page-top"><section className="page-intro"><p className="eyebrow">The ProGear collection</p><h1 className="page-title">Shop car mats</h1><p className="page-lede">Choose your mats, finish and vehicle. We’ll confirm the fit before dispatch.</p></section><div className="collection-grid shop-collection-grid">{collections.map(product => <ProductCard key={product.id} product={product} />)}</div><section className="shop-bottom"><p className="eyebrow">Not sure where to start?</p><h2 className="section-title">Normal or Luxury.<br />We’ll help you choose.</h2><div className="category-explainer"><article><span>NORMAL</span><h3>Made for everyday drives</h3><p>Citroen, Maruti Suzuki, Tata, Mahindra, Hyundai, Toyota, Kia, Honda, Ford, Isuzu, Jeep, MG, Nissan, Renault, Skoda, Volkswagen and Mitsubishi.</p></article><article><span>LUXURY</span><h3>Made for a considered cabin</h3><p>Mercedes-Benz, BMW, Audi, Land Rover, Volvo and Lexus. The team will confirm your vehicle details before dispatch.</p></article></div><Button asChild variant="outline"><Link to="/contact">Talk to the team</Link></Button></section></main>;
}
