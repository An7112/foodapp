import React from 'react'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'
import { heroData } from '../utils/data'


const HomeContainer = () => {
  return (
    <section className='grid grid-col-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 gap-6 flex-1 flex flex-col items-start justify-center'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
          </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
        <p className='text-base text-textColor text-center md:w-[80%] md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, repellendus quasi sint nam facere velit explicabo in dolore nemo harum eaque, officiis ullam fugit reprehenderit! Vero minus itaque veritatis.</p>
      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>Order Now</button>
      </div>
      <div className='p-2 flex-1 flex items-center relative'>
         <img src={HeroBg} alt="hero-bg" className='ml-auto h-660 lg:h-650 h-420 w-full lg:w-auto'/>
         <div className='w-full h-full absolute top-0 left-0 py-4 flex items-center justify-center gap-4 flex-wrap lg:px-32'>
            {heroData && heroData.map(ele => (
               <div key={ele.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
               <img src={ele.imageSrc} alt="I1" className='w-20 lg:w-40 -mt-10 lg:-mt-20'/>
               <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{ele.name}</p>
               <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{ele.decp}</p>
               <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span> {ele.price}</p>
             </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default HomeContainer