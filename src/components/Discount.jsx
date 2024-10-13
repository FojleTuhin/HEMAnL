import { GrFormNext } from "react-icons/gr";

const Discount = () => {
    return (
        <div>
            <div className="bg-[#9C1AFF] w-full h-14 md:h-10 flex justify-center items-center text-white px-4">
                <div className="flex w-full gap-2 justify-center items-center md:h-4">
                    <div className="md:flex gap-2 justify-center text-center items-center">
                        <p className="font-bold">20% discount until 23.59</p>
                        <p className="text-[14px]"> on almost everything</p>
                    </div>
                    <GrFormNext className="font-extrabold hidden md:block h-5 w-5 float-right" />
                </div>
                <GrFormNext className="font-extrabold h-5 w-5 md:hidden" />

            </div>
        </div>
    );
};

export default Discount;