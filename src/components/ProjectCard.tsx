import { faDatabase, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import Image, { StaticImageData } from "next/image";
import StackList from "./StackList";

export interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  frontendStack?: string[];
  backendStack?: string[];
  githubLink: string;
  websiteLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-between p-4 pb-6 bg-white rounded-2xl w-full shadow-lg h-full group">
      <div>
        <div className="relative overflow-hidden rounded-2xl isolate">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="w-full object-cover block transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="px-2">
          <h2 className="text-2xl font-bold pt-4">{project.title}</h2>
          <p className="text-base pt-4 text-slate-500 description">
            {project.description}
          </p>

          {project.frontendStack && project.frontendStack.length > 0 ? (
            <div className="flex items-center pt-2 text-slate-500 stack">
              <StackList
                text="Frontend"
                icon={faPaintBrush}
                stackList={project.frontendStack}
              />
            </div>
          ) : null}

          {project.backendStack && project.backendStack.length > 0 ? (
            <div className="flex items-center pt-2 text-slate-500 stack">
              <StackList
                text="Backend"
                icon={faDatabase}
                stackList={project.backendStack}
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="px-2">
        <div className="flex gap-4 mt-6">
          <a
            className="text-center py-3 px-4 rounded-md text-neutral-900 font-medium w-full border-solid border-indigo-400 border-2 transition-transform duration-300 ease-in-out hover:-translate-y-1"
            target="_blank"
            href={project.githubLink}
            rel="noopener noreferrer"
          >
            view code
          </a>

          <a
            className="text-center py-3 px-4 rounded-md text-white font-medium w-full bg-gradient-to-r from-indigo-400 to-indigo-600 transition-transform duration-300 ease-in-out hover:-translate-y-1"
            target="_blank"
            href={project.websiteLink}
            rel="noopener noreferrer"
          >
            live demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
