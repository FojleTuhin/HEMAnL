import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { GrDown } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoriesDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./categories.json')  
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);


    return (
        <div>
            <div className="flex gap-3 text-[#323232] items-center group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <MenuIcon className="h-6 w-6" />
                <p className="text-[15px] font-semibold">categories</p>
                <GrDown className="text-[10px] font-bold transition-transform duration-300 group-hover:rotate-180" />
            </div>

            <div
                className={`absolute left-0 top-full w-full transition-all duration-500 ease-in-out bg-white shadow-lg overflow-hidden ${isDropdownOpen ? 'max-h-screen' : 'max-h-0'}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <div className="px-12">
                    <div className="flex border-t-[1px] overflow-y-auto max-h-screen">
                        {/* Main Categories */}
                        <ul className="w-1/4 border-r-[1px]">
                            <p className="font-bold  py-5">Categories</p>
                            {items.map((category) => (
                                <li
                                    key={category.name}
                                    className=" py-4 hover:bg-gray-200 cursor-pointer"
                                    onMouseEnter={() => setHoveredCategory(category.name)} // Updated to store just the category name
                                    onMouseLeave={() => setHoveredCategory(null)}
                                >
                                    <div className="group flex justify-between pr-5 w-full items-center">
                                        <div className="flex gap-5 items-center">
                                            <img className="w-10 h-10 rounded-full" src={category.image} alt="" />
                                            <p>{category.name}</p>
                                        </div>
                                        <MdNavigateNext className="hidden group-hover:block" />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Subcategories for hovered category */}
                        <div className="w-1/4 border-r-[1px] bg-white py-5 px-6">
                            {hoveredCategory && (
                                <ul className="">
                                    {/* Find the hovered category and display its subcategories */}
                                    {items
                                        .find((category) => category.name === hoveredCategory)
                                        ?.subcategories.map((subcategory, index) => (
                                            <li key={subcategory} className={` hover:bg-gray-100 ${index === 0 ? 'font-bold pb-5' : ''} 
                                        ${index !== 0 ? 'py-5 ' : ''}`}>
                                                {subcategory}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDropdown;
