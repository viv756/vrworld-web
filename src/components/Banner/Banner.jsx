import { banner1 } from '../../assets'
import { BiPlayCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <div classname="py-2 sm:py-0 relative ">
      <div className='container min-h-[620px] flex items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center'>
          {/* {image section} */}
          <div>
          <img src={banner1} alt="banner" className='w-full max-w-[400px]' />
         </div>
          {/* {text section} */}
          <div className="order-2 sm:order-1 space-y-5 lg:pr-20 ">
              <h1 className="text-4xl font-semibold">
                GET READY TO ENJOY VR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Movies WITH OUR PLATFORM
                </span>
              </h1>
              <p>
                Get ready to dive into immersive virtual reality experiences
                with our cutting-edge platform. Enjoy a wide range of VR games
                designed to transport you to new worlds and provide unparalleled
                entertainment. Explore, play, and conquer in a whole new
                dimension!
              </p>
              <div className="flex gap-6">
                <button className="primary-btn">Get Started</button>
                <button className="flex items-center gap-2">
                  {" "}
                  <BiPlayCircle className="text-3xl" /> See Demo
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner