import Banner from "@/elements/banner";
import styles from "./page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        <section>Hong Lab</section>
        <section>
          <a
            className={styles.link}
            href="https://drive.google.com/file/d/149nFAIvZFRVQ295swum8E7VPv2zPeIgZ/view"
          >
            <strong>Honors Thesis: DANTURES</strong>
          </a>
          <br />
          Abstract: Multispectral object detection has fruitful applications in
          defense, agriculture, industry, and more. In our series of
          experiments, Daylight Associated Noise for Training UAV-based
          multispectral detectors, Robust to Environmental Shifts (or DANTURES,
          since it is a mouthful), we explore potential improvements of object
          detection capabilities in unmanned aerial vehicles by embedding
          determinants of environmental variance into multispectral models.
          Combining images from forward-looking infrared and visible light (RGB)
          cameras, we address challenges in object detection accuracy caused by
          variations in infrared images and visibility challenges in RGB sensing
          associated with changing times of day. We have implemented a novel
          adaptation of multispectral YOLO object detection frameworks that
          integrate RGB, infrared, and time-of-day information to dampen the
          effect of this noise, aiming to outperform traditional RGB- or IR-only
          networks.
        </section>
      </main>
    </div>
  );
}
