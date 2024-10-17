import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { GrDown } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const CategoriesDropdown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const items = [
        {
            name: 'baby',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw2d5a0a18/home/header-navigatie/HEMA-2024-inspiratie-800x800-wk3738-jassen2.png',
            subcategories: ['baby', 'everything in baby', 'new', 'shop by size', 'baby clothes', 'newborn clothes', 'rompers', 'care']
        },
        {
            name: 'child',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw88bc571e/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk3940-jongenmeisje.jpg',
            subcategories: ['child', 'everything in child', 'boys clothes', 'girls clothes', 'shoes', 'accessories']
        },
        {
            name: 'ladies',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw3b53cd47/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk3738-dameskleding.jpg',
            subcategories: ['ladies', 'dresses', 'tops', 'skirts', 'jeans', 'accessories']
        },
        {
            name: 'Gentlemen',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dwc6e40989/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk3940-kleding.jpg',
            subcategories: ['Gentlemen', 'shirts', 'pants', 'suits', 'jackets', 'shoes']
        },
        {
            name: 'living and sleeping',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw6519bbbb/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk41-42-dbo-nieuw.jpg',
            subcategories: ['living and sleeping', 'furniture', 'bedding', 'decor', 'lighting', 'storage']
        },
        {
            name: 'cake, food and drinks',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw63ee2eb2/home/catlisters/2024/HEMA-2024-categoryslider-280x280-wk1718-kaletaart.jpg',
            subcategories: ['cake, food and drinks', 'cakes', 'snacks', 'drinks', 'desserts', 'healthy food']
        },
        {
            name: 'leisure and office',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw6c77e3e0/home/header-navigatie/HEMA-2023-categoryslider-280x280-wk22-vrije-tijd-1.jpg',
            subcategories: ['leisure and office', 'office chairs', 'desks', 'office supplies', 'leisure wear', 'gadgets']
        },
        {
            name: 'cooking and dining',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw91c4e478/home/header-navigatie/HEMA-2024-categoryslider-280x280-keuken.jpg',
            subcategories: ['cooking and dining', 'kitchenware', 'cookware', 'tableware', 'appliances', 'dining furniture']
        },
        {
            name: 'party and gift',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw58aac92b/home/header-navigatie/HEMA-2024-categoryslider-280x280-feestcadeau.jpg',
            subcategories: ['party and gift', 'party supplies', 'gifts for him', 'gifts for her', 'wrapping', 'decorations']
        },
        {
            name: 'beautiful and healthy',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dw5eebf2e4/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk09-makeup.jpg',
            subcategories: ['beautiful and healthy', 'skincare', 'makeup', 'wellness', 'fitness equipment', 'health supplements']
        },
        {
            name: 'toys',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dwd1bf8bba/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk1718-educatiefspeelgoed.jpg',
            subcategories: ['toys', 'action figures', 'puzzles', 'board games', 'educational toys', 'dolls']
        },
        {
            name: 'Santa Claus',
            image: 'https://www.hema.nl/on/demandware.static/-/Sites/nl_NL/dwfd645da4/home/header-navigatie/HEMA-2024-categoryslider-280x280-wk40-sint-algemeen.jpg',
            subcategories: ['Santa Claus', 'Christmas gifts', 'Santa costumes', 'holiday decor', 'ornaments', 'greeting cards']
        },
    ];

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
                <div className="flex border-t-[1px]">
                    {/* Main Categories */}
                    <ul className="w-1/4 border-r-[1px]">
                        <p className="font-bold px-12 py-5">Categories</p>
                        {items.map((category) => (
                            <li
                                key={category.name}
                                className="pl-12 py-4 hover:bg-gray-200 cursor-pointer"
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
                                        <li key={subcategory} className={`py-5 hover:bg-gray-100 ${index === 0 ? 'font-bold' : ''}`}>
                                            {subcategory}
                                        </li>
                                    ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesDropdown;
