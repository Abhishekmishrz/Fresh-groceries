import { categories } from "../data/products";

const catIcons = {
  All: "🏪", Vegetables: "🥦", Fruits: "🍊", Dairy: "🥛", Herbs: "🌿",
};

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${selected === cat ? "filter-btn--active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          <span className="filter-icon">{catIcons[cat]}</span>
          {cat}
        </button>
      ))}
    </div>
  );
}
