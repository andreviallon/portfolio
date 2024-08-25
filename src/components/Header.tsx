import { useState } from "react";
// import resume from "../static/resume.pdf";
import { Anchor } from "./Anchor";

interface HeaderProps {
  onNavigateTo?: (el: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (el?: string): void => {
    setIsMenuOpen(!isMenuOpen);
    if (el && onNavigateTo) {
      onNavigateTo(el);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100 h-16 sm:h-24">
        <div className="flex p-6 sm:py-8 sm:px-10 justify-between items-center">
          <Anchor
            href="/"
            label="André viallon"
            showBarOnHover={true}
            size="large"
          />
          <div className="hidden md:flex gap-8">
            <Anchor
              href="/projects"
              onClick={() => toggleMenu("projects")}
              label="projects"
              showBarOnHover={true}
              size="large"
            />
            <Anchor
              href="/about"
              onClick={() => toggleMenu("about")}
              label="about"
              showBarOnHover={true}
              size="large"
            />
            <Anchor
              href="/resume"
              isExternalLink={true}
              label="resume"
              showBarOnHover={true}
              size="large"
            />
          </div>
          <div className="flex md:hidden cursor-pointer">
            {isMenuOpen ? (
              <span className="text-lg" onClick={() => toggleMenu()}>
                close
              </span>
            ) : (
              <span className="text-lg" onClick={() => toggleMenu()}>
                menu
              </span>
            )}
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-gray-100 sm:hidden flex justify-center items-center z-30">
          <div className="flex flex-col items-center mt-12">
            <a
              className="text-2xl mb-10"
              href="/"
              onClick={() => toggleMenu("projects")}
            >
              projects
            </a>
            <a
              className="text-2xl mb-10"
              href="/"
              onClick={() => toggleMenu("about")}
            >
              about
            </a>
            <a
              // href={resume}
              target="_blank"
              rel="noreferrer"
              className="text-2xl mb-10"
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
