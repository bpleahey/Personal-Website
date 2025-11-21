"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const docUrl = isMobile
    ? "https://docs.google.com/document/d/e/2PACX-1vQZPuN6_rqySVdxqdsfBG3fq1GklewMdjhNTxoZlFoDImp0zFLc3ZMHdFuwbHKFWuinPHhgVq3qHa8X/pub?embedded=true"
    : "https://docs.google.com/document/d/e/2PACX-1vQdhy-LlszJqunjd575dVnx9QIwRpxPpmckDfXevVY6zWBvaJHg-2rfnz1AHyri4rrF3l_OBYhmlav4/pub?embedded=true";

  return (
    <div className={styles.page}>
      <Banner />
      <iframe className={styles.iframe} src={docUrl}></iframe>
    </div>
  );
}
