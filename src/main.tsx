import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {import.meta.env.BASE_URL !== "/" ? (
      <HashRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route index element={<App />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </HashRouter>
    ) : (
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    )}
  </StrictMode>
);
