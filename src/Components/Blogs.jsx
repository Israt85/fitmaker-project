import React from 'react';
import HeadingTitle from '../Shared/Navbar/HeadingTitle/HeadingTitle';
import blogimg1 from '../assets/Images/blog1.jpeg'
import blogimg2 from '../assets/Images/blog2.jpeg'
import blogimg3 from '../assets/Images/blog3.jpeg'
import blogimg4 from '../assets/Images/blog4.jpeg'
import blogimg5 from '../assets/Images/blog5.jpeg'

const Blogs = () => {
    return (
        <div className='max-w-7xl py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
              <div className='flex justify-between mx-2'>
           <p className='text-white font-semibold text-4xl font-vazirmatin text-left mx-2'>Fitmaker <span className='text-red-500'>Blog Posts</span></p>
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
            <HeadingTitle subtitle={'Discover essential tips to maximize your workout results and reach your fitness goals faster.'}></HeadingTitle>
            {/* blog section */}
            <div className='flex justify-center items-center'>
                <div className='relative '>
                      <img className='w-[600px] object-cover mx-auto h-[400px]' src={blogimg1} alt="" />
                      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                      <div className='w-[570px] absolute  mx-auto h-auto left-0 right-0 bottom-0 p-3 bg-transparent'>
                         <p className='text-2xl text-white'>5 Essential Exercises for Building Muscle</p>
                        <div className='flex justify-between'>
                        <div className='flex gap-6 my-4'>
                        <div className='flex items-center gap-2'>
                         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14.5C7.71667 14.5 7.47933 14.404 7.288 14.212C7.09667 14.02 7.00067 13.7827 7 13.5C6.99933 13.2173 7.09533 12.98 7.288 12.788C7.48067 12.596 7.718 12.5 8 12.5C8.282 12.5 8.51967 12.596 8.713 12.788C8.90633 12.98 9.002 13.2173 9 13.5C8.998 13.7827 8.902 14.0203 8.712 14.213C8.522 14.4057 8.28467 14.5013 8 14.5ZM12 14.5C11.7167 14.5 11.4793 14.404 11.288 14.212C11.0967 14.02 11.0007 13.7827 11 13.5C10.9993 13.2173 11.0953 12.98 11.288 12.788C11.4807 12.596 11.718 12.5 12 12.5C12.282 12.5 12.5197 12.596 12.713 12.788C12.9063 12.98 13.002 13.2173 13 13.5C12.998 13.7827 12.902 14.0203 12.712 14.213C12.522 14.4057 12.2847 14.5013 12 14.5ZM16 14.5C15.7167 14.5 15.4793 14.404 15.288 14.212C15.0967 14.02 15.0007 13.7827 15 13.5C14.9993 13.2173 15.0953 12.98 15.288 12.788C15.4807 12.596 15.718 12.5 16 12.5C16.282 12.5 16.5197 12.596 16.713 12.788C16.9063 12.98 17.002 13.2173 17 13.5C16.998 13.7827 16.902 14.0203 16.712 14.213C16.522 14.4057 16.2847 14.5013 16 14.5ZM5 22.5C4.45 22.5 3.97933 22.3043 3.588 21.913C3.19667 21.5217 3.00067 21.0507 3 20.5V6.5C3 5.95 3.196 5.47934 3.588 5.088C3.98 4.69667 4.45067 4.50067 5 4.5H6V3.5C6 3.21667 6.096 2.97934 6.288 2.788C6.48 2.59667 6.71733 2.50067 7 2.5C7.28267 2.49934 7.52033 2.59534 7.713 2.788C7.90567 2.98067 8.00133 3.218 8 3.5V4.5H16V3.5C16 3.21667 16.096 2.97934 16.288 2.788C16.48 2.59667 16.7173 2.50067 17 2.5C17.2827 2.49934 17.5203 2.59534 17.713 2.788C17.9057 2.98067 18.0013 3.218 18 3.5V4.5H19C19.55 4.5 20.021 4.696 20.413 5.088C20.805 5.48 21.0007 5.95067 21 6.5V20.5C21 21.05 20.8043 21.521 20.413 21.913C20.0217 22.305 19.5507 22.5007 19 22.5H5ZM5 20.5H19V10.5H5V20.5ZM5 8.5H19V6.5H5V8.5Z" fill="white"/>
</svg>
<p className='text-gray-400'>August 14</p>
                         </div>
                         <div className='flex items-center gap-2'>
                         <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50943e-06 2.25C4.50943e-06 1.65326 0.237057 1.08097 0.659014 0.65901C1.08097 0.237053 1.65327 0 2.25 0H18.75C19.3467 0 19.919 0.237053 20.341 0.65901C20.763 1.08097 21 1.65326 21 2.25V18.042C21 18.492 20.925 19.023 20.643 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V5.25C22.5 5.05109 22.579 4.86032 22.7197 4.71967C22.8603 4.57902 23.0511 4.5 23.25 4.5C23.4489 4.5 23.6397 4.57902 23.7803 4.71967C23.921 4.86032 24 5.05109 24 5.25V18.75C24 19.3467 23.763 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.2455C1.95024 21 1.65788 20.9418 1.38515 20.8286C1.11242 20.7155 0.864676 20.5497 0.656103 20.3407C0.44753 20.1317 0.282222 19.8837 0.16964 19.6107C0.0570577 19.3377 -0.000587199 19.0453 4.50943e-06 18.75V2.25ZM18 19.5C18.555 19.5 18.981 19.1835 19.2795 18.8385C19.4175 18.6795 19.5 18.42 19.5 18.042V2.25C19.5 2.05109 19.421 1.86032 19.2803 1.71967C19.1397 1.57902 18.9489 1.5 18.75 1.5H2.25C2.05109 1.5 1.86033 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V18.75C1.5 19.167 1.8345 19.5 2.2455 19.5H18Z" fill="white"/>
<path d="M3 3H18V6H3V3ZM3 7.5H9V12H3V7.5ZM3 13.5H9V15H3V13.5ZM3 16.5H9V18H3V16.5ZM10.5 7.5H13.5V9H10.5V7.5ZM15 7.5H18V9H15V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM15 10.5H18V12H15V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM15 13.5H18V15H15V13.5ZM10.5 16.5H13.5V18H10.5V16.5ZM15 16.5H18V18H15V16.5Z" fill="white"/>
</svg>

<p className='text-gray-400'>Strength Training</p>
                         </div>
                        </div>
                        <button class="relative text-white text-sm py-2 px-4 bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold px-4 py-2">
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
                <div className='w-1/2 grid grid-cols-2'>
                    {/* second part 1 */}
                <div className='relative '>
                      <img className='w-[300px] object-cover mx-auto h-[200px]' src={blogimg2} alt="" />
                      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                      <div className='w-[320px] absolute  mx-auto h-auto left-0 right-0 bottom-0 p-3 bg-transparent'>
                         <p className='text-xl px-1 text-white'>The Ultimate Guide to a Balanced Diet</p>
                        <div className='flex items-center justify-between'>
                        <div className='flex gap-2 my-2'>
                       
                         <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50943e-06 2.25C4.50943e-06 1.65326 0.237057 1.08097 0.659014 0.65901C1.08097 0.237053 1.65327 0 2.25 0H18.75C19.3467 0 19.919 0.237053 20.341 0.65901C20.763 1.08097 21 1.65326 21 2.25V18.042C21 18.492 20.925 19.023 20.643 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V5.25C22.5 5.05109 22.579 4.86032 22.7197 4.71967C22.8603 4.57902 23.0511 4.5 23.25 4.5C23.4489 4.5 23.6397 4.57902 23.7803 4.71967C23.921 4.86032 24 5.05109 24 5.25V18.75C24 19.3467 23.763 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.2455C1.95024 21 1.65788 20.9418 1.38515 20.8286C1.11242 20.7155 0.864676 20.5497 0.656103 20.3407C0.44753 20.1317 0.282222 19.8837 0.16964 19.6107C0.0570577 19.3377 -0.000587199 19.0453 4.50943e-06 18.75V2.25ZM18 19.5C18.555 19.5 18.981 19.1835 19.2795 18.8385C19.4175 18.6795 19.5 18.42 19.5 18.042V2.25C19.5 2.05109 19.421 1.86032 19.2803 1.71967C19.1397 1.57902 18.9489 1.5 18.75 1.5H2.25C2.05109 1.5 1.86033 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V18.75C1.5 19.167 1.8345 19.5 2.2455 19.5H18Z" fill="white"/>
<path d="M3 3H18V6H3V3ZM3 7.5H9V12H3V7.5ZM3 13.5H9V15H3V13.5ZM3 16.5H9V18H3V16.5ZM10.5 7.5H13.5V9H10.5V7.5ZM15 7.5H18V9H15V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM15 10.5H18V12H15V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM15 13.5H18V15H15V13.5ZM10.5 16.5H13.5V18H10.5V16.5ZM15 16.5H18V18H15V16.5Z" fill="white"/>
</svg>

<p className='text-gray-400'>Nutrition</p>
                        
                        </div>
                        <button class="relative text-white text-sm py-2 ml-6 px-4 bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold px-4 py-2">
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
{/* second part 2 */}
<div className='relative '>
                      <img className='w-[300px] object-cover mx-auto h-[200px]' src={blogimg3} alt="" />
                      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                      <div className='w-[320px] absolute  mx-auto h-auto left-0 right-0 bottom-0 p-3 bg-transparent'>
                         <p className='text-xl text-white'>The Benefits of HIIT Training</p>
                        <div className='flex items-center justify-between'>
                        <div className='flex gap-2 my-2'>
                       
                         <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50943e-06 2.25C4.50943e-06 1.65326 0.237057 1.08097 0.659014 0.65901C1.08097 0.237053 1.65327 0 2.25 0H18.75C19.3467 0 19.919 0.237053 20.341 0.65901C20.763 1.08097 21 1.65326 21 2.25V18.042C21 18.492 20.925 19.023 20.643 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V5.25C22.5 5.05109 22.579 4.86032 22.7197 4.71967C22.8603 4.57902 23.0511 4.5 23.25 4.5C23.4489 4.5 23.6397 4.57902 23.7803 4.71967C23.921 4.86032 24 5.05109 24 5.25V18.75C24 19.3467 23.763 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.2455C1.95024 21 1.65788 20.9418 1.38515 20.8286C1.11242 20.7155 0.864676 20.5497 0.656103 20.3407C0.44753 20.1317 0.282222 19.8837 0.16964 19.6107C0.0570577 19.3377 -0.000587199 19.0453 4.50943e-06 18.75V2.25ZM18 19.5C18.555 19.5 18.981 19.1835 19.2795 18.8385C19.4175 18.6795 19.5 18.42 19.5 18.042V2.25C19.5 2.05109 19.421 1.86032 19.2803 1.71967C19.1397 1.57902 18.9489 1.5 18.75 1.5H2.25C2.05109 1.5 1.86033 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V18.75C1.5 19.167 1.8345 19.5 2.2455 19.5H18Z" fill="white"/>
<path d="M3 3H18V6H3V3ZM3 7.5H9V12H3V7.5ZM3 13.5H9V15H3V13.5ZM3 16.5H9V18H3V16.5ZM10.5 7.5H13.5V9H10.5V7.5ZM15 7.5H18V9H15V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM15 10.5H18V12H15V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM15 13.5H18V15H15V13.5ZM10.5 16.5H13.5V18H10.5V16.5ZM15 16.5H18V18H15V16.5Z" fill="white"/>
</svg>

<p className='text-gray-400'>Cardio</p>
                        
                        </div>
                        <button class="relative text-white text-sm py-2 ml-10 px-4 bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold px-4 py-2">
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
                {/* second part 3 */}
                <div className='relative '>
                      <img className='w-[300px] object-cover mx-auto h-[200px]' src={blogimg4} alt="" />
                      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                      <div className='w-[320px] absolute  mx-auto h-auto left-0 right-0 bottom-0 p-3 bg-transparent'>
                         <p className='text-xl text-white'>Home Workouts for Busy people</p>
                        <div className='flex items-center justify-between'>
                        <div className='flex gap-1 my-2'>
                       
                         <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50943e-06 2.25C4.50943e-06 1.65326 0.237057 1.08097 0.659014 0.65901C1.08097 0.237053 1.65327 0 2.25 0H18.75C19.3467 0 19.919 0.237053 20.341 0.65901C20.763 1.08097 21 1.65326 21 2.25V18.042C21 18.492 20.925 19.023 20.643 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V5.25C22.5 5.05109 22.579 4.86032 22.7197 4.71967C22.8603 4.57902 23.0511 4.5 23.25 4.5C23.4489 4.5 23.6397 4.57902 23.7803 4.71967C23.921 4.86032 24 5.05109 24 5.25V18.75C24 19.3467 23.763 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.2455C1.95024 21 1.65788 20.9418 1.38515 20.8286C1.11242 20.7155 0.864676 20.5497 0.656103 20.3407C0.44753 20.1317 0.282222 19.8837 0.16964 19.6107C0.0570577 19.3377 -0.000587199 19.0453 4.50943e-06 18.75V2.25ZM18 19.5C18.555 19.5 18.981 19.1835 19.2795 18.8385C19.4175 18.6795 19.5 18.42 19.5 18.042V2.25C19.5 2.05109 19.421 1.86032 19.2803 1.71967C19.1397 1.57902 18.9489 1.5 18.75 1.5H2.25C2.05109 1.5 1.86033 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V18.75C1.5 19.167 1.8345 19.5 2.2455 19.5H18Z" fill="white"/>
<path d="M3 3H18V6H3V3ZM3 7.5H9V12H3V7.5ZM3 13.5H9V15H3V13.5ZM3 16.5H9V18H3V16.5ZM10.5 7.5H13.5V9H10.5V7.5ZM15 7.5H18V9H15V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM15 10.5H18V12H15V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM15 13.5H18V15H15V13.5ZM10.5 16.5H13.5V18H10.5V16.5ZM15 16.5H18V18H15V16.5Z" fill="white"/>
</svg>

<p className='text-gray-400 text-sm w-24 '>Home Workouts</p>
                        
                        </div>
                        <button class="relative text-white text-sm py-2  px-4 bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold px-4 py-2">
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
                {/* second part 4 */}
                <div className='relative '>
                      <img className='w-[300px] object-cover mx-auto h-[200px]' src={blogimg5} alt="" />
                      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'>
                      <div className='w-[320px] absolute  mx-auto h-auto left-0 right-0 bottom-0 p-3 bg-transparent'>
                         <p className='text-xl text-white'>How to Always Stay Motivated </p>
                        <div className='flex items-center justify-between'>
                        <div className='flex gap-1 my-2'>
                       
                         <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50943e-06 2.25C4.50943e-06 1.65326 0.237057 1.08097 0.659014 0.65901C1.08097 0.237053 1.65327 0 2.25 0H18.75C19.3467 0 19.919 0.237053 20.341 0.65901C20.763 1.08097 21 1.65326 21 2.25V18.042C21 18.492 20.925 19.023 20.643 19.5H21.75C21.9489 19.5 22.1397 19.421 22.2803 19.2803C22.421 19.1397 22.5 18.9489 22.5 18.75V5.25C22.5 5.05109 22.579 4.86032 22.7197 4.71967C22.8603 4.57902 23.0511 4.5 23.25 4.5C23.4489 4.5 23.6397 4.57902 23.7803 4.71967C23.921 4.86032 24 5.05109 24 5.25V18.75C24 19.3467 23.763 19.919 23.341 20.341C22.919 20.7629 22.3467 21 21.75 21H2.2455C1.95024 21 1.65788 20.9418 1.38515 20.8286C1.11242 20.7155 0.864676 20.5497 0.656103 20.3407C0.44753 20.1317 0.282222 19.8837 0.16964 19.6107C0.0570577 19.3377 -0.000587199 19.0453 4.50943e-06 18.75V2.25ZM18 19.5C18.555 19.5 18.981 19.1835 19.2795 18.8385C19.4175 18.6795 19.5 18.42 19.5 18.042V2.25C19.5 2.05109 19.421 1.86032 19.2803 1.71967C19.1397 1.57902 18.9489 1.5 18.75 1.5H2.25C2.05109 1.5 1.86033 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V18.75C1.5 19.167 1.8345 19.5 2.2455 19.5H18Z" fill="white"/>
<path d="M3 3H18V6H3V3ZM3 7.5H9V12H3V7.5ZM3 13.5H9V15H3V13.5ZM3 16.5H9V18H3V16.5ZM10.5 7.5H13.5V9H10.5V7.5ZM15 7.5H18V9H15V7.5ZM10.5 10.5H13.5V12H10.5V10.5ZM15 10.5H18V12H15V10.5ZM10.5 13.5H13.5V15H10.5V13.5ZM15 13.5H18V15H15V13.5ZM10.5 16.5H13.5V18H10.5V16.5ZM15 16.5H18V18H15V16.5Z" fill="white"/>
</svg>

<p className='text-gray-400 text-sm w-24 '>Motivation</p>
                        
                        </div>
                        <button class="relative text-white text-sm py-2  px-4 bg-transparent border-none"><button class="relative flex items-center gap-2 text-lg font-semibold px-4 py-2">
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
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;