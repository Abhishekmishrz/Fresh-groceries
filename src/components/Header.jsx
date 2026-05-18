export default function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="header-logo-wrap">🛒</div>
        <div>
          <h1 className="header-title">FreshDoor</h1>
          <p className="header-tagline">Farm fresh, delivered daily</p>
        </div>
      </div>
      <div className="cart-pill">
        <svg className="cart-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <span className="cart-pill-text">Cart</span>
        {cartCount > 0 && (
          <span className="cart-count cart-count--active">{cartCount}</span>
        )}
      </div>
    </header>
  );
}
