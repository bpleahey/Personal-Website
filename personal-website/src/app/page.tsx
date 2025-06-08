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
            AICD3 @ UCSF, Brown CS Alum, Socially Responsible Deep
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
              I recently graduated from Brown University, where I studied
              Mathematics and Computer Science. I obtained my B.Sc. and
              completed a thesis on improving RGB-infrared object detection
              models to receive departmental honors. My interests include
              computer vision, computational biology, and deep learning. I was
              also on the Track and Field/Cross Country teams at Brown, and I
              have set my sights on triathlon!
              <br />
              <br />
              This past summer, I volunteered at Lalmba association, developing
              an application for malnutrition tracking during clinical visits. I
              am continuing to work on clinical applications in a cancer regimen
              browser, called RegiViz, which can be found in{" "}
              <a href="#experience">
                <strong>Experience</strong>
              </a>
              <br />
              <br />I will be starting my master&apos;s at the University of
              California, San Francisco this summer, joining the AI and
              Computational Drug Discovery and Development (AICD3) program.
              Here, I plan to continue exploring computational solutions to
              healthcare problems in fields like pharmacy and oncology.
              <br />
              <br />I am excited to be back in the Bay Area, and I look forward
              to contributing to research in an impactful space!
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
          <br />
          <h3>
            <a href="https://docs.google.com/document/d/1bQV_RVwBCcRxEcCuYC4jNJijqKJs7OhVvv1cActqUiU/edit?usp=sharing">
              <strong>Curriculum Vitae 🔗</strong>
            </a>
          </h3>
          <br />
          <h3>Education</h3>
          <strong>Bachelor of Science in Mathematics-Computer Science</strong>
          Brown University, Providence, RI
          <br />
          2021 - 2025
          <strong>
            Masters in AI and Computational Drug Discovery and Development
            (AICD3)
          </strong>
          University of California San Francisco
          <br />
          Expected 2025 - 2026
          <br />
          <br />
          <h3>Key Projects</h3>
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
                <strong>here</strong>.
              </a>
            </li>
            <li>
              <a href="https://cadance-deployment.vercel.app/">
                <strong>CaDance:</strong> create your own running playlists!
                Contact me to be added to our permitted users list, as the
                Spotify API is rate limited.
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/149nFAIvZFRVQ295swum8E7VPv2zPeIgZ/view">
                <strong>Honors Thesis: DANTURES</strong>
              </a>
              <br />
              <a>
                Abstract: Multispectral object detection has fruitful
                applications in defense, agriculture, industry, and more. In our
                series of experiments, Daylight Associated Noise for Training
                UAV-based multispectral detectors, Robust to Environmental
                Shifts (or DANTURES, since it is a mouthful), we explore
                potential improvements of object detection capabilities in
                unmanned aerial vehicles by embedding determinants of
                environmental variance into multispectral models. Combining
                images from forward-looking infrared and visible light (RGB)
                cameras, we address challenges in object detection accuracy
                caused by variations in infrared images and visibility
                challenges in RGB sensing associated with changing times of day.
                We have implemented a novel adaptation of multispectral YOLO
                object detection frameworks that integrate RGB, infrared, and
                time-of-day information to dampen the effect of this noise,
                aiming to outperform traditional RGB- or IR-only networks.
              </a>
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
