import React from "react";

const recipes = [
    { title: "Italian-style tomato salad", time: "10 minutes", image: "/tomato-salad.jpg" },
    { title: "Spaghetti with vegetables", time: "15 minutes", image: "/spaghetti.jpg" },
    { title: "Lotus delight salad", time: "20 minutes", image: "/lotus-salad.jpg" },
    { title: "Snack cakes", time: "21 minutes", image: "/snack-cakes.jpg" },
];

const SummerRecipes = () => {
    return (
        <section>
            <h2 className="text-pink-600 text-2xl font-bold mb-2 text-center">This Summer Recipes</h2>
            <p className="text-center mb-6">We have all your Independence Day sweets covered.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {recipes.map((r, i) => (
                    <div key={i} className="bg-white rounded shadow overflow-hidden">
                        <img src={r.image} alt={r.title} className="w-full h-40 object-cover" />
                        <div className="p-3">
                            <p className="font-semibold text-sm">{r.title}</p>
                            <p className="text-xs text-pink-500">{r.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SummerRecipes;