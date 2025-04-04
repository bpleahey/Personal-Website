// import Image from "next/image";
import styles from "./page.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <div className={styles.headerText}>
          <h1>Brendan Leahey</h1>
          <p>
            Computer Science and Mathematics @ Brown, Socially Responsible Deep
            Learning/Computer Vision
          </p>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h2>About Me</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <p style={{ flex: 1 }}>
              I am a senior at Brown University, studying the combined
              concentration of Mathematics and Computer Science (ScB, pursuing
              honors). My interests include computer vision, computational
              biology, and deep learning. I am also on the Track and Field/Cross
              Country teams at Brown, and love running and triathlon!
              <br />
              <br />
              Previously, I interned at FLOX robotics in Stockholm. Here, I
              aided a project involving real-time object detection using deep
              learning on multiple image modes (RGB and FLIR). I am continuing
              to explore challenges I encountered within the multimodal learning
              space through my honors thesis this year.
              <br />
              <br />
              This past summer, I volunteered at Lalmba association, developing
              an application for malnutrition tracking during clinical visits. I
              am continuing to work on clinical applications in a cancer regimen
              browser, called RegiViz, which can be found in{" "}
              <a href="#experience">
                <strong>Experience</strong>
              </a>
              .
              <br />
              <br />I hope to continue impactful research in future employment
              and graduate studies, leveraging machine learning and software
              skills to create a positive social impact!
            </p>
            <div
              style={{
                width: "40%",
                height: "40%",
                position: "relative",
                marginLeft: "5vw",
                aspectRatio: "1 / 1", // ensures square shape
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              {/* Outer image: Sardines */}
              <Image
                src="/images/monterey_sardines.gif"
                alt="sardines"
                fill
                style={{ objectFit: "cover" }}
              />

              {/* Inner image: Profile */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "85%",
                  height: "85%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/images/me.jpg"
                  alt="me!"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <h2>Experience</h2>

          <a href="https://docs.google.com/document/d/1bQV_RVwBCcRxEcCuYC4jNJijqKJs7OhVvv1cActqUiU/edit?usp=sharing">
            <strong>Curriculum Vitae </strong>
          </a>

          <ul>
            <li>
              <a href="https://yang2888.github.io/Regimen-demo/">
                <strong>RegiViz:</strong>{" "}
              </a>
              <a>
                interactive cancer regimen visualization and analysis leveraging
                large language models. &#10;&#13;Our preliminary paper is
                available{" "}
              </a>
              <a href="https://drive.google.com/file/d/1KFsmoZJq4qtSU4UIuxh3igwkvUmT014S/view?usp=sharing">
                <strong>here</strong>,
              </a>
              <a> and we hope to publish soon!</a>
            </li>
            <li>
              <a href="https://cadance-deployment.vercel.app/">
                <strong>CaDance:</strong> create your own running playlists!
                Contact me to be added to our permitted users list, as the
                Spotify API is rate limited.
              </a>
            </li>
            <li>
              <strong>Honors Thesis:</strong> Computationally Mitigating
              Environmental Noise in Multispectral UAV-Based Object Detection.
              Results soon!
            </li>
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>
            <a
              href="mailto:brendan_leahey@brown.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={20} style={{ marginRight: ".8vw" }} />
              brendan_leahey@brown.edu
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
      </main>
      <footer className={styles.footer}>
        Banner Attribution:{" "}
        <a href="https://commons.wikimedia.org/wiki/File:Mount_Diablo_banner.jpg">
          Falcorian
        </a>
        ,{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0">
          CC BY-SA 4.0
        </a>
        , via Wikimedia Commons. Last updated:{" "}
        {new Date("February 12, 2025").toLocaleDateString()}.
      </footer>
    </div>
  );
}
