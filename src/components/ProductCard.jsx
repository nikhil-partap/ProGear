import { Link } from 'react-router-dom';
import { money, startingPrice } from '../catalog';
import Icon from './Icon';

export default function ProductCard({ product }) {
  return <article className={'collection-card ' + (product.id === 'universal' ? 'universal-card' : '')}>
    <Link className="collection-image" to={'/product/' + product.id} aria-label={'Shop ' + product.name}>
      {product.images.length ? <img src={product.id === 'premium' ? product.images[1] : product.images[0]} alt={product.name + ' ' + product.type + ' car mat'} loading="lazy" /> : <div className="universal-art"><span>PROGEAR / ESSENTIALS</span><strong>EVERY CAR.<br />EVERY DAY.</strong><p>Trim to fit. Ready to go.</p></div>}
      <span className="product-tag">{product.type}</span><span className="collection-arrow"><Icon name="diagonal" /></span>
    </Link>
    <div className="collection-copy"><p className="small-label">{product.label}</p><h3><Link to={'/product/' + product.id}>{product.name}</Link></h3><p className="collection-description">{product.features[0]} · {product.features[1]}</p><div className="collection-bottom"><span>From <strong>{money(startingPrice(product))}</strong></span><div className="mini-swatches" aria-label={product.colours.length + ' colour options'}>{product.colours.slice(0, 4).map(c => <i key={c.name} title={c.name} style={{ background: c.hex }} />)}{product.colours.length > 4 && <span>+{product.colours.length - 4}</span>}</div></div></div>
  </article>;
}

