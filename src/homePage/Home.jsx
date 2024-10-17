
// import Discount from "@/components/Discount";
import { RiSearchLine } from "react-icons/ri";
import Navbar from "../components/Navbar";
import { Menubar } from "@/components/component/menubar";
import { useEffect, useState } from "react";




const Home = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Detect if the user has scrolled more than 50px down the page
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <div>
            {/* <Discount /> */}
            <div className='max-w-7xl mx-auto relative'>


                <Navbar />

                <div className={`sticky top-0 z-50 bg-white transition-all duration-600 ease-out md:pt-[13px] pb-4 lg:px-12 md:pl-8 md:pr-5 pr-1 pl-4 ${isSticky ? "py-4 shadow-md" : "py-4"
                    }`}>
                    <Menubar />
                </div>


                {/* searchbar */}
                <div className="px-4">
                    <div className="h-11 px-6 py-3 bg-[#efefef] flex md:hidden rounded-full  items-center justify-between flex-grow basis-0 leading-none">
                        <p className="text-[16px] text-[#767676]">what are you looking for?</p>
                        <RiSearchLine className="font-bold text-[20px] text-black" />
                    </div>
                </div>




                <img src="https://www.geeky-gadgets.com/wp-content/uploads/2024/09/how-to-use-Google-translate-in-2024.jpg" alt="" />







            </div>
        </div>
    );
};

export default Home;