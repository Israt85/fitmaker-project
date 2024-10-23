import React from 'react';
import HeadingTitle from '../Shared/Navbar/HeadingTitle/HeadingTitle';
import img1 from '../assets/Images/tool1.png'
import img2 from '../assets/Images/tool2.png'
import img3 from '../assets/Images/3.png'
import img4 from '../assets/Images/tool4.png'
import img5 from '../assets/Images/tool5.png'

const Tools = () => {
    return (
        <div  className='max-w-7xl py-10 my-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
           <div className='flex justify-between mx-2'>
           <p className='text-white font-semibold text-4xl font-vazirmatin text-left mx-2'>Our Fitness <span className='text-red-500'>Tools</span></p>
           <div>
           <div className='flex justify-center gap-4 items-center'>
           <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.5" y="0.5" width="35" height="35" rx="7.5" transform="matrix(-1 0 0 1 35 0)" stroke="white"/>
<path d="M26.3333 18H9.66665M9.66665 18L17.1666 10.5M9.66665 18L17.1666 25.5" stroke="white" stroke-width="2"/>
</svg>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="35" height="35" rx="7.5" stroke="white"/>
<path d="M9.66669 18H26.3334M26.3334 18L18.8334 10.5M26.3334 18L18.8334 25.5" stroke="white" stroke-width="2"/>
</svg>


           </div>
           <div className='flex justify-center items-center mt-1'>
            {/* 1st svg */}
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="14" rx="7" fill="#262626"/>
</svg>

            {/* 2nd svg */}
            <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="28" height="14" rx="7" fill="#D90A14"/>
</svg>
{/* 3rd svg */}
<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="14" rx="7" fill="#262626"/>
</svg>

           </div>
           </div>
           </div>
            <HeadingTitle subtitle={'Access a variety of tools to help you reach your fitness goals more effectively'}></HeadingTitle>
            <div className='grid grid-cols-3 lg:grid-cols-5 mx-auto justify-center my-10'>
                   <img className='w-60 rounded-lg h-52 mx-auto' src={img1} alt="" />
                   <img className='w-60 rounded-lg h-52 mx-auto' src={img2} alt="" />
                   <img className='w-60 rounded-lg h-52 mx-auto' src={img3} alt="" />
                   <img className='w-60 lg:block hidden rounded-lg h-52 mx-auto' src={img4} alt="" />
                   <img className='w-60 lg:block hidden rounded-lg h-52 mx-auto' src={img5} alt="" />

            </div>
        </div>
    );
};

export default Tools;