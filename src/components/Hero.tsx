"use client";

import { Slide, toast, Zoom } from "react-toastify";
import Button from "./Button";

interface HeroProps {
  onNavigateTo: (section: string) => void;
}

const Hero = ({ onNavigateTo }: HeroProps) => {
  const emailAddress = "viallon.andre@gmail.com";

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(emailAddress);
    toast("Email address copied 😎", {
      position: "bottom-center",
      autoClose: 1500,
      closeButton: false,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
      className: "text-center",
    });
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="mb-6">
        <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">
          hi there!
        </p>
        <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">
          my name is andré,
        </p>
        <p className="text-3xl sm:text-5xl mb-2 sm:mb-4 font-medium">
          I&apos;m a frontend engineer.
        </p>
      </div>
      <div className="leading-10 mb-8">
        <span className="text-slate-500">
          Welcome to my portfolio. Here you can have a look at my personal work
          and learn more about me. You can also see more of my coding projects
          on{" "}
          <a
            className="hide-bottom-bar-on-hover"
            href="https://github.com/andreviallon"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          , connect with my on{" "}
          <a
            className="hide-bottom-bar-on-hover bold"
            href="https://www.linkedin.com/in/andre-viallon"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>{" "}
          or simply send me an{" "}
          <a
            className="hide-bottom-bar-on-hover bold"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleCopyEmail();
            }}
          >
            email
          </a>
          .
        </span>
      </div>
      <section className="flex">
        <div onClick={() => onNavigateTo("projects")}>
          <Button text="learn more" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
