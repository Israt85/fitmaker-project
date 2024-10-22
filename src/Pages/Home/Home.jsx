import Banner from "../../Components/Banner";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
    return (
        <div className="bg-[#1D1D1D] max-w-7xl mx-auto min-h-screen">
           <Navbar></Navbar>
           <Banner></Banner>
        </div>
    );
};

export default Home;