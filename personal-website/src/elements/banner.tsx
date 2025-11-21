import styles from "./banner.module.css";
import Link from "next/link";
import { GoHome } from "react-icons/go";

// Create a banner component that can be reused across multiple pages

// TODO: add a little emoji to the pokemon link, make fit on mobile view width
export default function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.headerText}>
          <h1>Brendan Leahey</h1>
          <p>
            UCSF AICD3, Brown CS Alum, Socially Responsible Deep
            Learning/Computer Vision
          </p>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link className={styles.navlink} href="/">
          <GoHome></GoHome>
        </Link>
        <Link className={styles.navlink} href="cv">
          CV
        </Link>
        <Link className={styles.navlink} href="experience">
          Experience
        </Link>
        <Link className={styles.navlink} href="research">
          Research
        </Link>
        <Link className={styles.navlink} href="pokemon">
          <img
            className={styles.kabuto}
            width="16px"
            src="images/kabuto.png"
          ></img>
        </Link>
      </nav>
    </>
  );
}
