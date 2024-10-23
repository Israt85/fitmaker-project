import HeadingTitle from "../Shared/Navbar/HeadingTitle/HeadingTitle";
import Form from "./Form";


const Community = () => {
    return (
        <div className='max-w-7xl flex gap-4 justify-center py-10 bg-gradient-to-r from-transparent via-[#D90A141F] to-transparent mx-auto h-auto'>
       <div>
       <div className=''>
       <p className='text-white font-semibold text-4xl font-vazirmatin text-left mx-2'>Join Our <span className='text-red-500'>Fitness Community</span></p>
      
       </div>
       <p className="text-sm w-[610px] p-3 text-gray-300">Sign up now to unlock exclusive access to personalized workout plans, expert coaching, and a supportive community that will help you achieve your fitness goals.</p>
       <div className="flex w-[610px] lg:flex-row flex-wrap gap-2 flex-col justify-center items-center">
        <div className="w-[300px] rounded-lg bg-[#1D1D1D] mx-auto shadow-2xl shadow-[#D90A141F] h-[114px]">
        <p className="text-[#D90A14] font-medium text-center text-lg">Personalized <span className="text-white">Workout Plans</span></p>
        <p className="text-gray-400 text-sm p-1">Customized routines that match your fitness level and goals, ensuring you achieve the best results in the most efficient way.</p>
        </div>
        <div className="w-[300px] rounded-lg mx-auto bg-[#1D1D1D] shadow-2xl shadow-[#D90A141F] h-[114px]">
        <p className=" text-white text-center text-lg">Expert <span className="text-[#D90A14] font-medium">Coaching</span></p>
        <p className="text-gray-400 text-sm p-1">Work with certified trainers who will guide you every step of the way to ensure you're on the right track.</p>
        </div>
        <div className="w-[300px] mx-auto rounded-lg bg-[#1D1D1D] shadow-2xl shadow-[#D90A141F] h-[114px]">
        <p className=" text-white text-center text-lg">Community <span className="text-[#D90A14] font-medium">Support</span></p>
        <p className="text-gray-400 text-sm p-1">Work with certified trainers who will guide you every step of the way to ensure you're on the right track.</p>
        </div>
        <div className="w-[300px] rounded-lg mx-auto bg-[#1D1D1D] shadow-2xl shadow-[#D90A141F] h-[114px]">
        <p className=" text-white text-center text-lg">Exclusive <span className="text-[#D90A14] font-medium">Resources</span></p>
        <p className="text-gray-400 text-sm p-1">Access premium content, including video tutorials, nutrition guides, and member-only discounts on fitness gear.</p>
        </div>
       </div>
       </div>
       <div className="w-[610px] mx-auto h-[400px] rounded-lg bg-[#5B0408]">

        {/* Tabs */}
      <div className="w-full flex justify-center gap-2 items-center mx-auto">
      <p className="text-[#D90A14] border-b-4 p-1 text-2xl border-[#D90A14] font-semibold">
        Sign up
      </p>
      <p className="text-[#EE8E93] font-semibold p-1 text-2xl">Login</p>
      </div>
      <div>
      <Form></Form>
      </div>
       </div>
            
        </div>
    );
};

export default Community;