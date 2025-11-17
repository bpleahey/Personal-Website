import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        experience: flox images, ucsf program project images, brown project
        images, TA project with students
        <section>
          <h2>Education</h2>
          <h3>Bachelor of Science in Mathematics-Computer Science</h3>
          Brown University, Providence, RI
          <br />
          2021 - 2025
          <br />
          Computer Science Department Honors
          <br />
          <h3>
            Masters in AI and Computational Drug Discovery and Development
            (AICD3)
          </h3>
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
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
        </section>
      </main>
    </div>
  );
}
