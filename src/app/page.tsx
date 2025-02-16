"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import Projects from "../components/Projects";
import About from "../components/About";
import avatar from "../static/avatar_hero.jpg";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const handleScrollTo = (elementId: string) => {
    console.log(elementId);
    const element = document.getElementById(elementId);
    if (element) {
      const offset = -100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Andre Viallon | Portfolio</title>
      </Head>

      <div className="h-full" id="header">
        <Header onNavigateTo={handleScrollTo} />
        <div className="container mx-auto px-8 h-full">
          <div className="flex h-screen">
            <div className="flex w-full xl:w-1/2">
              <Hero onNavigateTo={handleScrollTo} />
            </div>
            <div className="hidden xl:flex xl:w-1/2">
              <Avatar image={avatar} />
            </div>
          </div>
          <div id="projects" />
          <Projects />
          <div className="mt-16">
            <div id="about" />
            <About />
          </div>
          <p className="mt-48 mb-24 flex justify-center w-full">
            ©{year} André Viallon, all rights reserved.
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
