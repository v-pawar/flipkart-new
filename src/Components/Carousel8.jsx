import React from "react";

const Carousel8 = () => {
    const carouselItems = [
         { title: "oppo k13", price: "From ₹9,999", category: " ", image: "/img/mobail1.jpg" },
        { title: "samsung galaxy s25", price: "From ₹68,999", category: "", image: "/img/mobail2.jpg" },
        { title: "nothing phone (3a)", price: "From ₹24,999", category: "", image: "/img/mobail3.jpg" },
        { title: "google pixel 9", price: "From ₹62,999", category: "", image: "/img/mobail4.jpg" },
        { title: "realme p3x 5g", price: "From ₹12,499", category: "", image: "/img/mobail5.jpg" },
        { title: "vivo t4 lite 5g", price: "From ₹9,999", category: "", image: "/img/mobail6.jpg" },
        { title: "vivo v60", price: "From ₹54,999", category: "", image: "/img/mobail7.jpg" },
        { title: "vivo v50", price: "From ₹44,499", category: "", image: "/img/vivo.jpg" },
        { title: "iphone 17pro max", price: "From ₹1,49,999", category: "", image: "/img/apple.jpg" },

     ];

    return (
        <div className="bg-white py-8 px-4 mt-4 max-w-[70rem] mx-auto h-[347px]">
            <div className="max-w-[75rem] mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Deals</h2>

                {/* Scrollable Carousel */}
                <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[170px] bg-white rounded-lg overflow-hidden"
                            style={{ height: "250px" }}
                        >
                            {/* Image Container - Fixed height with centered content */}
                            <div className="h-[150px] flex items-center justify-center p-2 bg-white -50 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center">
                                {/* Title */}
                                <h3 className="font-semibold text-base line-clamp-2 mb-1">
                                    {item.title}
                                </h3>

                                {/* Price */}
                                <p className=" text-gray-800 font-bold text-sm mb-1">
                                    {item.price}
                                </p>

                                {/* Category */}
                                <span className="text-xs text-gray-500">
                                    {item.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default Carousel8;