import React from "react";
import { app_store, play_store } from "../../assets";
const AppStore = () => {
  return (
    <div className="container py-10 sm:min-h[400px] sm:grid sm:place-items-center">
      <div className="space-y-6 max-w-xl mx-auto">
        <h1
          data-aos="fade-up"
          className="text-2xl text-center sm:text-4xl font-semibold"
        >
          Get Started with our app
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center sm:px-20"
        >
          {" "}
          Get ready to dive into immersive virtual reality experiences
          entertainment. Explore, play, and conquer in a whole new dimension!
        </p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <a href="#" data-aos="fade-up" data-aos-delay="500">
            <img
              src={app_store}
              alt="appstore"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
          <a href="#" data-aos="fade-up" data-aos-delay="700">
            <img
              src={play_store}
              alt="appstore"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
