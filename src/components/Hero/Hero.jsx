import { hero } from "../../assets";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
      <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            <div className="space-y-5 lg:pr-20">
              <h1 className="text-4xl font-semibold">GET READY TO ENJOY VR{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">GAMES WITH OUR PLATFORM</span>
              </h1>
              <p>Get ready to dive into immersive virtual reality experiences with our cutting-edge platform. Enjoy a wide range of VR games designed to transport you to new worlds and provide unparalleled entertainment. Explore, play, and conquer in a whole new dimension!</p>
            </div>
            <div>
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
