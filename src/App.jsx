import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Quotes from "./components/Quotes/Quotes";
import AppStore from "./components/AppStore/AppStore";
import Footer from "./components/Footer/Footer";
import PopupPlayer from "./components/PopupPlayer/PopupPlayer";
import { useEffect, useState } from "react";

import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  const [isPlay, setIsPlay] = useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  },[])

  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <Features />
      <AppStore />
      <Footer />
      {/* {video player} */}
      <PopupPlayer isPlay={isPlay} togglePlay={togglePlay} />
    </main>
  );
};

export default App;
