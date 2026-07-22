"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
  useEffect(() => {
    const btn = document.getElementById("back-to-top");
    const onScroll = () => {
      if (btn) {
        btn.style.display = window.scrollY > 400 ? "flex" : "none";
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
