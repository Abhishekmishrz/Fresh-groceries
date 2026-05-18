import CartItem from "./CartItem";

const DELIVERY_CHARGE = 40;

export default function OrderSummary({ cart, onUpdateQty, onRemove, onPlaceOrder, orderPlaced }) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal + DELIVERY_CHARGE;
  const isEmpty = cart.length === 0;

  return (
    <aside className="order-summary">
      <div className="summary-header">
        <h2 className="section-title">Order Summary</h2>
      </div>

      <div className="summary-body">
        {orderPlaced && (
          <div className="order-confirmation">
            <span className="confirmation-icon">✓</span>
            <p>Your order has been placed! We'll deliver it fresh to your door.</p>
          </div>
        )}

        {isEmpty ? (
          !orderPlaced && (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p className="empty-cart-msg">Your cart is empty.<br />Add some fresh items to get started!</p>
            </div>
          )
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQty={onUpdateQty}
                  onRemove={onRemove}
                />
              ))}
            </div>

            <div className="price-breakdown">
              <div className="price-row">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="price-row">
                <span>Delivery</span>
                <span>₹{DELIVERY_CHARGE}</span>
              </div>
              <div className="price-row price-row--total">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </>
        )}

        <button
          className="btn-place-order"
          onClick={onPlaceOrder}
          disabled={isEmpty}
        >
          Place Order →
        </button>
      </div>
    </aside>
  );
}
