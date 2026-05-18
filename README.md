# FreshDoor Grocery App

A small React + Vite app for browsing grocery items and placing a mock order.

## Run locally

Prerequisite: Node.js 18+.

```bash
git clone <your-repo-url>
cd fresh-groceries
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
```

## Project Structure

```text
src/
├── data/
│   └── products.js          # Product and category data
├── components/
│   ├── Header.jsx           # Header with cart count
│   ├── CategoryFilter.jsx   # Category buttons
│   ├── ProductCard.jsx      # Product tile and add button
│   ├── ProductListing.jsx   # Product grid and filtering
│   ├── CartItem.jsx         # Cart row with quantity controls
│   └── OrderSummary.jsx     # Cart totals and place-order action
├── App.jsx                  # Main app state and layout
├── App.css                  # Styles
└── main.jsx                 # Entry point
```

## Features

- Product browsing by category
- Add/remove items and update quantity
- Cart summary with subtotal, delivery charge, and total
- Out-of-stock items are visually distinct and cannot be added to cart
- Order placement confirmation
