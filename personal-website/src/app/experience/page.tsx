import styles from "./page.module.css";
import Banner from "@/elements/banner";

export default function CV() {
  return (
    <div className={styles.page}>
      <Banner />
      <>
        experience: flox images, ucsf program project images, brown project
        images, TA project with students
      </>
    </div>
  );
}
