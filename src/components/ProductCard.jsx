const categoryColors = {
  Vegetables: { bg: "#e8f5e9", accent: "#2e7d32" },
  Fruits:     { bg: "#fff3e0", accent: "#e65100" },
  Dairy:      { bg: "#e3f2fd", accent: "#1565c0" },
  Herbs:      { bg: "#f3e5f5", accent: "#6a1b9a" },
};

export default function ProductCard({ product, onAddToCart }) {
  const { name, category, price, unit, inStock, emoji } = product;
  const colors = categoryColors[category] || { bg: "#f5f5f5", accent: "#333" };

  return (
    <div className={`product-card ${!inStock ? "product-card--oos" : ""}`}>
      <div className="product-card-img" style={{ background: colors.bg }}>
        <span className="product-emoji">{emoji}</span>
        {!inStock && <span className="oos-ribbon">Out of Stock</span>}
      </div>
      <div className="product-card-body">
        <span className="product-category-chip" style={{ background: colors.bg, color: colors.accent }}>
          {category}
        </span>
        <h3 className="product-name">{name}</h3>
        <p className="product-unit">{unit}</p>
        <div className="product-card-footer">
          <span className="product-price">₹{price}</span>
          {inStock ? (
            <button className="btn-add" onClick={() => onAddToCart(product)}>
              + Add
            </button>
          ) : (
            <span className="btn-add btn-add--disabled" aria-disabled="true">Unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
}
