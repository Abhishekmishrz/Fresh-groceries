import { useState } from "react";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function addToCart(product) {
    setOrderPlaced(false);
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  }

  function updateQty(productId, delta) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(productId) {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }

  function placeOrder() {
    setCart([]);
    setOrderPlaced(true);
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main className="main-layout">
        <ProductListing onAddToCart={addToCart} />
        <OrderSummary
          cart={cart}
          onUpdateQty={updateQty}
          onRemove={removeItem}
          onPlaceOrder={placeOrder}
          orderPlaced={orderPlaced}
        />
      </main>
    </div>
  );
}
