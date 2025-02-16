import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  image: StaticImageData;
}

const Avatar = ({ image }: AvatarProps) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative block group">
        <div className="w-72 h-72 object-cover">
          <Image
            src={image}
            className="w-72 h-72 object-cover z-20 absolute top-4 left-4 transition-all ease-in-out duration-300 rounded-[3rem] hover:top-0 hover:left-0"
            width={288}
            height={288}
            alt="Profile picture"
          />
        </div>
        <div className="absolute top-12 left-12 w-72 h-72 bg-gradient-to-r from-indigo-500 to-indigo-600 z-10 rounded-[3rem] transition-all ease-in-out duration-300 shadow-lg shadow-indigo-300 group-hover:top-16 group-hover:left-16"></div>
      </div>
    </div>
  );
};

export default Avatar;
