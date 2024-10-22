import React from 'react';
import HeadingTitle from '../Shared/Navbar/HeadingTitle/HeadingTitle';

const Plans = () => {
    return (
        <div className='max-w-7xl mx-auto py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent min-h-screen'>
            <HeadingTitle title1={'Our'} title2={'Plans'} subtitle={'Select the plan that suits your fitness goals and let our expert coaches guide you every step of the way.'}></HeadingTitle>
            <div className='flex w-full justify-center items-center my-6'>
                <div className='w-36  flex justify-center items-center h-10 bg-[#D90A14] rounded-full'>
                    <p className='text-center text-white'> Monthly</p>
                </div>
                <div className='w-36 flex -ml-6 justify-center items-center h-10 border border-[#D90A14] rounded-full'>
                    <p className='text-center text-white'> Annually</p>
                </div>

            </div>
            {/* plans */}
            <div className='flex lg:flex-row flex-wrap gap-6'>
                {/* first plan */}
                <div className='w-96 mx-auto rounded-lg h-[570px] border-2 border-[#CD4E17]'>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-6'>Packages</p>
                    <p className='text-center text-3xl font-bold text-white'>PRO PLAN</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Description</p>
                    <p className='text-base px-3  text-white' style={{ wordSpacing: '0.3rem' }}>Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Features</p>
                    <p className='px-12 text-white'>
                    <ul className='list-disc'>
                        <li>Access to All Of Our Exercise Videos </li>
                        <li>Progress Tracking</li>
                       <li> Supportive Online Community</li>
                        <li>Advanced, Personalized Workout Plans</li>
                        <li>Comprehensive Nutrition Coaching</li>
                       <li> Access to Advanced Workout Programs </li>
                        <li>Body Composition Analysis</li>
                </ul>
                    </p>
                    <p className='text-center text-white text-2xl p-4 font-bold'>99$<span className='text-gray-400 text-sm'>/usdt</span></p>

                    <div className='w-full flex justify-center items-center'>
                    <div className='w-80  flex justify-center items-center h-10 bg-[#CD4E17] rounded-full'>
                    <p className='text-center text-white'> Choose This Plan</p>
                </div>
                    </div>
            </div>
{/* second plan */}
<div className='w-96 rounded-lg mx-auto h-[570px] border-2 border-[#CD4E17]'>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-6'>Packages</p>
                    <p className='text-center text-3xl font-bold text-white'>PRO PLAN</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Description</p>
                    <p className='text-base px-3  text-white' style={{ wordSpacing: '0.3rem' }}>Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Features</p>
                    <p className='px-12 text-white'>
                    <ul className='list-disc'>
                        <li>Access to All Of Our Exercise Videos </li>
                        <li>Progress Tracking</li>
                       <li> Supportive Online Community</li>
                        <li>Advanced, Personalized Workout Plans</li>
                        <li>Comprehensive Nutrition Coaching</li>
                       <li> Access to Advanced Workout Programs </li>
                        <li>Body Composition Analysis</li>
                </ul>
                    </p>
                    <p className='text-center text-white text-2xl p-4 font-bold'>99$<span className='text-gray-400 text-sm'>/usdt</span></p>

                    <div className='w-full flex justify-center items-center'>
                    <div className='w-80  flex justify-center items-center h-10 bg-[#CD4E17] rounded-full'>
                    <p className='text-center text-white'> Choose This Plan</p>
                </div>
                    </div>
            </div>

            {/* Third plan */}
            <div className='w-96 mx-auto rounded-lg h-[570px] border-2 border-[#CD4E17]'>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-6'>Packages</p>
                    <p className='text-center text-3xl font-bold text-white'>PRO PLAN</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Description</p>
                    <p className='text-base px-3  text-white' style={{ wordSpacing: '0.3rem' }}>Our Pro Plan offers advanced workouts and personalized nutrition coaching to help you reach your goals faster. Sign Up Right Now!</p>
                    <p className='text-base font-vazirmatin text-[#CD4E17] text-center my-3'>Features</p>
                    <p className='px-12 text-white'>
                    <ul className='list-disc'>
                        <li>Access to All Of Our Exercise Videos </li>
                        <li>Progress Tracking</li>
                       <li> Supportive Online Community</li>
                        <li>Advanced, Personalized Workout Plans</li>
                        <li>Comprehensive Nutrition Coaching</li>
                       <li> Access to Advanced Workout Programs </li>
                        <li>Body Composition Analysis</li>
                </ul>
                    </p>
                    <p className='text-center text-white text-2xl p-4 font-bold'>99$<span className='text-gray-400 text-sm'>/usdt</span></p>

                    <div className='w-full flex justify-center items-center'>
                    <div className='w-80  flex justify-center items-center h-10 bg-[#CD4E17] rounded-full'>
                    <p className='text-center text-white'> Choose This Plan</p>
                </div>
                    </div>
            </div>
        </div>
        </div >
    );
};

export default Plans;