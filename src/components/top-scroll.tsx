"use client";

import { useEffect } from "react";

export function TopScroll() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}