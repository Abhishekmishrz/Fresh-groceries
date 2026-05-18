import { useState } from "react";
import { products } from "../data/products";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductListing({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="product-listing">
      <h2 className="section-title">Our Products</h2>
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
