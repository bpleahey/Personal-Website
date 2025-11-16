import styles from "./page.module.css";
import Banner from "@/elements/banner";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function CV() {
  return (
    <div className={styles.page}>
      <Banner />
      <section className={styles.section}>
        <h2>Contact</h2>
        <p>
          <a
            href="mailto:brendan.leahey@ucsf.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={20} style={{ marginRight: ".8vw" }} />
            brendan.leahey@ucsf.edu
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/brendan-leahey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} style={{ marginRight: ".8vw" }} />
            LinkedIn: Brendan Leahey
          </a>
        </p>
        <p>
          <a
            href="https://github.com/bpleahey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} style={{ marginRight: ".8vw" }} />
            GitHub: bpleahey
          </a>
        </p>
      </section>
    </div>
  );
}
