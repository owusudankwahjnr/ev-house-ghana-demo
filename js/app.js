// EV House - Application Logic & Database

// 1. Mock Product Database (with stock images from Unsplash and real e-commerce metrics)
const PRODUCTS = [
  {
    id: "tropical-battery-pack",
    requiresQuote: true,
    name: "72V 100Ah Tropicalized LiFePO4 Battery Pack",
    category: "batteries",
    price: 18500,
    compatibility: ["Electric Tricycle", "Aboboyaa"],
    badges: ["Heat-Shielded LFP Cells", "IP67 Water Resistant", "Kumasi Hub"],
    rating: 4.9,
    image: "images/product_battery_1783794876013.jpg",
    stock: 5,
    warranty: "3-Year Manufacturer Warranty",
    description: "Designed explicitly for high ambient heat in Ghana. Built using heavy-duty thermal insulation and robust LiFePO4 chemistry to resist thermal runaway on bumpy roads. Perfect for delivery tricycles and aboboyaas.",
    specs: {
      "Voltage": "72V Nominal",
      "Capacity": "100Ah (7.2 kWh)",
      "Cell Chemistry": "LiFePO4 (LFP)",
      "Thermal Protection": "Aero-Gel Insulation",
      "IP Rating": "IP67 Dust & Water Proof",
      "Lifecycles": "3,500+ Cycles"
    },
    reviews: [
      { name: "Kofi A.", rating: 5, text: "Swapped this into my delivery aboboyaa. Even in Accra afternoon traffic, it stays cool and ranges 120km." },
      { name: "Emmanuel O.", rating: 5, text: "Excellent durability. It has survived three rainy seasons in Kumasi without single drop of water inside." }
    ]
  },
  {
    id: "nissan-leaf-battery",
    requiresQuote: true,
    freeFixing: true,
    name: "40kWh Gen-2 Leaf High-Ambient Replacement Pack",
    category: "batteries",
    price: 52000,
    compatibility: ["Nissan Leaf"],
    badges: ["Active Air Cooling", "Refurbished Premium", "Accra Hub"],
    rating: 4.8,
    image: "images/product_battery_1783794876013.jpg",
    stock: 2,
    warranty: "2-Year Local Warranty",
    description: "Upgrade pack for Nissan Leafs in West Africa. Features a modified Battery Management System (BMS) preset for tropical thresholds and upgraded cooling channels to prevent rapid degradation in coastal climates.",
    specs: {
      "Capacity": "40 kWh",
      "SOH Level": "92% Guaranteed SOH",
      "BMS Profile": "Tropicalized Firmware v2.1",
      "Warranty": "3-Year Local Warranty",
      "Charging Limit": "Up to 50kW CHAdeMO",
      "Cell Layout": "96 module pairs"
    },
    reviews: [
      { name: "Ama K.", rating: 5, text: "My old Leaf battery was down to 6 bars. This upgrade gave me back 200km range! The Accra support team did the fitment in 1 day." },
      { name: "Bright T.", rating: 4, text: "Pricey but absolutely worth it. Range degradation has stabilized completely despite the Accra heat." }
    ]
  },
  {
    id: "wallbox-charger-7kw",
    name: "7kW Smart Wallbox EV Charger (IP66, Surge Protected)",
    category: "chargers",
    price: 6800,
    compatibility: ["Nissan Leaf", "BYD Atto 3", "Hyundai Kona"],
    badges: ["Surge Protection", "Type-2 Connector", "In Stock - Accra"],
    rating: 4.7,
    image: "images/product_charger_1783794883988.jpg",
    stock: 12,
    warranty: "2-Year Local Warranty",
    description: "Robust 32A home and commercial charging station. Built-in heavy-duty lightning and grid surge protection specifically designed for the fluctuations of the ECG power grid in Ghana.",
    specs: {
      "Power Output": "7.4kW (Single Phase)",
      "Current Limit": "Adjustable 6A - 32A",
      "Connector": "Type 2 Tethered (5m)",
      "Grid Protection": "Integrated RCD + ECG Surge Arrester",
      "Enclosure": "IK10 / IP66 Outdoor Rated",
      "Connectivity": "Wi-Fi & RFID Card Unlock"
    },
    reviews: [
      { name: "Dr. Mensah", rating: 5, text: "Very stable charging. The built-in surge protector saved it during a lightsout power surge last week." },
      { name: "Yaw B.", rating: 4, text: "Charges my Atto 3 overnight. Solid construction, mounted it outside on my porch." }
    ]
  },
  {
    id: "tropicalized-suspension",
    freeFixing: true,
    name: "Reinforced Heavy-Duty Suspension Coil Spring (Pair)",
    category: "suspension",
    price: 2450,
    compatibility: ["Nissan Leaf", "Hyundai Kona"],
    badges: ["Fits Accra Terrain", "Double-Coated Steel", "1-Yr Warranty"],
    rating: 4.9,
    image: "images/product_suspension_1783794894109.jpg",
    stock: 8,
    warranty: "1-Year Warranty",
    description: "Custom-stiffened suspension coil springs engineered to handle the additional weight of EV battery packs while driving through potholes and unpaved roads in Accra and Kumasi. Adds 15mm ground clearance.",
    specs: {
      "Material": "Double-Tempered Silicon Steel",
      "Load Rating": "+25% Load Capacity",
      "Height Gain": "+15mm Ground Clearance",
      "Coating": "Anti-Corrosive Epoxy Powder",
      "Includes": "Left & Right Front Springs",
      "Compatibility": "Leaf ZE0/AZE0, Kona EV"
    },
    reviews: [
      { name: "Kwame A.", rating: 5, text: "I drive rideshare around Accra. Before, my Leaf would scrap on speed bumps. Now, it glides over them perfectly!" },
      { name: "Sena F.", rating: 5, text: "Highly recommend. Handling feels tighter and no more bottoming out on the construction site paths." }
    ]
  },
  {
    id: "solar-charging-inverter",
    name: "5kW Hybrid Solar Inverter & EV Charging Controller",
    category: "solar",
    price: 15500,
    compatibility: ["Nissan Leaf", "BYD Atto 3", "Electric Tricycle", "Hyundai Kona"],
    badges: ["Solar Priority Charging", "Pure Sine Wave", "Kumasi Hub"],
    rating: 4.6,
    image: "images/product_solar_1783794910248.jpg",
    stock: 3,
    warranty: "5-Year Manufacturer Warranty",
    description: "Smart solar inverter that coordinates PV panel input with EV charging. Direct-couples solar power into your EV battery without running through battery banks first, maximizing efficiency.",
    specs: {
      "Power Rating": "5000W Continuous",
      "Surge Power": "10000VA",
      "MPPT Voltage": "120VDC - 450VDC",
      "EV Charge Mode": "Eco / Solar-Only / Grid-Boost",
      "Efficiency": "97.5% CEC Rating",
      "Output": "230VAC 50Hz Pure Sine"
    },
    reviews: [
      { name: "John D.", rating: 4, text: "Perfect for charging my tricycle off-grid. Free solar power is the future for Accra delivery services." },
      { name: "Naa L.", rating: 5, text: "Now I charge my Kona during the day directly from solar panels on my shop roof. Zero fuel bills!" }
    ]
  },
  {
    id: "conversion-motor-kit",
    requiresQuote: true,
    name: "3kW Brushless DC Motor & Controller Conversion Kit",
    category: "conversion",
    price: 7500,
    compatibility: ["Electric Tricycle", "Aboboyaa"],
    badges: ["High-Torque Gearbox", "Complete Conversion", "Accra Hub"],
    rating: 4.8,
    image: "images/product_motor_1783794902321.jpg",
    stock: 4,
    warranty: "1.5-Year Warranty",
    description: "High-efficiency BLDC motor replacement kit. Built to convert standard petrol Aboboyaas into electric vehicles. Includes heavy-duty speed controller, throttle grips, and mounting hardware.",
    specs: {
      "Motor Power": "3000W (BLDC)",
      "Controller Specs": "72V 80A Smart Sine-Wave",
      "Cooling Type": "Natural Air Flow Fin Design",
      "Max Torque": "120 N.m at axle",
      "Kit Components": "Motor, Controller, Harness, Throttle",
      "Regenerative Braking": "Yes, recovers up to 8% range"
    },
    reviews: [
      { name: "Mustapha I.", rating: 5, text: "Converted my old petrol tricycle. It runs completely silent now and climbs the Hills of McCarthy without struggling!" },
      { name: "Osei W.", rating: 4, text: "The kit is complete. Wiring took half a day but everything works. regenerative braking is very nice." }
    ]
  },
  {
    id: "tropicalized-ac-compressor",
    freeFixing: true,
    name: "Tropicalized Electric A/C Compressor (High-Efficiency)",
    category: "suspension",
    price: 4950,
    compatibility: ["Nissan Leaf", "Hyundai Kona"],
    badges: ["Low Power Draw", "R134a Compatible", "In Stock - Accra"],
    rating: 4.7,
    image: "images/product_motor_1783794902321.jpg",
    stock: 7,
    warranty: "1-Year Warranty",
    description: "Upgraded electric air conditioner compressor designed to operate under continuous high loads. Consumes 25% less battery power compared to stock units while maintaining optimal cabin cooling.",
    specs: {
      "Voltage Input": "360V DC",
      "Refrigerant": "R134a / R1234yf",
      "Power Draw": "850W Max (Energy Saving)",
      "Cooling Power": "12,000 BTU/h",
      "Noise Level": "<45 dB Silent Run",
      "Mounting Pattern": "Direct Bolt-on Replacement"
    },
    reviews: [
      { name: "Ransford Y.", rating: 5, text: "Crucial for Accra ride-hailing. AC runs all day, but battery range drops by only 5% now instead of 20%!" },
      { name: "Sylvia E.", rating: 4, text: "Works great. Blows freezing cold air, and the Leaf stays quiet at red lights." }
    ]
  },
  {
    id: "smart-ev-drivetrain-ecu",
    name: "EV House Smart Drivetrain Controller Unit (ECU)",
    category: "conversion",
    price: 9200,
    compatibility: ["Nissan Leaf", "Electric Tricycle", "BYD Atto 3"],
    badges: ["Custom Ghanaian Map", "Plug & Play", "Accra Hub"],
    rating: 4.8,
    image: "images/product_solar_1783794910248.jpg",
    stock: 6,
    warranty: "2-Year Warranty",
    description: "Advanced aftermarket ECU that allows customization of driving profiles. Includes a customized 'Accra City Drive' profile that maximizes regenerative braking on typical city gridlocks.",
    specs: {
      "Processor": "Dual-Core ARM Cortex",
      "Profiles": "City Eco / Highway / Heavy Load",
      "Braking Regen": "Adjustable (0% to 25%)",
      "Interface": "OBD2 / Bluetooth App Control",
      "Enclosure": "Anodized Aluminum IP65",
      "Power Supply": "12V Low Voltage input"
    },
    reviews: [
      { name: "Daniel N.", rating: 5, text: "The 'Accra City Map' setting is brilliant. I get 15km extra range per charge just from the smart deceleration." },
      { name: "Prince S.", rating: 5, text: "Plugged it into my converted e-tricycle. Custom parameters let me set power curve just right for loads." }
    ]
  }
];



