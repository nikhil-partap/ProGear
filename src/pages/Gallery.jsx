import { Link } from 'react-router-dom';
import { fitments } from '../data';
export default function Gallery() {
  return <main id="main-content" className="page page-top gallery-page"><div className="page-intro"><p className="eyebrow">Customer gallery</p><h1 className="page-title">Fitted in real cars</h1><p className="page-lede">Explore our customers’ 7D and 9D mat fitments.</p></div><div className="fitment-grid">{fitments.map(item => <Link to={item.type.includes('9D') ? '/product/premium' : '/product/truevalue'} className="fitment-card" key={item.id}><img src={item.images[0]} alt={`${item.model} ${item.type} mat fitment`} loading="lazy" /><span className="fitment-badge">{item.type}</span><strong>{item.model}</strong></Link>)}</div></main>;
}
