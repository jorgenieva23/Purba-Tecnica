import styles from "../styles/Interests.module.css";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "SQL" },
  { skill: "PostgreSQL" },
  { skill: "Sequelize" },
  { skill: "MongoDB" },
  { skill: "Mongoose" },
  { skill: "Next.js" },
  { skill: "Vite" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Sass" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const Interests = () => {
  return (
    <section id="interests" className={styles.section}>
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>
        About Me
        <hr className={styles.divider}></hr>
      </h1>

      <div className={styles.flexContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.subtitle}>¡Conóceme!</h1>
          <p>Hola! 👋🏻</p>
          <p>
            ¿Tienes problemas de desarrollo web que necesitan una{" "}
            <span className={styles.highlight}>
              solución rápida y eficiente
            </span>
            ? ¡Contáctame!
          </p>
          <br />
          <p>
            Soy <span className={styles.highlight}>Jorge Nieva</span>, tu{" "}
            <span className={styles.highlight}>
              desarrollador web FullStack
            </span>{" "}
            con 2 años de experiencia en tecnología. 💻
          </p>
          <br />
          <p>
            ¿Necesitas que tu sitio web funcione a la perfección? ¿Quieres que
            tu proyecto sea un <span className={styles.highlight}>éxito</span>?
            ¡Estoy aquí para hacerlo realidad!
          </p>
          <br />
          <p>
            Mi objetivo es{" "}
            <span className={styles.highlight}>
              ayudarte a alcanzar tus metas y ambiciones
            </span>
            . Con mis conocimientos y habilidades,{" "}
            <span className={styles.highlight}>
              garantizo que tus ideas se transformen en soluciones efectivas y
              personalizadas
            </span>
            .
          </p>
          <br />
          <p>
            No pierdas más tiempo buscando. Si necesitas un desarrollador que{" "}
            <span className={styles.highlight}>
              se comprometa contigo y con tus proyectos
            </span>
            , ¡contáctame!
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h1 className={styles.subtitle}>Mis habilidades Tech</h1>
          <div className={styles.skills}>
            {skills.map((item, idx) => {
              return (
                <p key={idx} className={styles.skill}>
                  {item.skill}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Interests;
