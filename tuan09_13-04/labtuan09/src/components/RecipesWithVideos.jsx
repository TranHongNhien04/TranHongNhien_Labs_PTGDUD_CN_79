import React from "react";

const videos = [
    { title: "Salad with cabbage and shrimp", time: "30 minutes", image: "/cabbage-shrimp.jpg" },
    { title: "Salad of cove beans", time: "20 minutes", image: "/beans-potatoes.jpg" },
    { title: "Sunny-side up fried egg", time: "15 minutes", image: "/sunny-egg.jpg" },
    { title: "Lotus delight salad", time: "20 minutes", image: "/lotus-salad.jpg" },
];

const RecipesWithVideos = () => {
    return (
        <section>
            <h2 className="text-pink-600 text-2xl font-bold mb-2 text-center">Recipes With Videos</h2>
            <p className="text-center mb-6">Cooking Up Culinary Creations with Step-by-Step Videos</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {videos.map((v, i) => (
                    <div key={i} className="bg-white rounded shadow overflow-hidden">
                        <img src={v.image} alt={v.title} className="w-full h-40 object-cover" />
                        <div className="p-3">
                            <p className="font-semibold text-sm">{v.title}</p>
                            <p className="text-xs text-pink-500">{v.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecipesWithVideos;