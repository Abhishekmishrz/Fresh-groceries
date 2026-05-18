# FreshDoor — Grocery Ordering App

A simple grocery ordering web app.

## Getting Started

**Prerequisites:** Node.js 18+ and npm installed.

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd fresh-groceries

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

To create a production build:
```bash
npm run build
```

---

## Project Structure

```
src/
├── data/
│   └── products.js          # Static product data (8 grocery items)
├── components/
│   ├── Header.jsx            # Top nav bar with app title and cart count badge
│   ├── CategoryFilter.jsx    # Category filter buttons (All / Vegetables / Fruits / Dairy / Herbs)
│   ├── ProductCard.jsx       # Individual product tile with Add to Cart button
│   ├── ProductListing.jsx    # Product grid + filter logic
│   ├── CartItem.jsx          # Single cart row with quantity controls and remove button
│   └── OrderSummary.jsx      # Cart breakdown, pricing, and Place Order button
├── App.jsx                   # Root component — holds all shared state
├── App.css                   # All styles (global, layout, components)
└── main.jsx                  # React entry point
```

## Why This Structure

**All state in App.jsx** — The app has three pieces of state: `cart`, `selectedCategory`, and `orderPlaced`. Lifting state to `App.jsx` keeps data flow simple and unidirectional (no prop tunneling deeper than two levels). This is appropriate for a project of this scope; a context or external store would be over-engineering.

**ProductListing owns its own filter state** — `selectedCategory` only affects which products are visible and nothing else in the app needs to know about it, so it lives locally inside `ProductListing` rather than being hoisted to `App`.

**Flat component folder** — No sub-folders inside `components/` because there are only 6 components. Adding nesting would add navigation overhead without benefit at this scale.

**Plain CSS, no framework** — A single `App.css` file with CSS custom properties covers all styling needs cleanly. Avoiding Tailwind or CSS Modules keeps the project dependency-light and straightforward to read.

---

## Features

- Browse 8 grocery items across 4 categories
- Filter products by category
- Out-of-stock items (Paneer) are visually distinct and cannot be added to cart
- Cart: add items, adjust quantity, remove items; item count shown in header at all times
- Order Summary: itemised breakdown, ₹40 flat delivery charge, and total
- Place Order clears the cart and shows a confirmation message; button is disabled when cart is empty
