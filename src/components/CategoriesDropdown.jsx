import { MenuIcon } from "lucide-react";
import { GrDown } from "react-icons/gr";

const CategoriesDropdown = () => {

    return (
        <div>
            <div className="flex gap-3 text-[#323232] items-center group">
                <MenuIcon className="h-6 w-6" />
                <p className="text-[15px] font-semibold">categories</p>
                <GrDown className="text-[10px] font-bold transition-transform duration-300 group-hover:rotate-180" />

               

            </div>

        </div>
    );
};

export default CategoriesDropdown;
