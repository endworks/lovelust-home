"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/**
 * Shared hook for dark-mode management.
 * - Reads initial state from `document.documentElement.classList`
 * - Listens for `prefers-color-scheme` changes and syncs the `dark` class
 * - Provides a `toggleDark()` function for manual toggling
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  // Sync state with the class that was already set by the inline <script> in layout.tsx
  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  // Listen for OS-level theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (evt: MediaQueryListEvent) => {
      setIsDark(evt.matches);
      document.documentElement.classList.toggle("dark", evt.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function toggleDark() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return { isDark, toggleDark } as const;
}