// 3. UI Toast Notification helper
function showToast(message) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.style.position = "fixed";
    container.style.bottom = "2rem";
    container.style.right = "2rem";
    container.style.zIndex = "2000";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.75rem";
    document.body.appendChild(container);
  }
  
  const toast = document.createElement("div");
  toast.style.background = "rgba(15, 23, 42, 0.95)";
  toast.style.color = "white";
  toast.style.padding = "0.75rem 1.5rem";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "0.9rem";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.3)";
  toast.style.display = "flex";
  toast.style.alignItems = "center";
  toast.style.gap = "0.75rem";
  toast.style.borderLeft = "4px solid var(--color-primary-neon)";
  toast.style.transform = "translateY(20px)";
  toast.style.opacity = "0";
  toast.style.transition = "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
  
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#05ff85" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  }, 10);
  
  setTimeout(() => {
    toast.style.transform = "translateY(-20px)";
    toast.style.opacity = "0";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// 4. Rating Stars SVG Generator
function getRatingStarsSvg(rating) {
  let starsHtml = "";
  for (let i = 0; i < 5; i++) {
    const color = i < Math.round(rating) ? "var(--color-accent-gold)" : "rgba(255,255,255,0.15)";
    starsHtml += `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="color: ${color}; margin-right: 2px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  return starsHtml;
}

// 5. Product Card Builder (Stock Image Render)
function createProductCardHtml(product) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.setAttribute("data-id", product.id);
  
  const primaryBadge = product.badges[0];
  const compats = product.compatibility.map(c => `<span class="compat-tag">${c}</span>`).join("");
  
  const stockText = product.stock <= 3 ? `Only ${product.stock} Left` : "In Stock";
  const stockColor = product.stock <= 3 ? "#ef4444" : "var(--color-primary-neon)";
  const stockBg = product.stock <= 3 ? "rgba(239, 68, 68, 0.1)" : "rgba(5, 255, 133, 0.1)";
  
  card.innerHTML = `
    <div class="product-img-wrapper" style="position: relative; overflow: hidden; background:var(--color-bg-pure);">
      <span class="product-badge-float badge badge-eco">${primaryBadge}</span>
      <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" class="product-card-img">
    </div>
    <div class="product-info">
      <div class="product-compatibilities">
        ${compats}
      </div>
      <h3 class="product-name">${product.name}</h3>
      
      <div class="rating-stock-row" style="margin-bottom: 1.25rem;">
        <div class="product-rating" style="margin-bottom:0;">
          <div style="display:flex; align-items:center; margin-right:0.25rem;">
            ${getRatingStarsSvg(product.rating)}
          </div>
          <span style="font-weight:700; color:var(--color-text-white); font-size:0.8rem;">${product.rating}</span>
        </div>
        <span style="font-size: 0.7rem; font-weight: 800; color: ${stockColor}; background: ${stockBg}; padding: 0.2rem 0.5rem; border-radius: 4px; text-transform:uppercase; letter-spacing:0.05em;">
          ${stockText}
        </span>
      </div>
      
      <div style="margin-top:auto; padding-top:1.15rem; border-top:1px solid var(--color-border);">
        ${product.freeFixing ? 
          `<div class="free-fixing-badge">
             <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
             Free Fixing Included
           </div>` : ''}
        <div class="price-row" style="margin-bottom:1rem;">
          <span style="font-size:0.75rem; font-weight:800; color:var(--color-text-slate); text-transform:uppercase; letter-spacing:0.05em;">Price</span>
          <div class="product-price" style="font-size:1.1rem; color:var(--color-accent-gold);">Request for Price</div>
        </div>
        <div class="card-actions-row">
          <button class="btn-quick-view quick-view-btn" data-id="${product.id}" title="Quick View">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/></svg>
          </button>
          <div style="display:flex; gap:0.5rem; flex-grow:2;">
            <a href="tel:+233000000000" class="btn-cart-add" style="flex:1; padding:0.5rem; text-decoration:none; justify-content:center; background:rgba(5, 255, 133, 0.1); color:var(--color-primary-neon); border: 1px solid rgba(5,255,133,0.3);" title="Call for Price">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>
            <a href="https://wa.me/233000000000?text=${encodeURIComponent(`Hello, I'd like to request a quote for the ${product.name}. I understand it takes about 48 hours.`)}" target="_blank" class="btn-cart-add" style="flex:1; padding:0.5rem; text-decoration:none; justify-content:center; background:rgba(37, 211, 102, 0.1); color:#25D366; border: 1px solid rgba(37,211,102,0.3);" title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

function setupMobileNav() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mainNav = document.getElementById("main-nav");
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  }
}

// 6. Page specific controllers
document.addEventListener("DOMContentLoaded", () => {
  // Cart removed
  
  setupThemeToggle();
  // Initialize centered retail search bar
  setupGlobalHeaderSearch();
  setupMobileNav();
  
  const path = window.location.pathname;
  const page = path.split("/").pop();
  
  if (page === "" || page === "index.html") {
    initLandingPage();
  } else if (page === "catalog.html" || page.includes("catalog")) {
    initCatalogPage();
    setupCatalogMobileFilters();
  } else if (page === "checkout-story.html" || page.includes("checkout")) {
    initCheckoutPage();
  }
});

// MOBILE FILTER TOGGLE
function setupCatalogMobileFilters() {
  const mobileFilterBtn = document.getElementById("mobile-filter-btn");
  const catalogSidebar = document.querySelector(".catalog-sidebar");
  
  if (mobileFilterBtn && catalogSidebar) {
    mobileFilterBtn.addEventListener("click", () => {
      catalogSidebar.classList.toggle("active");
    });
  }
}

// LANDING PAGE INITIALIZER
function initLandingPage() {
  const matcherForm = document.getElementById("vehicle-matcher-form");
  if (matcherForm) {
    matcherForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const vehicle = document.getElementById("matcher-vehicle").value;
      const category = document.getElementById("matcher-category").value;
      
      localStorage.setItem("evhouse_match_vehicle", vehicle);
      localStorage.setItem("evhouse_match_category", category);
      window.location.href = "catalog.html";
    });
  }
  
  // Init CompuGhana e-commerce widgets
  setupPromoSlider();
  setupFeaturedTabs();

  setupSavingsCalculator();
}

