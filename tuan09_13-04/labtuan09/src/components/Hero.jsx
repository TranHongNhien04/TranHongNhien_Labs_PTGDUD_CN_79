import React from "react";

const Hero = () => {
    return (
        <section
            className="relative h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('/hero-image.jpg')" }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-6 rounded-lg w-80">
                <p className="text-yellow-500 text-sm font-semibold">Recipe of the day</p>
                <h2 className="text-lg font-bold mt-2">Salad Caprese</h2>
                <p className="text-sm mt-1">
                    Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil and
                    balsamic vinegar create a refreshing dish for lunch or appetizer.
                </p>
                <p className="text-xs mt-2 font-semibold">Salad Caprese</p>
                <button className="mt-3 text-white bg-pink-500 px-4 py-1 rounded">View now →</button>
            </div>
        </section>
    );
};

export default Hero;
