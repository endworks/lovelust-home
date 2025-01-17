import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {import.meta.env.BASE_URL == "/" ? (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    ) : (
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index path="/" element={<App />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
    )}
  </StrictMode>
);
