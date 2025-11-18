import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  // TODO: remove unneccesary a elements, highlight more brown projects
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        <section>
          <h2>Education</h2>
          <h3>Bachelor of Science in Mathematics-Computer Science</h3>
          Brown University, Providence, RI
          <br />
          2021 - 2025
          <br />
          Computer Science Department Honors
          <br />
          <h4>Projects</h4>
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
              <p>Add graphs from paper + demo image</p>
            </li>
            <li>
              <a href="https://cadance-deployment.vercel.app/">
                <strong>CaDance:</strong> create your own running playlists
                tailored to your cadence and perceived effort! Contact me to be
                added to our permitted users list, as the Spotify API is rate
                limited.
              </a>
            </li>
          </ul>
          <h3>
            Master&apos;s in AI and Computational Drug Discovery and Development
            (AICD3)
          </h3>
          University of California San Francisco
          <br />
          Expected 2025 - 2026
          <br />
          <br />
          <h4>Projects</h4>
          <ul>
            <li>
              <strong>
                <a href="https://proteinbase.com/competitions/adaptyv-nipah-competition">
                  Nipah Binder Competition
                </a>
              </strong>
            </li>
            <li>
              <p>
                <strong>Agentic Pharmacovigilance</strong>: ...
              </p>
              <p> add diagram from slides</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          <h3></h3>
          <h3>Graduate Student Researcher</h3>
          do i have pictures of hong lab? maybe with jerry brown?
          <h3>Undergraduate Teaching Assistant</h3>
          image/video of TA Work
          <h3>Detection (Artificial Intelligence) Intern</h3>
          add goose detection photo
        </section>
      </main>
    </div>
  );
}
