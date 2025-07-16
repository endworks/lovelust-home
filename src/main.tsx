import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./i18n";
import "./index.css";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import Support from "./Support.tsx";
import Donations from "./Donations.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
