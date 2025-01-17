import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={import.meta.env.BASE_URL} element={<App />} />
        <Route
          path={import.meta.env.BASE_URL + "/privacy"}
          element={<PrivacyPolicy />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
