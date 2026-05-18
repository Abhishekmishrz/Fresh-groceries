export default function CartItem({ item, onUpdateQty, onRemove }) {
  const { product, quantity } = item;
  const lineTotal = product.price * quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-emoji">{product.emoji}</div>
      <div className="cart-item-info">
        <p className="cart-item-name">{product.name}</p>
        <p className="cart-item-unit">₹{product.price} / {product.unit}</p>
      </div>
      <div className="cart-item-right">
        <div className="cart-item-controls">
          <button className="qty-btn" onClick={() => onUpdateQty(product.id, -1)}>−</button>
          <span className="qty-value">{quantity}</span>
          <button className="qty-btn" onClick={() => onUpdateQty(product.id, 1)}>+</button>
        </div>
        <div className="cart-item-subtotal-row">
          <span className="cart-item-subtotal">₹{lineTotal}</span>
          <button className="btn-remove" onClick={() => onRemove(product.id)} title="Remove">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
