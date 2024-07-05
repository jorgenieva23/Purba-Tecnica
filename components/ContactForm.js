"use client";

import { useState } from "react";
import styles from "../styles/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSuccess(true);
    }
  };

  return (
    <section id="contact" className={styles.contactForm}>
      <h2 className={styles.title}>Contactame</h2>
      {success ? (
        <p className={styles.successMessage}>¡Mensaje enviado con éxito!</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.feedbackinput}
            />
          </label>
          <label className={styles.label}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.feedbackinput}
            />
          </label>
          <label className={styles.label}>
            Mensaje:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.feedbackinput}
            />
          </label>
          <button className={styles.button} type="submit">
            Enviar
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
