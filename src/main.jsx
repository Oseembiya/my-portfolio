import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";
import App from "./App.jsx";

// Import FontAwesome with better performance
import "@fortawesome/fontawesome-free/css/all.min.css";

// Preload critical fonts to prevent layout shifts
function preloadFonts() {
  // Preload FontAwesome fonts
  const fontAwesomeSolid = document.createElement("link");
  fontAwesomeSolid.rel = "preload";
  fontAwesomeSolid.href = "/src/assets/webfonts/fa-solid-900.woff2";
  fontAwesomeSolid.as = "font";
  fontAwesomeSolid.type = "font/woff2";
  fontAwesomeSolid.crossOrigin = "anonymous";

  const fontAwesomeBrands = document.createElement("link");
  fontAwesomeBrands.rel = "preload";
  fontAwesomeBrands.href = "/src/assets/webfonts/fa-brands-400.woff2";
  fontAwesomeBrands.as = "font";
  fontAwesomeBrands.type = "font/woff2";
  fontAwesomeBrands.crossOrigin = "anonymous";

  document.head.appendChild(fontAwesomeSolid);
  document.head.appendChild(fontAwesomeBrands);
}

// Call the preload function
preloadFonts();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
