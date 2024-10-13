
const Navbar = () => {
    return (
        <div className="px-12 pt-[13px] pb-4  ">
            <div className=" justify-between pt-0 pb-3 hidden lg:flex border-b-[1px] border-[#f5f5f5]">
                <div className="flex gap-5 font-semibold h-4 leading-none text-[#323232] text-[14px]">

                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> photo service</p>
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> tickets & deals</p>
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> insurances</p>
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> inspiration</p>



                </div>
                <div className="flex gap-5 font-semibold h-4 leading-none text-[#323232] text-[14px]">
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> shops</p>
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> customer cars</p>
                    <p className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"> customer service</p>

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Navbar;