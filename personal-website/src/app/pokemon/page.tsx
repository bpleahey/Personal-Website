import Banner from "@/elements/banner";
import styles from "./page.module.css";
import SmogonContribs from "@/elements/smogon-contribs";

export default function Research() {
  return (
    <div className={styles.page}>
      <Banner />
      <SmogonContribs />
      <>
        Pokemon: tournament wins... indivs=rby lc, lcuu. team tours=hgpl, ptpl,
        sspl, lpl12, lll ? can look at my scl resume lol maybe even embed that
      </>
    </div>
  );
}
