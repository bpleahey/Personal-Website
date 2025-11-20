import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function Experience() {
  // TODO: highlight more brown projects
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        <section>
          <h2>Education</h2>
          <h3>Bachelor of Science in Mathematics-Computer Science</h3>
          <p>
            <strong>Brown University, Providence, RI </strong>2021 - 2025
            <br></br>
            Computer Science Department Honors, Divison 1 Track and Field/Cross
            Country Athlete
          </p>
          <figure className={`${styles.imageGridWithSub} ${styles.twoColumns}`}>
            <div className={styles.imageWithCaption}>
              <img
                src="images/experience/arnoldgrad.jpg"
                alt="House photo feat. merlin"
                width="30%"
              />
              <p className={styles.subCaption}>House Grads + Merlin</p>
            </div>

            <div className={styles.imageWithCaption}>
              <div>
                <img
                  src="images/experience/running.jpg"
                  alt="Running action shot"
                />
                <img
                  src="images/experience/xcclass.JPEG"
                  alt="2025 Brown Men's Cross Country"
                />
                <p className={styles.subCaption}>
                  Brown Cross Country / Track and Field
                </p>
              </div>
            </div>
          </figure>
          <h4>Projects</h4>
          <ul>
            <li>
              <p>
                <a href="https://yang2888.github.io/Regimen-demo/">
                  <strong>RegiViz:</strong> A Tool for Generating and
                  Visualizing Cancer Regimens
                </a>
                <br></br>
                For a master&apos;s course, CSCI 2370: Interdisciplinary
                Scientific Visualization, we presented a tool to generate cancer
                regimen visualization and analysis leveraging large language
                models. We completed this project in collaboration with Dr.
                Jeremy Warner, Dr. Sanjay Mishra, and Dr. Sandeep Jain of
                Brown&apos;s Warren Alpert Medical School. A preliminary course
                paper is available{" "}
                <a href="https://drive.google.com/file/d/1KFsmoZJq4qtSU4UIuxh3igwkvUmT014S/view?usp=sharing">
                  <strong> here</strong>.
                </a>
              </p>
              <figure className={styles.singleImageFigure}>
                <img
                  src="images/experience/regiviz/regiviz.png"
                  alt="RegiViz visualization interface"
                />
                <figcaption>
                  Project visualization UI found on our demo website. Future
                  plans include solid cancer factor visualization and a more
                  traditional calendar demonstration.
                </figcaption>
              </figure>
              <figure className={styles.imageGridWithSub}>
                <div className={styles.imageWithCaption}>
                  <img
                    src="images/experience/regiviz/baseline.png"
                    alt="Baseline tool performance"
                  />
                  <p className={styles.subCaption}>
                    ChemoExperts Baseline time to generate a visualization.
                  </p>
                </div>

                <div className={styles.imageWithCaption}>
                  <img
                    src="images/experience/regiviz/our_tool.png"
                    alt="Our tool performance"
                  />
                  <p className={styles.subCaption}>
                    RegiViz showed significantly improved time to generate a
                    regimen visualization.
                  </p>
                </div>

                <div className={styles.imageWithCaption}>
                  <img
                    src="images/experience/regiviz/bar_chart.png"
                    alt="Clinical accuracy comparison"
                  />
                  <p className={styles.subCaption}>
                    Our tool demonstrated greater clinical accuracy across
                    criteria that patients were shown to value in previous study
                    polls.
                  </p>
                </div>

                <figcaption>
                  <strong>Figure:</strong> Comparison of our tool&apos;s
                  performance relative to a ChemoExperts baseline. Top row shows
                  comparison of time to generate a regimen visualization with
                  clinically relevant 5 and 10 minute thresholds to represent
                  average time to treat a patient. Results showed clear
                  improvement in our method over competitors.
                </figcaption>
              </figure>
            </li>
            <li>
              <p>
                <a href="https://cadance-deployment.vercel.app/">
                  <strong>CaDance: </strong>
                </a>
                create your own running playlists tailored to your cadence and
                perceived effort! Contact me to be added to our permitted users
                list, as the Spotify API is rate limited. I also generated a
                companion app in the native Garmin language, MonkeyC, to allow
                users to see what biometric data to input into CaDance on the
                web application.
              </p>
              <figure className={styles.singleImageFigure}>
                <img
                  src="images/experience/cadance.png"
                  alt="RegiViz visualization interface"
                />
                <figcaption>
                  CaDance app that can be accessed after logging in! After
                  entering your desired cadence and perceived effort level, the
                  app generates a custom playlist on a webplayer that you may
                  import into your Spotify account.
                </figcaption>
              </figure>
            </li>
          </ul>
          <h3>
            Master&apos;s in AI and Computational Drug Discovery and Development
            (AICD3)
          </h3>
          <p>
            <strong>University of California San Francisco </strong>
            Expected 2025 - 2026
          </p>

          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7369113921938472962?collapsed=1"
            title="Embedded post"
          ></iframe>
          <h4>Projects</h4>
          <ul>
            <li>
              <strong>
                <a href="https://proteinbase.com/competitions/adaptyv-nipah-competition">
                  Nipah Binder Competition
                </a>
              </strong>
              <br />
              The Nipah virus emerged recently and has exhibited high mortality
              and pandemic potential. Our class is participating in a
              competition to identify de novo molecule candidates that bind to
              and inhibit the Nipah virus. We are applying several frameworks,
              including ProtRL and Protein Hunter to generate potential amino
              acid sequences. Results to come soon!
            </li>
            <li>
              <p>
                <strong>Agentic Pharmacovigilance</strong>
                <br />
                We are developing an agentic approach to autonomously process
                adverse patient event details and output regulatory reports for
                postmarket drug surveillance. We begin by applying an NLP model
                to parse and sort unstructured text for relevant adverse events.
                Then, we utilize a RAG-based causality identification model
                leveraging the PubMed API to produce structured ICSR E2B(R3) and
                E2C(R2) reports according to FDA guideline documents. We
                hypothesize an agentic PV system can streamline cumbersome and
                time sensitive case study reporting pipelines while maintaining
                auditability and human levels of regulatory compliance.
              </p>
              <figure className={styles.comparisonFigure}>
                <div className={styles.comparisonContainer}>
                  <div className={styles.comparisonItem}>
                    <img
                      src="images/experience/nonagenticpv.png"
                      alt="Traditional pharmacovigilance workflow"
                    />
                    <p className={styles.comparisonCaption}>
                      Traditional Manual Workflow
                    </p>
                  </div>

                  <div className={styles.comparisonArrow}>
                    →
                    <span className={styles.comparisonArrowText}>
                      Streamlined &<br />
                      Automated
                    </span>
                  </div>

                  <div className={styles.comparisonItem}>
                    <img
                      src="images/experience/agenticpv.png"
                      alt="Agentic pharmacovigilance workflow"
                    />
                    <p className={styles.comparisonCaption}>
                      Agentic AI-Powered Workflow
                    </p>
                  </div>
                </div>

                <figcaption>
                  <strong>Figure:</strong> Comparison of traditional manual
                  pharmacovigilance reporting (left) versus our proposed agentic
                  AI system (right). The agentic approach automates adverse
                  event parsing, causality assessment, and regulatory report
                  generation, significantly reducing processing time while
                  maintaining compliance standards.
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
        <section>
          <h2>Work Experience</h2>
          <h3></h3>
          <h3>Graduate Student Researcher</h3>
          <p>
            <strong>Hong Lab at UCSF, San Francisco, CA </strong>June
            2025-Present
          </p>
          <p>
            I am a graduate student researcher under Professor Julian Hong of
            the Department of Radiation Oncology at UCSF. The Hong Lab is
            focused on machine learning and individualized clinical care. I am
            leading computer vision efforts within the lab and supporting
            coworkers with less technical backgrounds. My current focuses on
            using digital pathology and clinical data for outcome and subtype
            prediction, which I talk more about in{" "}
            <a href="research">Research</a>!
          </p>
          <figure className={styles.singleImageFigure}>
            <img
              src="images/experience/lab.jpg"
              alt="Hong Lab team with former Governor Jerry Brown"
            />
            <figcaption>Our lab with former Governor Jerry Brown!</figcaption>
          </figure>
          <h3>Undergraduate Teaching Assistant</h3>
          <p>
            <strong>Brown University, Providence, RI </strong>January 2025-May
            2025
          </p>
          I was an undergraduate teaching assistant for CSCI1430: Computer
          Vision. I held weekly office hours on topics ranging from stereo
          vision to convolutional neural networks. I mentored various final
          project groups, one of which made a violent content detector that can
          be seen below!
          <figure className={`${styles.imageGridWithSub} ${styles.twoColumns}`}>
            <div className={styles.imageWithCaption}>
              <img src="images/experience/TAing.JPG" alt="Group photo!" />
              <p className={styles.subCaption}>Group Photo!</p>
            </div>

            <div className={styles.imageWithCaption}>
              <img
                src="images/experience/violencedetector.gif"
                alt="Violence detection system demonstration"
              />
              <p className={styles.subCaption}>
                Student Project: Violent Content Detector
              </p>
            </div>

            <figcaption>
              <strong>Figure:</strong> Teaching CSCI1430: Computer Vision at
              Brown University, mentoring students on projects including this
              violent content detection system.
            </figcaption>
          </figure>
          <h3>Detection (Artificial Intelligence) Intern</h3>
          <p>
            <strong>FLOX, Stockholm, SE</strong> June 2023-August 2023
          </p>
          <p>
            At FLOX, I worked on long-ranged multimodal detection algorithms to
            aid their efforts in autonomous drone herding in a project with the
            city of Stockholm to herd canadian geese away from beaches. I made
            significant data contributions by implementing a stereo vision image
            alignment pipeline and improved mAP on combined RGB-infrared image
            representations.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/uG7myL0HPHM?si=lEM2r9hc-b6G89pf&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
      </main>
    </div>
  );
}
