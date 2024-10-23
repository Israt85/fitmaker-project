import React from 'react';
import HeadingTitle from '../Shared/Navbar/HeadingTitle/HeadingTitle';
import trainer1 from '../assets/Images/Trainer1.png'
import trainer2 from '../assets/Images/Trainer2.png'
import trainer3 from '../assets/Images/Trainer3.png'
import trainer4 from '../assets/Images/Trainer4.png'

const Trainers = () => {
    return (
        <div className='max-w-7xl py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
        <div className='flex justify-between mx-2'>
       <p className='text-white font-semibold text-4xl font-vazirmatin text-left mx-2'>Meet Our <span className='text-red-500'>Trainers</span></p>
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
        <HeadingTitle subtitle={'At This Part you can See Few Of The Many Positive reviews Of Our Customers.'}></HeadingTitle>

        <div className='grid lg:grid-cols-4 grid-cols-3 justify-center items-center gap-10'>
            {/* trainer 1 */}
            <div className='flex shadow-lg shadow-[#D90A1429] flex-col justify-center items-center'>
                <img className='w-60 rounded-lg h-64' src={trainer1} alt="" />
                <div className='w-60 h-24 rounded-lg bg-[#262626]'>
<h1 className='py-1 px-3 text-white text-xl'>Sam Cole</h1>
<p className='text-gray-400 px-3'>Pesonal Trainer</p>
<div className='flex items-center gap-2 px-3'>
<button class="relative text-white text-sm bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold">
  <span class="relative">
    <span class="relative z-10 text-white">Learn</span>
    <span class="absolute inset-0 bg-red-500/30 blur-md rounded-md"></span>
  </span>
  <span class="text-white">More</span>
  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="#D90A14"/>
</svg>
</button>

</button>


</div>
                </div>
            </div>
            
            {/* trainer 2 */}
            <div className='flex  shadow-lg shadow-[#D90A1429] flex-col justify-center items-center'>
                <img className='w-60 rounded-lg h-64' src={trainer2} alt="" />
                <div className='w-60 h-24 rounded-lg bg-[#262626]'>
<h1 className='py-1 px-3 text-white text-xl'>Michael Harris</h1>
<p className='text-gray-400 px-3'>Pesonal Trainer</p>
<div className='flex items-center gap-2 px-3'>
<button class="relative text-white text-sm bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold">
  <span class="relative">
    <span class="relative z-10 text-white">Learn</span>
    <span class="absolute inset-0 bg-red-500/30 blur-md rounded-md"></span>
  </span>
  <span class="text-white">More</span>
  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="#D90A14"/>
</svg>
</button>

</button>


</div>
                </div>
            </div>

{/* trainer 3 */}
<div className='flex flex-col shadow-lg shadow-[#D90A1429] justify-center items-center'>
                <img className='w-60 rounded-lg h-64' src={trainer3} alt="" />
                <div className='w-60 h-24 rounded-lg bg-[#262626]'>
<h1 className='py-1 px-3 text-white text-xl'>John Anderson</h1>
<p className='text-gray-400 px-3'>Pesonal Trainer</p>
<div className='flex items-center gap-2 px-3'>
<button class="relative text-white text-sm bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold">
  <span class="relative">
    <span class="relative z-10 text-white">Learn</span>
    <span class="absolute inset-0 bg-red-500/30 blur-md rounded-md"></span>
  </span>
  <span class="text-white">More</span>
  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="#D90A14"/>
</svg>
</button>

</button>


</div>
                </div>
            </div>

{/* trainer 4 */}
<div className='flex flex-col shadow-lg shadow-[#D90A1429] justify-center items-center'>
                <img className='w-60 rounded-lg h-64' src={trainer4} alt="" />
                <div className='w-60 h-24 rounded-lg bg-[#262626]'>
<h1 className='py-1 px-3 text-white text-xl'>Tom Blake</h1>
<p className='text-gray-400 px-3'>Pesonal Trainer</p>
<div className='flex items-center gap-2 px-3'>
<button class="relative text-white text-sm bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold">
  <span class="relative">
    <span class="relative z-10 text-white">Learn</span>
    <span class="absolute inset-0 bg-red-500/30 blur-md rounded-md"></span>
  </span>
  <span class="text-white">More</span>
  <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3536 4.35355C30.5488 4.15829 30.5488 3.84171 30.3536 3.64645L27.1716 0.464466C26.9763 0.269204 26.6597 0.269204 26.4645 0.464466C26.2692 0.659728 26.2692 0.976311 26.4645 1.17157L29.2929 4L26.4645 6.82843C26.2692 7.02369 26.2692 7.34027 26.4645 7.53553C26.6597 7.7308 26.9763 7.7308 27.1716 7.53553L30.3536 4.35355ZM0 4.5H30V3.5H0V4.5Z" fill="#D90A14"/>
</svg>
</button>

</button>


</div>
                </div>
            </div>
        </div>
        <div className='w-full  my-4 flex justify-center items-center'>
            <button className='btn-outline btn border-[#CD4E17] hover:border-[#CD4E17] hover:bg-transparent text-[#CD4E17] hover:text-[#CD4E17]'>View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6 15.2L4.48 14L10.4 7.99995L4.48 1.99995L5.6 0.799951L12.8 7.99995L5.6 15.2Z" fill="#CD4E17"/>
</svg>
</button>
        </div>
        
    </div>
    );
};

export default Trainers;