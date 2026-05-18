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

## Project layout

```text
src/
├── components/      # UI components
├── data/            # Product and category data
├── App.jsx          # Main app state and layout
├── App.css          # Styles
└── main.jsx         # Entry point
```

## Features

- Product browsing by category
- Add/remove items and update quantity
- Cart summary with subtotal, delivery charge, and total
- Out-of-stock handling
- Order placement confirmation
