import styles from "./banner.module.css";

// Create a banner component that can be reused across multiple pages

// TODO: add a little emoji to the pokemon link
export default function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.headerText}>
          <h1>Brendan Leahey</h1>
          <p>
            AICD3 @ UCSF, Brown CS Alum, Socially Responsible Deep
            Learning/Computer Vision
          </p>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="cv">CV</a>
        <a href="experience">Experience</a>
        <a href="research">Research</a>
        <a href="pokemon">Pokémon</a>
        <a href="contact">Contact</a>
      </nav>
    </>
  );
}
