"use client"; // Añade esta línea si utilizas hooks en este archivo

import Head from "next/head";
import Header from "../components/Header";
import About from "@/components/About";
import Interests from "../components/Interests";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio de </title>
      </Head>
      <Header />
      <About />
      <Interests />
      <ContactForm />
    </div>
  );
};

export default Home;
