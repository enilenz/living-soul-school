import Image from "next/image";

type HeroProps = {
  bgImage: string; // URL or imported image (e.g., MyImage.src)
  heading: string;
  paragraph: string;
};

const Hero: React.FC<HeroProps> = ({ bgImage, heading, paragraph }) => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-white w-full max-w-7xl flex flex-col mx-auto px-8 gap-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          {heading}
        </h1>

        <p className="text-sm sm:text-base max-w-3xl mx-auto md:mx-0">
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default Hero;
