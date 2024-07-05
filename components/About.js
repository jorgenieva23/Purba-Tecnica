import styles from "../styles/About.module.css";

const About = () => (
  <section id="about" className={styles.section}>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="/Jorge2.jpeg"
          alt="Jorge"
          width={325}
          height={325}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>Hola!, soy Jorge</span>
        </h1>
        <p className={styles.description}>
          <span className={styles.highlight}>Desarrollador Full Stack</span>
          {" "}con orientación hacia el frontend, desde Tucuman, Argentina
        </p>
      </div>
    </div>
  </section>
);

export default About;
