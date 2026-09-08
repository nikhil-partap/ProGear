export const CART_KEY = 'progear-cart';
export function readCart() {
  try {
    const items = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(items) ? items.filter(item => item && typeof item.key === 'string' && Number.isFinite(item.price) && item.price >= 0 && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch { return []; }
}
export function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('progear-cart-updated'));
}
export function mergeCartItem(items, item) {
  const existing = items.find(entry => entry.key === item.key);
  return existing ? items.map(entry => entry.key === item.key ? { ...entry, quantity: entry.quantity + item.quantity } : entry) : [...items, item];
}
