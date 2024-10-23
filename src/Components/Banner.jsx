import React from 'react';
import banner from '../assets/Images/bannerImg.png'

const Banner = () => {
    return (
        <div className="hero bg-[#1D1D1D] max-7xl mx-auto h-auto lg:h-[662px]">
  <div className="hero-content flex-col mx-auto justify-center items-center lg:flex-row-reverse">
   
   <div className=' border'>
   <img
      src={banner}
      className=" w-96 rounded-lg mx-auto shadow-2xl" />
   </div>
    <div className='w-1/2 mx-auto'>
      <p className='flex flex-col justify-center items-center h-[198px] w-[367px] mx-auto text-white font-vazirmatin text-4xl font-semibold'> <span>Achive Your</span>
       <span className='bg-gradient-to-r from-[#D20C13] to-[#CC4E17] bg-clip-text text-transparent text-5xl font-semibold'>Fitness Goals</span>
       <span> With FitMaker</span></p>
      <p className='text-white mx-6 '>Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</p>
     <div className='m-4 flex'>
     <button  className="btn w-[250px] h-[44px] bg-[#D90A14] border-[#D90A14] hover:bg-[#D90A14] hover:border-[#D90A14]  rounded-xl text-white"> Start your journey </button>
     <button className="btn w-[250px] h-[44px] rounded-xl btn-outline mx-6 outline-[#CD4E17] hover:border-[#CD4E17] hover:text-[#CD4E17] text-[#CD4E17]"> Exploar Programs </button>
     </div>
    </div>
    
  </div>
</div>
    );
};

export default Banner;