const CART_KEY = "refuweegee-cart";

export type Cart = Record<string, number>;

function readCart(): Cart {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeCart(cart: Cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent("cart:updated", { detail: cart }));
}

export function getCart(): Cart {
  return readCart();
}

export function addToCart(id: number, quantity = 1) {
  const cart = readCart();
  const key = String(id);
  cart[key] = (cart[key] ?? 0) + quantity;
  writeCart(cart);
}

export function updateQuantity(id: number, quantity: number) {
  const cart = readCart();
  const key = String(id);
  if (quantity <= 0) {
    delete cart[key];
  } else {
    cart[key] = quantity;
  }
  writeCart(cart);
}

export function removeFromCart(id: number) {
  const cart = readCart();
  delete cart[String(id)];
  writeCart(cart);
}

export function clearCart() {
  writeCart({});
}

export function getCartCount(cart: Cart = readCart()): number {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}


// Force redeploy