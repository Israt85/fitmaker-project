import React from 'react';
import HeadingTitle from '../Shared/Navbar/HeadingTitle/HeadingTitle';
import service1 from '../assets/Images/service1.png'
import service2 from '../assets/Images/service2.png'
import service3 from '../assets/Images/service3.png'
import service4 from '../assets/Images/service4.png'

const Services = () => {
    return (
        <div className='max-w-7xl py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
            <HeadingTitle title1={'Our'} title2={'Services'} subtitle={'At This Part You Can Easily access all of our servises. take a look at them and chose wich ever you want.'}></HeadingTitle>
         <div className='w-full flex justify-center my-6 gap-10 h-auto'>
           
            
                <img className='w-[280px] h-[285px]' src={service1} alt="" />
                <img className='w-[280px] h-[285px]' src={service2} alt="" />
                <img className='w-[280px] h-[285px]' src={service3} alt="" />
                <img className='w-[280px] h-[285px]' src={service4} alt="" />
            

         </div>



        </div>
    );
};

export default Services;