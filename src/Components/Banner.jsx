import React from 'react';

const Banner = () => {
    return (
        <div className="hero  max-w-6xl mx-auto h-[662px]">
  <div className="hero-content flex-col mx-auto justify-center items-center border lg:flex-row-reverse">
   <div className=' border'>
   <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className=" w-96 rounded-lg mx-auto shadow-2xl" />
   </div>
    <div className='w-1/2 mx-auto'>
      <p className='h-[198px] w-[367px] border mx-auto text-white font-vazirmatin text-4xl font-semibold'>Achive Your <span>Fitness Goals</span> With FitMaker</p>
      <p>"Join the Fitmaker community and transform your fitness journey. Our expert coaches and personalized programs are designed to help you achieve your goals and exceed your expectations. Ready to make a change?"</p>
      <button  className="btn bg-[#D90A14] border-[#D90A14] hover:bg-[#D90A14] hover:border-[#D90A14]  rounded-xl text-white"> Start your journey </button>
      <button className="btn rounded-xl btn-outline mx-4 outline-[#CD4E17] hover:border-[#CD4E17] hover:text-[#CD4E17] text-[#CD4E17]"> Exploar Programs </button>
    </div>
  </div>
</div>
    );
};

export default Banner;