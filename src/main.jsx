import { createRoot } from "react-dom/client";
import App from "./App";

/*-----------Font Style--------- */
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

/* ---------- Styles ---------- */
// Order matters: later files win when two rules have the same specificity.
import "./styles/tailwind.css";    // Tailwind (generated file - don't edit by hand)
import "./styles/animation.css";   // animations, fonts, click effects
import "./styles/style.css";       // MeneYou theme (colors, navbar, calculator)

/* ---------- Vanilla JS features (each file loads exactly once, here) ---------- */
import "./scripts/loader.js";
import "./scripts/bottom-click.js";
import "./scripts/navbar-opener.js";
import "./scripts/scroll-animation.js";
import "./scripts/typing-animation.js";
// import "./scripts/typewriter.js"; // does the same job as typing-animation.js - enable only ONE of them


/* ---------- Mount React ---------- */
const root = document.querySelector("#calculator");

createRoot(root).render(<App />);
