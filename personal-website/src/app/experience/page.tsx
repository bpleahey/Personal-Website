import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  return (
    <div className={styles.page}>
      <Banner />
      <>
        experience: flox images, ucsf program project images, brown project
        images, TA project with students
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
      </>
    </div>
  );
}
