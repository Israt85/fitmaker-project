import HeadingTitle from "../Shared/Navbar/HeadingTitle/HeadingTitle";
import img1 from '../assets/Images/customerleft.png'
import img2 from '../assets/Images/rightleft1.png'
import img3 from '../assets/Images/right2.png'


const Customer = () => {
    return (
        <div className='max-w-7xl bg-[#1D1D1D] py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
            <HeadingTitle title1={'What Our'} title2={'Customer Say'} subtitle={'At This Part you can See Few Of The Many Positive reviews Of Our Customers.'}></HeadingTitle>
            <div className="flex lg:flex-row justify-center items-end gap-6">
                <div>
                     <img className="w-72  h-80 mx-auto md:h-80" src={img1} alt="" />
                </div>
              <div className="flex justify-center items-end gap-2">
              <div className="lg:w-[622px] w-60 justify-end bg-[#5B0408] shadow-[#D90A1429] shadow-lg rounded-lg h-[350px] md:h-[200px]">
                <div className="flex justify-between py-3 px-4">
                    <div>
                          <h1 className="md:text-xl text-lg text-white">Steven Haward</h1>
                          <p className="text-gray-500">Our Trainer</p>
                    </div>
                    <div>
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8 5.4001L15.2 0.600098H10.4C5.09599 0.600098 0.799988 7.2961 0.799988 12.6001V29.4001H17.6V12.6001H7.99999C7.99999 5.4001 12.8 5.4001 12.8 5.4001ZM29.6 12.6001C29.6 5.4001 34.4 5.4001 34.4 5.4001L36.8 0.600098H32C26.696 0.600098 22.4 7.2961 22.4 12.6001V29.4001H39.2V12.6001H29.6Z" fill="#D90A14"/>
</svg>

                    </div>
                </div>
                <p className="p-2 text-xs text-white" style={{wordSpacing:'0.2rem'}}>I’ve been using Fitmaker for the past three months, and I’m genuinely impressed. The website is easy to navigate, and everything is laid out clearly. I purchased the Premium Plan, and the personalized coaching has been a game-changer for me. My coach is incredibly supportive and always available to answer my questions. The weekly video sessions keep me motivated, and the custom meal plans have helped me stay on track with my goals. Highly recommended for anyone serious about their fitness journey!</p>

</div>
<div className='flex justify-center p-2 gap-2 items-center'>
           <svg className="md:block hidden" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="-0.5" y="0.5" width="35" height="35" rx="7.5" transform="matrix(-1 0 0 1 35 0)" stroke="white"/>
<path d="M26.3333 18H9.66665M9.66665 18L17.1666 10.5M9.66665 18L17.1666 25.5" stroke="white" stroke-width="2"/>
</svg>
<svg className="md:block hidden" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="35" height="35" rx="7.5" stroke="white"/>
<path d="M9.66669 18H26.3334M26.3334 18L18.8334 10.5M26.3334 18L18.8334 25.5" stroke="white" stroke-width="2"/>
</svg>


           </div>
              </div>
               <div className="md:block hidden">
               <div className="w-[216px]  mr-2 items-center flex gap-2 h-auto">
                     <img className="w-28 md:block hidden rounded-lg mx-auto h-72" src={img2} alt="" />
                     <img className="w-28 md:block hidden mx-auto rounded-lg h-72" src={img3} alt="" />
                </div>
               </div>
            </div>
            
        </div>
    );
};

export default Customer;