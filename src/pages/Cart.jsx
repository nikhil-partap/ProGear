import { useState } from 'react';
import { Link } from 'react-router-dom';
import { money } from '../catalog';
import Icon from '../components/Icon';
import { Button } from '../components/ui/button';
import { readCart, saveCart } from '../cart';
import { whatsappUrl } from '../data';
export default function Cart() {
  const [items, setItems] = useState(readCart);
  const [error, setError] = useState('');
  function update(next) {
    try { saveCart(next); setItems(next); setError(''); }
    catch { setError('Your browser could not save the cart. Please allow local storage and try again.'); }
  }
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = items.map(item => `${item.name} (${item.type}), ${item.category}, ${item.seats}-seater, ${item.colour}, ${[item.brand, item.model].filter(Boolean).join(' ') || 'Vehicle to be confirmed'}, qty ${item.quantity} — ${money(item.price)}`).join('\n');
  return <main id="main-content" className="page page-top cart-page">
    <div className="page-intro"><p className="eyebrow">Your selection</p><h1 className="page-title">Your cart</h1><p className="page-lede">Review your mats, then confirm fitment and delivery with our team.</p></div>
    {error && <p role="alert" className="notice">{error}</p>}
    {items.length ? <div className="cart-layout"><div className="cart-list">{items.map(item => <article className="cart-item" key={item.key}>
      {item.image ? <img src={item.image} alt={`${item.name} mats`} /> : <div className="cart-placeholder"><Icon name="layers" /><span>Universal</span></div>}
      <div><h2>{item.name}</h2><p>{item.type} · {item.category} · {item.seats}-seater<br />{item.colour || 'Standard finish'}<br />{[item.brand, item.model].filter(Boolean).join(' ') || 'Vehicle to be confirmed'}</p>
      <div className="cart-item-actions"><div className="quantity-control"><Button variant="ghost" size="icon" aria-label={`Decrease ${item.name} quantity`} disabled={item.quantity === 1} onClick={() => update(items.map(x => x.key === item.key ? {...x, quantity: x.quantity - 1} : x))}><Icon name="minus" size={14} /></Button><span aria-live="polite">{item.quantity}</span><Button variant="ghost" size="icon" aria-label={`Increase ${item.name} quantity`} onClick={() => update(items.map(x => x.key === item.key ? {...x, quantity: x.quantity + 1} : x))}><Icon name="plus" size={14} /></Button></div><Button variant="ghost" size="sm" onClick={() => update(items.filter(x => x.key !== item.key))}>Remove</Button></div></div><strong>{money(item.price * item.quantity)}</strong>
    </article>)}</div><aside className="order-summary"><h2>Order summary</h2><div className="summary-line"><span>Subtotal</span><strong>{money(total)}</strong></div><div className="summary-line"><span>Shipping</span><strong>Free</strong></div><div className="summary-line total"><span>Total</span><strong>{money(total)}</strong></div><Button asChild className="cart-checkout"><a href={whatsappUrl(`Hi ProGear Mats, I want to confirm my cart:\n${message}\nTotal: ${money(total)}`)} target="_blank" rel="noreferrer">Continue on WhatsApp <Icon name="arrow" /></a></Button><p className="summary-note">The team will confirm your vehicle fitment and final delivery details before dispatch.</p></aside></div> : <div className="empty-state"><Icon name="bag" size={30} /><h2>Your cart is empty</h2><p>Find the right mats for your car.</p><Button asChild><Link to="/shop">Shop mats <Icon name="arrow" /></Link></Button></div>}
  </main>;
}
