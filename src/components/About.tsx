import Avatar from "./Avatar";
import avatar from "../static/avatar_about.jpg";
import Button from "./Button";

const About = () => {
  const resume = "/resume.pdf";

  return (
    <div>
      <h2 className="font-bold text-3xl mb-6">about</h2>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="text-slate-500 leading-7">
          <p className="pb-2">
            So, this is where I get to talk a bit about myself. My name is
            André. I&apos;m a Frontend Engineer with a great passion for
            creating beautiful, modern and intuitive User Interfaces.
          </p>
          <p className="pb-2">
            I&apos;ve always wanted to push myself and learn more. That&apos;s
            why I left France, my home country, to move to Denmark back in 2012
            where I joined the International Baccalaureate in Sønderborg. I then
            went on with studying Web Development as well as UI design at the
            International Business Academy in Kolding.
          </p>

          <p className="pb-2">
            In my spare time I enjoy, playing the guitar, reading books, cinema
            or various sports such as running, going on hikes, biking or doing
            yoga.
          </p>

          <p className="pb-2">
            I encourage you to checkout my resume to learn more about my past
            experiences and my skills.
          </p>
          <div className="mt-4">
            <a href={resume} target="_blank" rel="noreferrer">
              <Button text="open resume" />
            </a>
          </div>
        </div>
        <Avatar image={avatar} />
      </div>
    </div>
  );
};

export default About;
