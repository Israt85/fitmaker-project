import React from 'react';

const Countdown = () => {
    return (
        <div className='max-w-7xl mx-auto'>
        <div className="stats bg-transparent mx-auto flex justify-center items-center space-x-10">
          
          {/* First Stat */}
          <div className="stat w-[250px] h-auto place-items-center text-center">
            <div className="stat-value p-2 text-[#D90A14]">96% 
              <span className='text-lg text-white'> Client Satisfaction</span>
            </div>
            <div className="stat-desc text-gray-500 text-xs">Our members love their results and experience</div>
          </div>
      
          {/* Second Stat */}
          <div className="stat w-[250px] h-auto place-items-center text-center border border-[#D90A14]">
            <div className="stat-value p-2 text-orange-500">+5 
              <span className='text-lg text-white'> Years Of Experience</span>
            </div>
            <div className="stat-desc text-gray-500 text-xs">Trust in our proven track record of transforming</div>
          </div>
      
          {/* Third Stat */}
          <div className="stat w-[250px] h-auto place-items-center text-center border border-[#D90A14]">
            <div className="stat-value p-2 text-[#D90A14]">+800 
              <span className='text-lg text-white'> Active members</span>
            </div>
            <div className="stat-desc text-gray-500 text-xs">Join our thriving fitness community</div>
          </div>
      
          {/* Fourth Stat */}
          <div className="stat w-[250px] h-auto place-items-center text-center border border-[#D90A14]">
            <div className="stat-value p-2 text-orange-500">24/7 
              <span className='text-lg text-white'> Support Available</span>
            </div>
            <div className="stat-desc text-gray-500 text-xs">Expert assistance whenever you need it</div>
          </div>
      
        </div>
      </div>
      
    );
};

export default Countdown;