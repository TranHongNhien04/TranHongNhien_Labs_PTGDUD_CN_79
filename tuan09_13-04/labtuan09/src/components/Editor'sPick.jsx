import React from "react";

const picks = [
    {
        title: "Stuffed sticky rice ball",
        time: "34 minutes",
        author: "Jennifer King",
        image: "/rice-ball.jpg",
    },
    {
        title: "Strawberry smoothie",
        time: "40 minutes",
        author: "Matthew Martinez",
        image: "/smoothie.jpg",
    },
    {
        title: "Latte Art",
        time: "19 minutes",
        author: "Sarah Hill",
        image: "/latte-art.jpg",
    },
    {
        title: "Butter fried noodles",
        time: "15 minutes",
        author: "Julia Lopez",
        image: "/fried-noodles.jpg",
    },
];

const EditorsPick = () => {
    return (
        <section>
            <h2 className="text-pink-600 text-2xl font-bold mb-2 text-center">Editor's pick</h2>
            <p className="text-center mb-6">
                Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {picks.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white rounded shadow p-4">
                        <img src={p.image} alt={p.title} className="w-24 h-24 object-cover rounded" />
                        <div>
                            <h3 className="font-bold text-sm mb-1">{p.title}</h3>
                            <p className="text-xs text-gray-500 mb-1">{p.time} • by {p.author}</p>
                            <p className="text-xs text-gray-600 line-clamp-2">
                                {p.title === "Stuffed sticky rice ball"
                                    ? "Sticky rice balls with flavorful surprise filling..."
                                    : p.title === "Strawberry smoothie"
                                        ? "Savor the refreshing delight of a strawberry smoothie..."
                                        : p.title === "Latte Art"
                                            ? "Latte art is the skillful craft of creating..."
                                            : "Savory noodles cooked in butter for a delicious meal..."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EditorsPick;