// SAVINGS CALCULATOR CONTROLLER
function setupSavingsCalculator() {
  const calcBtn = document.getElementById("btn-calculate-savings");
  if (!calcBtn) return;
  
  calcBtn.addEventListener("click", () => {
    const vType = document.getElementById("calc-vehicle-type").value;
    const fuelCost = Number(document.getElementById("calc-fuel-cost").value);
    
    if (!fuelCost || fuelCost <= 0) {
      alert("Please enter a valid daily fuel cost.");
      return;
    }
    
    const evCost = fuelCost * 0.22;
    const dailySavings = fuelCost - evCost;
    const yearlySavings = dailySavings * 312;
    
    document.getElementById("calc-output-daily").textContent = `GH₵ ${Math.round(dailySavings).toLocaleString()}`;
    document.getElementById("calc-output-yearly").textContent = `GH₵ ${Math.round(yearlySavings).toLocaleString()}`;
    document.getElementById("calc-intro-text").style.display = "none";
    document.getElementById("calculator-results").style.display = "block";
    document.getElementById("calculator-results").scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

// THEME TOGGLE HANDLER
function updateMetaThemeColor(theme) {
  const meta = document.getElementById("meta-theme-color");
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#060913" : "#f8fafc");
  }
}

function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (!themeBtn) return;
  
  const iconSun = themeBtn.querySelector(".icon-sun");
  const iconMoon = themeBtn.querySelector(".icon-moon");
  
  // Default to light mode, apply dark mode if saved
  const savedTheme = localStorage.getItem("evhouse_theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    updateMetaThemeColor("dark");
    if (iconSun) iconSun.style.display = "block"; // Show Sun to toggle to Light
    if (iconMoon) iconMoon.style.display = "none";
  } else {
    document.documentElement.removeAttribute("data-theme");
    updateMetaThemeColor("light");
    if (iconSun) iconSun.style.display = "none";
    if (iconMoon) iconMoon.style.display = "block"; // Show Moon to toggle to Dark
  }
  
  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("evhouse_theme", "light");
      updateMetaThemeColor("light");
      if (iconSun) iconSun.style.display = "none";
      if (iconMoon) iconMoon.style.display = "block";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("evhouse_theme", "dark");
      updateMetaThemeColor("dark");
      if (iconSun) iconSun.style.display = "block";
      if (iconMoon) iconMoon.style.display = "none";
    }
  });
}

