import Banner from "../../Components/Banner";
import Countdown from "../../Components/Countdown";
import Plans from "../../Components/Plans";
import Services from "../../Components/Services";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-[#1D1D1D] max-w-7xl mx-auto min-h-screen">
           <Navbar></Navbar>
           <Banner></Banner>
           <Countdown></Countdown>
           <Services></Services>
           <Plans></Plans>
        </div>
    );
};

export default Home;