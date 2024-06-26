import { banner1 } from "../../assets";
import { BiPlayCircle } from "react-icons/bi";

const Banner = ({ togglePlay }) => {
  return (
    <div className="py-2 sm:py-0 relative ">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* {image section} */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={banner1} alt="banner" className="w-full max-w-[400px]" />
          </div>
          {/* {text section} */}
          <div className=" lg:pr-20 relative">
            <div className="space-y-5 relative z-10">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                Dive into the immersive world of virtual reality movies with our
                cutting-edge platform. Experience cinema like never before,
                where every scene surrounds you in stunning 360-degree views.
                Join us and transform your movie-watching experience with the
                ultimate VR adventure!
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onClick={togglePlay}
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" /> See Demo
                </button>
              </div>
            </div>
            {/* {backgroud color glob} */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