// GLOBAL HEADER SEARCH HANDLER
function setupGlobalHeaderSearch() {
  const searchInput = document.getElementById("header-search-input");
  const searchBtn = document.getElementById("header-search-btn");
  if (!searchInput || !searchBtn) return;
  
  function triggerSearch() {
    const q = searchInput.value.trim();
    if (q) {
      localStorage.setItem("evhouse_search_query", q);
      window.location.href = "catalog.html";
    }
  }
  
  searchBtn.addEventListener("click", triggerSearch);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") triggerSearch();
  });
}

// INTERACTIVE PROMO SLIDER CAROUSEL
function setupPromoSlider() {
  const slides = document.querySelectorAll(".promo-slide");
  const dots = document.querySelectorAll(".slider-dot");
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    currentSlide = index;
  }
  
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      showSlide(idx);
      resetInterval();
    });
  });
  
  function startInterval() {
    slideInterval = setInterval(() => {
      let next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }, 6000);
  }
  
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }
  
  showSlide(0);
  startInterval();
}

// DYNAMIC FEATURED TABS FILTER FEED
function setupFeaturedTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const featuredGrid = document.getElementById("featured-products-grid");
  if (tabs.length === 0 || !featuredGrid) return;
  
  function renderFeatured(category = "all") {
    featuredGrid.innerHTML = "";
    let filtered = PRODUCTS;
    if (category !== "all") {
      filtered = PRODUCTS.filter(p => p.category === category);
    }
    
    const displayItems = filtered.slice(0, 4);
    
    if (displayItems.length === 0) {
      featuredGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
          <p style="color: var(--color-text-slate); font-size: 0.85rem;">No spares in this category currently retailed.</p>
        </div>
      `;
      return;
    }
    
    displayItems.forEach(product => {
      const card = createProductCardHtml(product);
      featuredGrid.appendChild(card);
    });
    
    setupProductCardActionTriggers();
  }
  
  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      tabs.forEach(t => t.classList.remove("active"));
      e.currentTarget.classList.add("active");
      
      const category = e.currentTarget.getAttribute("data-category");
      renderFeatured(category);
    });
  });
  
  // Initial draw
  renderFeatured("all");
}



// CATALOG PAGE INITIALIZER
function initCatalogPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const queryCategory = urlParams.get("category");
  if (queryCategory) {
    localStorage.setItem("evhouse_match_category", queryCategory);
  }
  
  const searchQuery = localStorage.getItem("evhouse_search_query");
  if (searchQuery) {
    const searchInput = document.getElementById("catalog-search");
    if (searchInput) {
      searchInput.value = searchQuery;
    }
    localStorage.removeItem("evhouse_search_query");
  }
  
  const redirectVehicle = localStorage.getItem("evhouse_match_vehicle");
  const redirectCategory = localStorage.getItem("evhouse_match_category");
  
  if (redirectVehicle) {
    const vehicleSelect = document.getElementById("filter-vehicle");
    if (vehicleSelect) {
      vehicleSelect.value = redirectVehicle;
    }
    localStorage.removeItem("evhouse_match_vehicle");
  }
  
  if (redirectCategory) {
    const categoryCheck = document.querySelector(`.category-filter[value="${redirectCategory}"]`);
    if (categoryCheck) {
      categoryCheck.checked = true;
    }
    localStorage.removeItem("evhouse_match_category");
  }
  
  renderCatalogProducts();
  
  const searchInput = document.getElementById("catalog-search");
  const vehicleSelect = document.getElementById("filter-vehicle");
  const priceSlider = document.getElementById("filter-price-slider");
  const priceValueOutput = document.getElementById("price-slider-value");
  const categoryChecks = document.querySelectorAll(".category-filter");
  const clearFiltersBtn = document.getElementById("clear-all-filters");
  
  if (searchInput) searchInput.addEventListener("input", renderCatalogProducts);
  if (vehicleSelect) vehicleSelect.addEventListener("change", renderCatalogProducts);
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      priceValueOutput.textContent = `GH₵ ${Number(e.target.value).toLocaleString()}`;
      renderCatalogProducts();
    });
  }
  
  categoryChecks.forEach(check => {
    check.addEventListener("change", renderCatalogProducts);
  });
  
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      if (searchInput) searchInput.value = "";
      if (vehicleSelect) vehicleSelect.value = "all";
      if (priceSlider) {
        priceSlider.value = "60000";
        priceValueOutput.textContent = "GH₵ 60,000";
      }
      categoryChecks.forEach(check => check.checked = false);
      renderCatalogProducts();
    });
  }
  
  setupViewToggle();
}

// SETUP VIEW TOGGLE (Grid/List)
function setupViewToggle() {
  const gridBtn = document.getElementById("view-grid");
  const listBtn = document.getElementById("view-list");
  const catalogGrid = document.getElementById("catalog-grid");
  if (!gridBtn || !listBtn || !catalogGrid) return;
  
  const savedView = localStorage.getItem("evhouse_catalog_view") || "grid";
  
  function setView(view) {
    if (view === "list") {
      catalogGrid.classList.add("list-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    } else {
      catalogGrid.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    }
    localStorage.setItem("evhouse_catalog_view", view);
  }
  
  setView(savedView);
  
  gridBtn.addEventListener("click", () => setView("grid"));
  listBtn.addEventListener("click", () => setView("list"));
}

// RENDER CATALOG PRODUCTS
function renderCatalogProducts() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;
  
  const query = document.getElementById("catalog-search")?.value.toLowerCase().trim() || "";
  const selectedVehicle = document.getElementById("filter-vehicle")?.value || "all";
  const maxPrice = Number(document.getElementById("filter-price-slider")?.value) || 60000;
  
  const checkedCategories = [];
  document.querySelectorAll(".category-filter:checked").forEach(check => {
    checkedCategories.push(check.value);
  });
  
  const filtered = PRODUCTS.filter(product => {
    if (query && !product.name.toLowerCase().includes(query) && !product.description.toLowerCase().includes(query)) {
      return false;
    }
    if (selectedVehicle !== "all" && !product.compatibility.includes(selectedVehicle)) {
      return false;
    }
    if (product.price > maxPrice) {
      return false;
    }
    if (checkedCategories.length > 0 && !checkedCategories.includes(product.category)) {
      return false;
    }
    return true;
  });
  
  const countSpan = document.getElementById("catalog-result-count");
  if (countSpan) {
    countSpan.textContent = filtered.length;
  }
  
  grid.innerHTML = "";
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results" style="padding: 4rem 2rem; text-align: center;">
        <div class="no-results-icon" style="color: var(--color-slate-800); margin-bottom: 1.25rem; display: flex; justify-content: center;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: white;">No Tropicalized Parts Found</h3>
        <p style="color: var(--color-text-slate); font-size: 0.85rem;">Try relaxing your filter parameters or clearing the search text.</p>
      </div>
    `;
    return;
  }
  
  filtered.forEach(product => {
    const card = createProductCardHtml(product);
    grid.appendChild(card);
  });
  
  setupProductCardActionTriggers();
}

