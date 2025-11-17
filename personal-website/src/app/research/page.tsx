import Banner from "@/elements/banner";
import styles from "./page.module.css";

export default function Research() {
  return (
    <div className={styles.page}>
      <Banner />
      <main>
        <section>
          <a href="https://honglab.ucsf.edu/" className={styles.link}>
            <strong className={styles.sectionTitle}>Hong Lab</strong>
          </a>
          <p>
            The Hong lab is a radiation oncology lab with a focus on machine
            learning and individualized clinical care. I am leading computer
            vision efforts within the Hong Lab. My current research focuses on
            applying deep learning frameworks to H&E stained, post-radial
            prostatectomy whole slide images and tabular clinical data. We hope
            to classify patterns of recurrence and Gleason grade four subtypes
            to improve prognostication and treatment planning for prostate
            cancer.
          </p>

          {/* TODO: add architecture flow diagram similar to below: whole slide image -> patch feature encoding -> 
          slide feature encoding -> patient-level fusion -> classification */}

          <svg
            viewBox="0 0 1000 300"
            preserveAspectRatio="xMidYMid meet"
            className={styles.diagram}
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#666" />
              </marker>
            </defs>

            {/* Tabular Clinical Data Input */}
            <rect
              x="20"
              y="10"
              width="150"
              height="60"
              fill="#27AE60"
              stroke="#196F3D"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="95"
              y="45"
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="bold"
            >
              Tabular Clinical Data
            </text>
            <line
              x1="95"
              y1="70"
              x2="250"
              y2="110"
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Whole Slide Image Input */}
            <rect
              x="20"
              y="110"
              width="150"
              height="80"
              fill="#4A90E2"
              stroke="#2E5C8A"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="95"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              WSI
            </text>

            {/* Patch Feature Encoding */}
            <rect
              x="250"
              y="110"
              width="150"
              height="80"
              fill="#E24A4A"
              stroke="#8A2E2E"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="325"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Patch Encoding
            </text>

            {/* Arrow from WSI */}
            <line
              x1="170"
              y1="150"
              x2="250"
              y2="150"
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Slide Feature Encoding */}
            <rect
              x="450"
              y="110"
              width="150"
              height="80"
              fill="#9B59B6"
              stroke="#6C3483"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="525"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Slide Encoding
            </text>
            <line
              x1="400"
              y1="150"
              x2="450"
              y2="150"
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Patient-level Fusion */}
            <rect
              x="650"
              y="110"
              width="150"
              height="80"
              fill="#E67E22"
              stroke="#A04000"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="725"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Patient-level Fusion
            </text>
            <line
              x1="600"
              y1="150"
              x2="650"
              y2="150"
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />

            {/* Classification Output */}
            <rect
              x="850"
              y="110"
              width="150"
              height="80"
              fill="#3498DB"
              stroke="#1F618D"
              strokeWidth="2"
              rx="5"
            />
            <text
              x="925"
              y="155"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              Classification Output
            </text>
            <line
              x1="800"
              y1="150"
              x2="850"
              y2="150"
              stroke="#666"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        </section>
        <section>
          <a
            href="https://drive.google.com/file/d/149nFAIvZFRVQ295swum8E7VPv2zPeIgZ/view"
            className={styles.link}
          >
            <strong className={styles.sectionTitle}>
              Honors Thesis: DANTURES
            </strong>
          </a>
          <span className={styles.subtitle}>
            Daylight Associated Noise for Training UAV-based Multispectral
            Detectors, Robust to Environmental Shifts
          </span>

          <p>
            <strong>Abstract:</strong> Multispectral object detection has
            applications in defense, agriculture, and industry. This thesis
            explores improvements to UAV-based object detection by embedding
            environmental variance into multispectral models. Combining
            forward-looking infrared (FLIR) and RGB cameras, I address detection
            accuracy challenges caused by infrared variations and RGB visibility
            issues across changing times of day.
          </p>

          <p>
            I implemented novel adaptations of the YOLOv7 framework integrating
            RGB, infrared, and time-of-day information through custom fusion
            layers, gated multimodal units (GMU), and cross-attention
            mechanisms. The work introduces several extensible PyTorch layers
            (DualLayer, FusionLayer, SymmetricCrossAttention) that enable
            time-conditioned modality fusion for improved detection across
            environmental conditions.
          </p>

          <div className={styles.architectureDiagram}>
            <h4>Architecture Overview</h4>
            <svg viewBox="0 0 800 300" className={styles.diagram}>
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="#666" />
                </marker>
              </defs>

              {/* RGB Input */}
              <rect
                x="20"
                y="80"
                width="80"
                height="60"
                fill="#4A90E2"
                stroke="#2E5C8A"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="60"
                y="115"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                RGB
              </text>

              {/* IR Input */}
              <rect
                x="20"
                y="160"
                width="80"
                height="60"
                fill="#E24A4A"
                stroke="#8A2E2E"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="60"
                y="195"
                textAnchor="middle"
                fill="white"
                fontSize="14"
                fontWeight="bold"
              >
                IR
              </text>

              {/* Time-of-Day */}
              <rect
                x="20"
                y="10"
                width="80"
                height="50"
                fill="#50C878"
                stroke="#2E8A4F"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="60"
                y="30"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                Time-of-Day
              </text>
              <text
                x="60"
                y="45"
                textAnchor="middle"
                fill="white"
                fontSize="10"
              >
                Embedding
              </text>

              {/* Fusion Layer */}
              <rect
                x="180"
                y="100"
                width="100"
                height="100"
                fill="#9B59B6"
                stroke="#6C3483"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="230"
                y="125"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="bold"
              >
                Fusion Layer
              </text>
              <text
                x="230"
                y="145"
                textAnchor="middle"
                fill="white"
                fontSize="10"
              >
                (DualLayer +
              </text>
              <text
                x="230"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="10"
              >
                FusionLayer)
              </text>
              <text
                x="230"
                y="180"
                textAnchor="middle"
                fill="white"
                fontSize="9"
              >
                Gated / GMU /
              </text>
              <text
                x="230"
                y="192"
                textAnchor="middle"
                fill="white"
                fontSize="9"
              >
                Cross-Attention
              </text>

              {/* YOLOv7 Backbone */}
              <rect
                x="350"
                y="100"
                width="120"
                height="100"
                fill="#E67E22"
                stroke="#A04000"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="410"
                y="130"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="bold"
              >
                YOLOv7
              </text>
              <text
                x="410"
                y="150"
                textAnchor="middle"
                fill="white"
                fontSize="11"
              >
                Backbone
              </text>
              <text
                x="410"
                y="170"
                textAnchor="middle"
                fill="white"
                fontSize="9"
              >
                (Feature
              </text>
              <text
                x="410"
                y="182"
                textAnchor="middle"
                fill="white"
                fontSize="9"
              >
                Extraction)
              </text>

              {/* Detection Head */}
              <rect
                x="540"
                y="100"
                width="120"
                height="100"
                fill="#3498DB"
                stroke="#1F618D"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="600"
                y="130"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="bold"
              >
                Detection
              </text>
              <text
                x="600"
                y="150"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="bold"
              >
                Head
              </text>
              <text
                x="600"
                y="175"
                textAnchor="middle"
                fill="white"
                fontSize="10"
              >
                Bounding Boxes
              </text>
              <text
                x="600"
                y="188"
                textAnchor="middle"
                fill="white"
                fontSize="10"
              >
                + Classes
              </text>

              {/* Output */}
              <rect
                x="720"
                y="125"
                width="60"
                height="50"
                fill="#27AE60"
                stroke="#1E8449"
                strokeWidth="2"
                rx="5"
              />
              <text
                x="750"
                y="145"
                textAnchor="middle"
                fill="white"
                fontSize="11"
                fontWeight="bold"
              >
                Output
              </text>
              <text
                x="750"
                y="160"
                textAnchor="middle"
                fill="white"
                fontSize="9"
              >
                Detections
              </text>

              {/* Arrows */}
              <line
                x1="100"
                y1="110"
                x2="180"
                y2="130"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="100"
                y1="190"
                x2="180"
                y2="170"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="100"
                y1="35"
                x2="230"
                y2="100"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
                strokeDasharray="5,5"
              />
              <line
                x1="280"
                y1="150"
                x2="350"
                y2="150"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="470"
                y1="150"
                x2="540"
                y2="150"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <line
                x1="660"
                y1="150"
                x2="720"
                y2="150"
                stroke="#666"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            </svg>
          </div>

          <figure className={styles.imageGridWithSub}>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/gmu_batch_1.png"
                alt="GMU approach batch 1"
              />
              <span className={styles.subCaption}>GMU Approach Batch 1</span>
            </div>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/gmu_batch_2.png"
                alt="GMU approach batch 2"
              />
              <span className={styles.subCaption}>GMU Approach Batch 2</span>
            </div>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/learned_batch_1.png"
                alt="Learned fusion batch 1"
              />
              <span className={styles.subCaption}>Learned Fusion Batch 1</span>
            </div>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/learned_batch_2.png"
                alt="Learned fusion batch 2"
              />
              <span className={styles.subCaption}>Learned Fusion Batch 2</span>
            </div>
            <figcaption>
              Highlighted model outputs. We see that GMU and Learned Fusion
              approaches predict with high confidence but struggle to
              distinguish between car and truck features, likely due to dataset
              issues. We believe that with refinement, this would quickly
              outperform the baseline.
            </figcaption>
          </figure>

          <figure className={styles.imageGrid}>
            <img
              src="images/thesis/heatmap_1.jpg"
              alt="Feature activation heatmap 1"
            />
            <img
              src="images/thesis/heatmap_2.jpg"
              alt="Feature activation heatmap 2"
            />
            <img
              src="images/thesis/heatmap_3.jpg"
              alt="Feature activation heatmap 3"
            />
            <img
              src="images/thesis/heatmap_4.jpg"
              alt="Feature activation heatmap 4"
            />
            <figcaption>
              Heatmap visualization of feature activations from my mid-fusion
              approach
            </figcaption>
          </figure>

          <figure className={styles.imageGridWithSub}>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/earlyfusion_1.jpg"
                alt="Pre-sunrise/post-sunset fusion"
              />
              <span className={styles.subCaption}>
                Pre-sunrise / Post-sunset
              </span>
            </div>
            <div className={styles.imageWithCaption}>
              <img
                src="images/thesis/earlyfusion_2.jpg"
                alt="Post-sunrise or pre-sunset fusion"
              />
              <span className={styles.subCaption}>
                Post-sunrise or Pre-sunset
              </span>
            </div>
            <div className={styles.imageWithCaption}>
              <img src="images/thesis/earlyfusion_3.jpg" alt="Noon fusion" />
              <span className={styles.subCaption}>Noon</span>
            </div>
            <figcaption>
              Early fusion results at different time-of-day labels
            </figcaption>
          </figure>

          <div className={styles.resultsTable}>
            <h4>Top Model Performance (mAP@0.5)</h4>
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Precision</th>
                  <th>Recall</th>
                  <th>mAP@0.5</th>
                  <th>mAP@0.5:0.95</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IR Only (Full)</td>
                  <td>0.931</td>
                  <td>0.925</td>
                  <td>0.966</td>
                  <td>0.637</td>
                </tr>
                <tr>
                  <td>Early Fusion (Perceptron)</td>
                  <td>0.899</td>
                  <td>0.889</td>
                  <td>0.933</td>
                  <td>0.580</td>
                </tr>
                <tr>
                  <td>GMU (Baseline)</td>
                  <td>0.881</td>
                  <td>0.912</td>
                  <td>0.943</td>
                  <td>0.586</td>
                </tr>
                <tr>
                  <td>Early Fusion (Manual)</td>
                  <td>0.859</td>
                  <td>0.910</td>
                  <td>0.923</td>
                  <td>0.574</td>
                </tr>
                <tr>
                  <td>Middle Fusion (Learned)</td>
                  <td>0.910</td>
                  <td>0.849</td>
                  <td>0.926</td>
                  <td>0.572</td>
                </tr>
                <tr>
                  <td>GMU (Learned)</td>
                  <td>0.849</td>
                  <td>0.906</td>
                  <td>0.929</td>
                  <td>0.564</td>
                </tr>
                <tr>
                  <td>RGB Only (Full)</td>
                  <td>0.876</td>
                  <td>0.829</td>
                  <td>0.888</td>
                  <td>0.485</td>
                </tr>
                <tr>
                  <td>Cross-Attention (Learned)</td>
                  <td>0.793</td>
                  <td>0.861</td>
                  <td>0.874</td>
                  <td>0.518</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Key Contributions:</strong> Created a time-labeled RGB-IR
            dataset of 12,000+ image pairs; achieved 93.3% mAP@0.5 with
            perceptron-based early fusion; demonstrated adaptive gating can
            potentially learn more meaningful feature representations across
            varying lighting conditions while maintaining real-time performance.
          </p>

          <div className={styles.links}>
            <a href="https://github.com/bpleahey/dantures">GitHub Repository</a>
            <a href="https://drive.google.com/file/d/149nFAIvZFRVQ295swum8E7VPv2zPeIgZ/view">
              Full Thesis (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
