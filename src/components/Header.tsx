"use client";

import { useState } from "react";

interface HeaderProps {
  onNavigateTo: (section: string) => void;
}

const Header = ({ onNavigateTo }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (section?: string): void => {
    setIsMenuOpen(!isMenuOpen);
    if (section) {
      onNavigateTo(section);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-100 h-16 sm:h-24">
        <div className="flex p-6 sm:py-8 sm:px-10 justify-between items-center">
          <div
            onClick={() => {
              setIsMenuOpen(false);
              onNavigateTo("header");
            }}
          >
            <a className="text-xl bottom-bar-on-hover font-medium cursor-pointer">
              andré viallon
            </a>
          </div>

          <div className="hidden sm:flex">
            <div onClick={() => onNavigateTo("projects")}>
              <a className="bottom-bar-on-hover ml-10 font-medium text-lg cursor-pointer">
                projects
              </a>
            </div>
            <div onClick={() => onNavigateTo("about")}>
              <a className="bottom-bar-on-hover ml-10 font-medium text-lg cursor-pointer">
                about
              </a>
            </div>
            <a
              href="/resume.pdf"
              className="bottom-bar-on-hover ml-10 font-medium text-lg cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </div>

          <div className="flex sm:hidden cursor-pointer">
            <span className="font-medium" onClick={() => toggleMenu()}>
              {isMenuOpen ? "close" : "menu"}
            </span>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-slate-100 sm:hidden flex justify-center items-center z-30">
          <div className="flex flex-col items-center mt-12">
            <div onClick={() => toggleMenu("projects")}>
              <a className="text-2xl mb-10 font-medium cursor-pointer">
                projects
              </a>
            </div>
            <div onClick={() => toggleMenu("about")}>
              <a className="text-2xl mb-10 font-medium cursor-pointer">about</a>
            </div>
            <a
              href="/resume.pdf"
              className="text-2xl mb-10 font-medium cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
