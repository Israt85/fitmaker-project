import Banner from "../../Components/Banner";
import Blogs from "../../Components/Blogs";
import Countdown from "../../Components/Countdown";
import Customer from "../../Components/Customer";
import Plans from "../../Components/Plans";
import Services from "../../Components/Services";
import Tools from "../../Components/Tools";
import Trainers from "../../Components/Trainers";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-[#1D1D1D] overflow-hidden max-w-8xl mx-auto">
           <Navbar></Navbar>
           <Banner></Banner>
           <Countdown></Countdown>
           <Services></Services>
           <Plans></Plans>
           <Tools></Tools>
           <Customer></Customer>
           <Trainers></Trainers>
           <Blogs></Blogs>
        </div>
    );
};

export default Home;