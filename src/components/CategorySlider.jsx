


import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 6
            }
        }
    ]
};

const CategorySlider = () => {
    const [items, setItems] = useState([]);
    const sliderRef = useRef(null);  // Create a reference for the slider
    const [currentSlide, setCurrentSlide] = useState(0);  // State to track the current slide
    const [isNextDisabled, setIsNextDisabled] = useState(false);  // State to control the Next button visibility
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);  // State to control the Prev button visibility

    useEffect(() => {
        fetch('./fakedata.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching the data:', error));
    }, []);

    const handleBeforeChange = (oldIndex, newIndex) => {
        // Update the current slide index
        setCurrentSlide(newIndex);
    };

    useEffect(() => {
        const slidesToShow = settings.slidesToShow || 1;
        const totalSlides = items.length;

        // Disable Prev button if we're at the first slide
        setIsPrevDisabled(currentSlide === 0);

        // Disable Next button if we're at the last group of slides
        setIsNextDisabled(currentSlide >= totalSlides - slidesToShow);
    }, [currentSlide, items.length]);

    return (
        <div className="slider-container mt-5 relative overflow-hidden"> {/* Added relative position for buttons */}
            {/* Previous Button */}
            {!isPrevDisabled && (
                <button
                    className="absolute left-0 top-1/3 transform -translate-y-1/3  p-2 rounded z-10"
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <div className="flex justify-center items-center  border-[#dfdfdf]">

                        <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M16 12H8m0 0l4-4m-4 4l4 4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                        </div>

                    </div>
                </button>
            )}

            {/* Slider */}
            <Slider
                ref={sliderRef}
                {...settings}
                beforeChange={handleBeforeChange} // Listen to slide change
            >
                {
                    items.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-col h-[118px] md:h-[182px] items-center justify-between text-center">
                                <div className="md:h-[145px] h-[89px] w-[89px]  md:w-[145px] overflow-hidden rounded-full">
                                    <img
                                        className="w-full rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
                                        src={item.image}
                                        alt={item.name} // Add alt for accessibility
                                    />
                                </div>
                                <p className="text-[14px] text-[#323232]">{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>

            {/* Next Button */}
            {!isNextDisabled && (
                <button
                    className="absolute right-0 top-1/3 transform -translate-y-1/3  p-2 rounded z-10"
                    onClick={() => sliderRef.current.slickNext()}
                >
                    <div className="flex justify-center items-center  border-[#dfdfdf]">

                        <div className="flex justify-center items-center w-16 h-16 bg-white rounded-full ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path d="M8 12h8m0 0l-4-4m4 4l-4 4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>

                    </div>

                </button>
            )}
        </div>
    );
};

export default CategorySlider;