// SETUP DIRECT CARD ACTION BINDINGS
function setupProductCardActionTriggers() {
  // Make the entire product card or flash deal card clickable to open the preview modal
  document.querySelectorAll(".product-card, .flash-deal-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const id = card.getAttribute("data-id");
      if (id) {
        openProductModal(id);
      }
    });
  });
}

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  let overlay = document.getElementById("product-detail-modal");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "product-detail-modal";
    overlay.className = "modal-overlay";
    
    overlay.innerHTML = `
      <div class="modal-container">
        <button class="modal-close-btn" id="modal-close">✕</button>
        <div class="modal-content-grid">
          <div class="modal-image-panel" id="modal-image-slot"></div>
          <div class="modal-details-panel">
            <span class="modal-category" id="modal-category-slot"></span>
            <h2 class="modal-title" id="modal-title-slot"></h2>
            
            <div class="modal-rating-price">
              <div class="product-rating" id="modal-rating-slot"></div>
              <div class="modal-price" id="modal-price-slot"></div>
            </div>
            
            <!-- Real-time compatibility checker -->
            <div style="background:var(--color-bg-card); border:1.5px solid var(--color-border); padding:1.25rem; border-radius:8px; margin-bottom:1.5rem;" id="modal-compatibility-checker">
              <span style="font-size:0.7rem; font-weight:800; text-transform:uppercase; color:var(--color-text-slate); display:block; margin-bottom:0.5rem; letter-spacing:0.05em;">Fitment Guarantee Verification</span>
              <div style="display:grid; grid-template-columns:1.5fr 1fr; gap:0.5rem; align-items:center;">
                <select class="form-select" id="compat-checker-vehicle" style="padding:0.55rem 0.75rem; font-size:0.8rem; background:var(--color-bg-deep);">
                  <option value="none">Choose Your Vehicle...</option>
                  <option value="Nissan Leaf">Nissan Leaf (ZE0/AZE0)</option>
                  <option value="BYD Atto 3">BYD Atto 3</option>
                  <option value="Electric Tricycle">Electric Tricycle (Aboboyaa)</option>
                  <option value="Hyundai Kona">Hyundai Kona EV</option>
                </select>
                <button class="btn btn-secondary" id="btn-run-compat-check" style="padding:0.55rem 0.75rem; font-size:0.8rem; height:38px;">Check Fit</button>
              </div>
              <div id="compat-checker-result" style="font-size:0.8rem; font-weight:700; margin-top:0.65rem; display:none;"></div>
            </div>

            <p class="modal-description" id="modal-desc-slot"></p>
            
            <div style="margin-bottom:1.5rem; font-size:0.85rem; color:var(--color-text-slate);">
              <strong>Warranty Coverage: </strong><span id="modal-warranty-slot" style="color:white;"></span>
            </div>

            <h4 class="modal-section-title">Technical Specifications</h4>
            <div class="specs-grid" id="modal-specs-slot"></div>
            
            <h4 class="modal-section-title">Verified Customer Reviews</h4>
            <div class="reviews-list" id="modal-reviews-slot"></div>
            
            <div class="modal-action-bar">
              <button class="btn btn-primary" id="modal-add-to-cart" style="flex-grow: 1;">
                Add to Cart
              </button>
              <button class="btn btn-secondary" id="modal-cancel-btn">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("modal-cancel-btn").addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  
  let freeFixingHtml = "";
  if (product.freeFixing) {
    freeFixingHtml = `<div style="background: rgba(5, 255, 133, 0.1); color: var(--color-primary-neon); border: 1px solid rgba(5,255,133,0.3); padding: 0.35rem 0.65rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; margin-top: 0.5rem; margin-bottom: 0.5rem; display: inline-flex; align-items: center; gap: 0.35rem;">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
      Free Fixing & Maintenance Included
    </div>`;
  }
  
  document.getElementById("modal-image-slot").innerHTML = `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover; display:block;">`;
  document.getElementById("modal-category-slot").textContent = product.category;
  document.getElementById("modal-title-slot").innerHTML = product.name + freeFixingHtml;
  
  const priceSlot = document.getElementById("modal-price-slot");
  priceSlot.innerHTML = `<span style="color:var(--color-accent-gold); font-size: 1.4rem;">Request for Price</span><div style="font-size:0.75rem; color:var(--color-text-slate); font-weight:normal; margin-top:0.25rem;">Approx. 48hr turnaround</div>`;
  
  document.getElementById("modal-desc-slot").textContent = product.description;
  document.getElementById("modal-warranty-slot").textContent = product.warranty;
  
  document.getElementById("modal-rating-slot").innerHTML = `
    <div style="display:flex; align-items:center; margin-right:0.5rem;">
      ${getRatingStarsSvg(product.rating)}
    </div>
    <span style="font-weight:700; color:var(--color-text-white);">${product.rating}</span>
    <span style="color: var(--color-border); margin-left: 0.5rem; margin-right: 0.5rem;">|</span>
    <span style="font-size: 0.8rem; font-weight: 500; color:var(--color-text-slate);">${product.reviews.length} Accra drivers certified</span>
  `;
  
  const compatSelect = document.getElementById("compat-checker-vehicle");
  const compatResult = document.getElementById("compat-checker-result");
  const compatBtn = document.getElementById("btn-run-compat-check");
  
  compatSelect.value = "none";
  compatResult.style.display = "none";
  
  const newCompatBtn = compatBtn.cloneNode(true);
  compatBtn.parentNode.replaceChild(newCompatBtn, compatBtn);
  
  newCompatBtn.addEventListener("click", () => {
    const selected = compatSelect.value;
    if (selected === "none") {
      alert("Please select a vehicle model first.");
      return;
    }
    
    const isCompatible = product.compatibility.includes(selected);
    compatResult.style.display = "block";
    
    if (isCompatible) {
      compatResult.innerHTML = `<span style="color:var(--color-primary-neon);">✓ Guaranteed Fitment for ${selected}. Ready to install.</span>`;
    } else {
      compatResult.innerHTML = `<span style="color:#ef4444;">✕ Warning: Fits only ${product.compatibility.join(" or ")}. Not recommended.</span>`;
    }
  });
  
  const specsSlot = document.getElementById("modal-specs-slot");
  specsSlot.innerHTML = "";
  Object.entries(product.specs).forEach(([name, value]) => {
    const item = document.createElement("div");
    item.className = "spec-item";
    item.innerHTML = `
      <div class="spec-name">${name}</div>
      <div class="spec-val">${value}</div>
    `;
    specsSlot.appendChild(item);
  });
  
  const reviewsSlot = document.getElementById("modal-reviews-slot");
  reviewsSlot.innerHTML = "";
  product.reviews.forEach(r => {
    const item = document.createElement("div");
    item.className = "review-item";
    item.innerHTML = `
      <div class="review-header">
        <span class="reviewer-name">${r.name}</span>
        <div style="display:flex; align-items:center;">
          ${getRatingStarsSvg(r.rating)}
        </div>
      </div>
      <p class="review-body">"${r.text}"</p>
    `;
    reviewsSlot.appendChild(item);
  });
  
  const actionBar = document.querySelector(".modal-action-bar");
  
  actionBar.innerHTML = `
    <div style="display:flex; gap:0.5rem; flex-grow:1;">
      <a href="tel:+233000000000" class="btn btn-primary" style="flex:1; display:flex; justify-content:center; align-items:center; background:rgba(5, 255, 133, 0.1); color:var(--color-primary-neon); border: 1px solid rgba(5,255,133,0.3); gap:0.5rem; text-decoration:none; padding:0;" id="modal-call-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        Call
      </a>
      <a href="#" class="btn btn-primary" style="flex:1; display:flex; justify-content:center; align-items:center; background:rgba(37, 211, 102, 0.1); color:#25D366; border: 1px solid rgba(37,211,102,0.3); gap:0.5rem; text-decoration:none; padding:0;" id="modal-wa-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
        WhatsApp
      </a>
    </div>
    <button class="btn btn-secondary" id="modal-cancel-btn">Close</button>
  `;
  document.getElementById("modal-wa-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const waUrl = `https://wa.me/233000000000?text=${encodeURIComponent(`Hello, I'd like to request a quote for the ${product.name}. I understand it takes about 48 hours.`)}`;
    window.open(waUrl, "_blank");
    closeModal();
  });
  document.getElementById("modal-call-btn").addEventListener("click", () => {
    closeModal();
  });
  document.getElementById("modal-cancel-btn").addEventListener("click", closeModal);
  
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("product-detail-modal");
  if (overlay) {
    overlay.classList.remove("active");
  }
  document.body.style.overflow = "";
}


