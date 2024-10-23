import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-6xl py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
            <h1 className='text-white text-center text-4xl my-2'>FAQ</h1>
            <div className="join join-vertical w-full mx-auto">
  <div className="collapse collapse-arrow join-item border-[#D90A14] border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title bg-[#262626] text-xl font-medium text-white">What is FitMaker and how can it help me reach my fitness goals?</div>
    <div className="collapse-content border-[#D90A14] border bg-[#262626]">
      <p className=' text-gray-400'>FitMaker is an online fitness platform that offers personalized workout plans, expert coaching, and comprehensive nutritional guidance. Whether you're looking to lose weight, build muscle, or simply stay fit, our tailored programs and community support will help you achieve your fitness goals.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-[#CD4E17] border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl bg-[#262626] text-white font-medium">How do I get started with a workout plan on FitMaker?</div>
    <div className="collapse-content bg-[#262626]">
      <p>hello</p>
    </div>
  </div>
  {/* 3rd */}
  <div className="collapse collapse-arrow join-item border-[#CD4E17] border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl bg-[#262626] text-white font-medium">What is included in the Custom Plan?</div>
    <div className="collapse-content bg-[#262626]">
      <p>hello</p>
    </div>
  </div>
  {/* 4th */}
  <div className="collapse collapse-arrow join-item border-[#CD4E17] border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl bg-[#262626] text-white font-medium">Can I change my plan after signing up?</div>
    <div className="collapse-content bg-[#262626]">
      <p>hello</p>
    </div>
  </div>
  {/* 5th */}
  <div className="collapse collapse-arrow join-item border-[#CD4E17] border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl bg-[#262626] text-white font-medium">What kind of support can I expect from my trainer?</div>
    <div className="collapse-content bg-[#262626]">
      <p>hello</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Faq;