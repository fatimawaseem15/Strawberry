import React from 'react'
import Navbar from '../layout/Navbar'
import image from '/image.png';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Hero = () => {
  const [sidebar , setsidebar]= React.useState(false);
  return (
    <div>
      <main className='bg-primaryDark md:py-6 md:px-12 overflow-hidden'>
        <section className='relative min-h-[650px] bg-gradient-to-r from bg-primary to-secondary w-full md:rounded-xl shadow-md'>
            <div className="container">
                <Navbar sidebar={sidebar}
                setsidebar ={setsidebar}/>
                <div className='text-white'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center'>
                    {/* text container */}
                    <div className='space-y-4 p-4 md:mt-0 mt-[100px]'>
                        <h1 data-aos="fade-up" className='text-3xl pl-6 md:pl-14'>01___________</h1>
                        <h1 data-aos="fade-up" data-aos-delay="300" className='text-5xl font-bold uppercase text-shadow '>A healthy Fruit</h1>
                        <p  data-aos="fade-up" data-aos-delay="900" className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ipsa ea deleniti beatae maxime quis doloremque qui error quisquam, eveniet, minus placeat, repudiandae praesentium. Totam!
                        </p>
                        <button data-aos="fade-up" data-aos-delay="1200"  className='border border-white px-4 py-2 rounded-lg'>Shop Now</button>
                    </div>
                   {/* image container */}
                    <div data-aos="zoom-in"
                    >
                        <img src={image} alt="image.png" className='w-[400px] img-shadow relative z-[1]'/>
                    </div>
                    {/* blank container */}
                    <div className='md:hidden'></div>
                </div>
                </div>
                 <h1 data-aos="zoom-out"
 className='text-center text-[80px] text-white uppercase font-bold sm:text-[120px]md: text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow'>Berries</h1>

                 {
                  sidebar &&(
                  <div className='absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
                <div className='h-full w-full flex flex-col justify-center items-center gap-6'>
                  <div className='w-[1px] h-[70px] bg-white '></div>
                  
                  <div className='inline-block p-2 rounded-full text-2xl text-white cursor-pointer border border-white'>
                  <FaFacebook className='text-2xl'/>
                  </div>
                  <div className='inline-block p-2 rounded-full text-2xl text-white cursor-pointer border border-white'>
                  <FaLinkedin className='text-2xl'/>
                  </div>
                  <div className='inline-block p-2 rounded-full text-2xl text-white cursor-pointer border border-white'>
                  <FaInstagram className='text-2xl'/>
                  </div>
                  
                  <div className='w-[1px] h-[70px] bg-white'></div>

                </div>
              </div>                  )
                 }
            </div>
        </section>
      </main>
    </div>
  )
}

export default Hero