// CHECKOUT PAGE INITIALIZER
function initCheckoutPage() {
  renderCheckoutSummary();
  
  let currentStep = 1;
  const totalSteps = 3;
  
  const stepPanels = document.querySelectorAll(".checkout-step-panel");
  const stepNodes = document.querySelectorAll(".step-node");
  const stepperProgress = document.getElementById("stepper-progress");
  
  const prevBtn = document.getElementById("btn-prev-step");
  const nextBtn = document.getElementById("btn-next-step");
  
  function updateStepperUI() {
    stepNodes.forEach((node, idx) => {
      const stepNum = idx + 1;
      node.classList.remove("active", "completed");
      
      if (stepNum === currentStep) {
        node.classList.add("active");
      } else if (stepNum < currentStep) {
        node.classList.add("completed");
      }
    });
    
    const pct = ((currentStep - 1) / (totalSteps - 1)) * 100;
    if (stepperProgress) {
      stepperProgress.style.width = `${pct}%`;
    }
    
    stepPanels.forEach((panel, idx) => {
      panel.classList.remove("active");
      if (idx + 1 === currentStep) {
        panel.classList.add("active");
      }
    });
    
    if (currentStep === 1) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "inline-flex";
      nextBtn.innerHTML = `Continue to Payment &rarr;`;
    } else if (currentStep === 2) {
      prevBtn.style.display = "inline-flex";
      nextBtn.style.display = "inline-flex";
      const activeTab = document.querySelector(".payment-tab-btn.active")?.getAttribute("data-method");
      if (activeTab === "card") {
        nextBtn.innerHTML = `Authorize Card Payment`;
      } else {
        nextBtn.innerHTML = `Send MoMo Prompt to Phone`;
      }
    } else if (currentStep === 3) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      simulateDeliveryTimeline();
    }
  }
  
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateStepperUI();
      }
    });
    
    nextBtn.addEventListener("click", () => {
      if (currentStep === 1) {
        if (validateStep1()) {
          currentStep++;
          updateStepperUI();
        }
      } else if (currentStep === 2) {
        handlePaymentSubmission();
      }
    });
  }
  
  const paymentTabs = document.querySelectorAll(".payment-tab-btn");
  const momoSimPanel = document.getElementById("momo-simulation");
  const momoDetails = document.getElementById("momo-payment-fields");
  const cardDetails = document.getElementById("card-payment-fields");
  
  paymentTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      const selectedTab = e.currentTarget;
      paymentTabs.forEach(t => t.classList.remove("active"));
      selectedTab.classList.add("active");
      
      const method = selectedTab.getAttribute("data-method");
      
      if (method === "card") {
        cardDetails.style.display = "block";
        momoDetails.style.display = "none";
        momoSimPanel.classList.remove("active");
        nextBtn.innerHTML = `Authorize Card Payment`;
      } else {
        cardDetails.style.display = "none";
        momoDetails.style.display = "block";
        nextBtn.innerHTML = `Send MoMo Prompt to Phone`;
      }
    });
  });
  
  function validateStep1() {
    const fullName = document.getElementById("checkout-name").value.trim();
    const phone = document.getElementById("checkout-phone").value.trim();
    const address = document.getElementById("checkout-gps").value.trim();
    
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items from the catalog before checking out!");
      return false;
    }
    
    if (!fullName) {
      alert("Please enter your full name.");
      return false;
    }
    if (!phone) {
      alert("Please enter a valid phone number.");
      return false;
    }
    if (!address) {
      alert("Please enter your Ghana Post GPS address (e.g. GA-183-8164).");
      return false;
    }
    
    const gpsRegex = /^[A-Z]{2}-\d{3,4}-\d{4}$/;
    if (!gpsRegex.test(address)) {
      alert("Invalid Ghana Post GPS format. Please use the pattern: XX-XXX-XXXX (e.g., GS-024-8842)");
      return false;
    }
    
    return true;
  }
  
  function handlePaymentSubmission() {
    const activeMethodTab = document.querySelector(".payment-tab-btn.active");
    const method = activeMethodTab.getAttribute("data-method");
    
    if (method === "card") {
      nextBtn.classList.add("btn-disabled");
      nextBtn.disabled = true;
      nextBtn.textContent = "Processing Card Payment...";
      
      setTimeout(() => {
        completeOrderSuccess();
      }, 2000);
    } else {
      const momoPhoneInput = document.getElementById("checkout-momo-phone").value.trim();
      if (!momoPhoneInput || momoPhoneInput.length < 9) {
        alert("Please enter your MoMo registered phone number.");
        return;
      }
      
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      momoSimPanel.classList.add("active");
      
      const grandTotal = getCartTotal() + 250;
      document.getElementById("momo-sim-price").textContent = `GH₵ ${grandTotal.toLocaleString()}`;
      
      setTimeout(() => {
        document.getElementById("momo-sim-status").textContent = "USSD Prompt authorized on handset. Fetching security validation...";
        
        setTimeout(() => {
          completeOrderSuccess();
        }, 2500);
      }, 2000);
    }
  }
  
  function completeOrderSuccess() {
    const invoiceNo = "EVH-" + Math.floor(100000 + Math.random() * 900000);
    const orderTotalVal = getCartTotal() + 250;
    
    document.getElementById("success-order-id").textContent = invoiceNo;
    document.getElementById("success-order-total").textContent = `GH₵ ${orderTotalVal.toLocaleString()}`;
    
    cart = [];
    saveCartToStorage();
    
    currentStep = 3;
    updateStepperUI();
  }
  
  function simulateDeliveryTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    setTimeout(() => {
      timelineItems[0].classList.add("completed");
      timelineItems[1].classList.add("active");
      
      setTimeout(() => {
        timelineItems[1].classList.add("completed");
        timelineItems[1].classList.remove("active");
        timelineItems[2].classList.add("active");
        
        showToast("Motorbike Dispatcher is approaching your location!");
      }, 8000);
    }, 4000);
  }
}

