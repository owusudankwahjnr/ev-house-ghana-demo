Act as a Senior Full-Stack Frontend Engineer and UX Architect. I need you to build a multi-page, interactive HTML, CSS, and Vanilla JavaScript web demo for "Volta EV Parts Ghana"—an e-commerce platform specializing in tropicalized Electric Vehicle (EV) parts, charging systems, and conversion kits for the Ghanaian market. 

The goal of this demo is to tell a compelling customer use-case story from the perspective of a Ghanaian commercial EV driver (e.g., an Uber/Bolt driver in Greater Accra or a delivery rider using an electric Aboboyaa/tricycle).

### 1. Color Palette & Visual Vibe
- Vibe: Premium Eco-Friendly Automotive Tech. Clean, modern, trustworthy, and tailored for Ghana.
- Primary Colors: Deep Forest Green (#065F46) and Electric Eco-Green (#10B981) to represent clean energy and sustainability.
- Accents: Solar Gold (#F59E0B) for star ratings, trust badges, and warnings.
- Backgrounds & Text: Crisp Off-White/Light Slate (#F8FAFC) background with Dark Charcoal (#0F172A) text for readability.
- Components: Use modern glassmorphism cards, 8px rounded borders, subtle hover elevations, and clean CSS grid layouts. 

### 2. Multi-Page Structure & Customer Use-Case Story
Build a cohesive 3-page interactive demo navigated via a top header. The pages must tell the following story:

- PAGE 1: index.html (The Problem & Discovery Landing Page)
  - Hero Section: "Powering Ghana’s Clean Mobility Transition." Include an interactive "Vehicle Matcher" form where users select their EV make (e.g., Nissan Leaf, BYD Atto 3, Electric Tricycle) to filter parts.
  - Story Section: A brief visual narrative card: "Meet Kwame, an Accra rideshare driver who doubled his daily profit by converting to electric—and relies on Volta EV for instant replacement parts."
  - Featured Grids: Display 4 top products (Lithium Battery Packs, 7kW Wallbox Chargers, Reinforced Tropicalized Suspension, Solar Inverters) with prices formatted explicitly in Ghanaian Cedis (e.g., "GH₵ 4,500").

- PAGE 2: catalog.html (The Solution & Interactive Catalog)
  - Interactive Filtering: A sidebar with working JS filters for Category, Price Range (in GH₵), and Vehicle Compatibility.
  - Dynamic Product Grid: Use JavaScript to render at least 8 distinct EV spare parts. Include badges like "100% Imported Genuine," "Fits Accra Terrain," and "In Stock - Kumasi Hub."
  - Interactive Modal: When a user clicks a product card, open a clean CSS/JS modal showing technical specifications (Voltage, IP65 rating), customer reviews from local Ghanaian drivers, and an "Add to Cart" button.

- PAGE 3: checkout-story.html (The Ghanaian Checkout Experience)
  - A 3-step interactive checkout flow demonstrating local market friction-solvers.
  - Step 1 (Delivery): Radio buttons for Region (Greater Accra, Ashanti, Western) and an input field for "Ghana Post GPS Digital Address (e.g., GA-183-8164)."
  - Step 2 (Localized Payment): Interactive payment tabs highlighting "MTN MoMo (Mobile Money)," "Telecel Cash," "AT Money," and "Visa/Mastercard." Selecting MoMo should dynamically display a phone number input and a simulated "Send MoMo Prompt to Phone" animation.
  - Step 3 (Confirmation): A simulated success screen showing an order tracking timeline with "24-Hour Express Dispatch via Motorbike Delivery."

### 3. Technical & Architectural Requirements
- Strict Tech Stack: Write clean, standard HTML5, modern CSS3 (using CSS Variables for the eco-friendly color palette), and clean Vanilla JavaScript (ES6+). Do NOT use React, Vue, or Tailwind build steps—keep it lightweight and natively runnable in the browser.
- File Organization: Structure the project cleanly with `index.html`, `catalog.html`, `checkout-story.html`, a shared `styles/main.css`, and a `js/app.js` file for filtering, cart state, and modal interactivity.
- Data Structure: Create an embedded JSON array in `app.js` containing the mock Ghanaian EV products so the catalog filtering and cart logic work dynamically across pages using `localStorage`.

### 4. Execution Instructions
First, provide an `implementation_plan.md` outlining the component structure and data model. Once approved, generate the exact code for all files, ensure inter-page navigation links work seamlessly, and launch the built-in browser preview for me to review the end-to-end customer journey.