import React from "react";
import backgroundImage from "/img/Selection.png";
import chefAvatar from "/img/avt 3.png";

const Hero = () => {
    return (
        <section
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-md shadow-xl w-[320px] text-center border-2 border-pink-200 border-dotted">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-white text-xs font-semibold px-4 py-1 rounded-md shadow">
                        Recipe of the day
                    </div>

                    <h2 className="text-pink-600 text-xl font-bold mt-4">Salad Caprese</h2>

                    <p className="text-sm text-gray-600 mt-2">
                        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil and
                        balsamic vinegar create a refreshing dish for lunch or appetizer.
                    </p>

                    <div className="flex items-center justify-center mt-4 space-x-2">
                        <img
                            src={chefAvatar}
                            alt="Chef Avatar"
                            className="w-6 h-6 rounded-full "
                        />
                        <span className="text-xs font-medium text-gray-700">Salad Caprese</span>
                    </div>

                    <button className="mt-4 bg-pink-500 text-white text-sm px-5 py-2 rounded-md hover:bg-pink-600 transition">
                        View now →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