// RENDER CHECKOUT SUMMARY CARD
function renderCheckoutSummary() {
  const summaryList = document.getElementById("checkout-summary-list");
  if (!summaryList) return;
  
  summaryList.innerHTML = "";
  
  if (cart.length === 0) {
    summaryList.innerHTML = `
      <div class="cart-empty-message" style="text-align:center; padding:2rem 0;">
        <p style="color:var(--color-text-slate);">Your shopping cart is empty.</p>
        <a href="catalog.html" class="btn btn-secondary" style="margin-top: 1rem; width: 100%;">Browse catalog</a>
      </div>
    `;
    
    document.getElementById("summary-subtotal").textContent = "GH₵ 0";
    document.getElementById("summary-delivery").textContent = "GH₵ 0";
    document.getElementById("summary-grand-total").textContent = "GH₵ 0";
    return;
  }
  
  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "summary-item";
    row.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1; min-width: 0; padding-right: 1rem;">
        <div style="display: flex; align-items: baseline; gap: 0.5rem; min-width: 0;">
          <span class="summary-item-name" style="flex: 1; min-width: 0;">${item.name}</span>
          <span class="summary-item-qty" style="color: var(--color-text-slate); font-size: 0.75rem; white-space: nowrap;">x${item.quantity}</span>
        </div>
        <div style="display: flex; gap: 0.75rem;">
          <span style="font-size:0.7rem; color:var(--color-primary-neon); cursor:pointer; text-decoration:underline;" onclick="removeFromCart('${item.id}', 1)">Reduce</span>
          <span style="font-size:0.7rem; color:#ef4444; cursor:pointer; text-decoration:underline;" onclick="deleteFromCartCompletely('${item.id}')">Remove</span>
        </div>
      </div>
      <div style="font-weight: 600; white-space: nowrap;">GH₵ ${(item.price * item.quantity).toLocaleString()}</div>
    `;
    summaryList.appendChild(row);
  });
  
  const subtotal = getCartTotal();
  const delivery = 250;
  const grandTotal = subtotal + delivery;
  
  document.getElementById("summary-subtotal").textContent = `GH₵ ${subtotal.toLocaleString()}`;
  document.getElementById("summary-delivery").textContent = `GH₵ ${delivery.toLocaleString()}`;
  document.getElementById("summary-grand-total").textContent = `GH₵ ${grandTotal.toLocaleString()}`;
}
