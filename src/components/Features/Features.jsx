import {FeaturesData} from '../../constants/index'

const Features = () => {
  return (
    <div className="container py-14 sm:min-h-[600px] ">
      <div>
        <h1 className='text-3xl font-semibold text-center sm:text-4xl mb-12'>Why Choose Us</h1>
        {/* {card section} */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 '>
          {FeaturesData.map((data, index) => (
            <div className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300'>
              <div className='grid place-items-center'>{data.icon}</div>
              <h1 className='text-2xl '>{data.name}</h1>
              <p>{data.description}</p>
              <a href={ data.link}  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-black duration-300"> Learn More</a>
            </div>
          ))}
        </div>
      </div>

   </div>
  )
}

export default Features