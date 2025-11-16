// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
import Banner from "@/elements/banner";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <Banner />
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
              I am a Master&apos;s student in the AI and Computational Drug
              Discovery and Development (AIC3) Program, where I am building on
              my background in computer vision and machine learning to explore
              biomedical and pharmaceutical applications. I recently earned my
              B.Sc. in Mathematics and Computer Science from Brown University,
              where I completed an honors thesis on improving RGB–infrared
              object detection models. My interests include computer vision,
              computational biology, health informatics, and deep learning. I
              also ran Track and Field/Cross Country at Brown, and I joined the
              triathlon club here at UCSF, which I hope to compete in soon!
              <br />
              <br />
              I recently graduated from Brown University, where I studied
              Mathematics and Computer Science. I obtained my B.Sc. and
              completed a thesis on improving RGB-infrared object detection
              models to receive departmental honors. My interests include
              computer vision, computational biology, and deep learning. I was
              also on the Track and Field/Cross Country teams at Brown, and I
              have set my sights on triathlon!
              <br />
              <br />I am continuing to apply my experience in computer vision in
              UCSF's Hong Lab. We are working to apply deep learning pipelines
              to digital pathology images. More details can be found in
              {" Research"}
              <a href="Research"></a>. The potential for real clinical impact in
              oncology has been both exciting and motivating.
              <br />
              <br />
              Through the AICD3 program, I am strengthening my foundation in
              machine learning and gaining expertise in pharmacy. Recent
              projects have shown how language models can impact all stages of
              drug discovery and development. For more details, see
              <a href="experience">
                <strong> Experience</strong>
              </a>{" "}
              or{" "}
              <a href="CV">
                <strong>CV</strong>
              </a>
              . I am looking forward to our final quarter, where I will complete
              a capstone project in collaboration with major pharmacy partners.
              <br />
              <br />I am excited to be back in the Bay Area, and I look forward
              to contributing to meaingful research. I hope to continue research
              with clinical impact in a PhD or in industry after graduating next
              summer!
              {/* I am a Master's Student in the AI and Computational Drug Discovery and Development (AICD3) Program, where I am building on my background in computer vision and machine learning to explore biomedical applications. I earned my B.Sc. in Mathematics and Computer Science from Brown University, where I completed an honors thesis on improving RGB–infrared object detection models.

I am continuing to apply my experience in computer vision in UCSF's Hong Lab. Applying deep learning frameworks to digital radical prostatectomy whole slide images, we aim to classify adverse histologies and patterns of recurrence to strengthen clinical workflows. The potential for real clinical impact in oncology has been both exciting and motivating.

Through the AICD3 program, I am strengthening my foundation in machine learning and gaining expertise in pharmacy. Recent projects have shown how language models can impact all stages of drug discovery and development. We are currently developing an agent to parse and sort unstructured advent reports to produce FDA-required structured regulatory reports. The Nipah Virus Binder competition presents us with a real-world chance at contributing to de novo protein design to combat a disease with high mortality and pandemic potential. Fitting protein language models into reinforcement learning frameworks, we hope to produce competitive small molecules. I am looking forward to our final quarter, where I will complete a capstone project in collaboration with major pharmacy partners.

I hope to continue research with clinical impact in a PhD or in industry after graduating next summer! */}
            </p>
            <div
              style={{
                width: "33%",
                height: "33%",
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
