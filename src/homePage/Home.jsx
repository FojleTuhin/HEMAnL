
// import Discount from "@/components/Discount";
import { RiSearchLine } from "react-icons/ri";
import Navbar from "../components/Navbar";




const Home = () => {
    return (
        <div>
            {/* <Discount /> */}
            <div className='max-w-7xl mx-auto'>
                <Navbar />


                {/* searchbar */}
                <div className="px-4">
                    <div className="h-11 px-6 py-3 bg-[#efefef] flex md:hidden rounded-full  items-center justify-between flex-grow basis-0 leading-none">
                        <p className="text-[16px] text-[#767676]">what are you looking for?</p>
                        <RiSearchLine className="font-bold text-[20px] text-black" />
                    </div>
                </div>

                





            </div>
        </div>
    );
};

export default Home;