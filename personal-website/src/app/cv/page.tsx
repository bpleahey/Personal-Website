import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  return (
    <div className={styles.page}>
      <Banner />
      <iframe
        className={styles.iframe}
        src="https://docs.google.com/document/d/e/2PACX-1vQZPuN6_rqySVdxqdsfBG3fq1GklewMdjhNTxoZlFoDImp0zFLc3ZMHdFuwbHKFWuinPHhgVq3qHa8X/pub?embedded=true"
      ></iframe>
    </div>
  );
}
