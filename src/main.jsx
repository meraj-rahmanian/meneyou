import { createRoot } from "react-dom/client";
import App from "./App";

/*-----------Font Style--------- */
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

/* ---------- Styles ---------- */
import "./styles/tailwind.css";    
import "./styles/animation.css";   
import "./styles/style.css";       

/* ---------- Vanilla JS features ---------- */
import "./scripts/loader.js";
import "./scripts/bottom-click.js";
import "./components/navbar-opener.jsx";
import "./scripts/scroll-animation.js";
import "./scripts/typing-animation.js";

/* ---------- Mount React ---------- */
const root = document.querySelector("#app");

createRoot(root).render(<App />);