import React, { useEffect, useState } from 'react';
import iconBookmark from '/img/Icon Button 73.png';

import avatar1 from '/img/Avatar (3).png';
import avatar2 from '/img/avt 2.png';
import avatar3 from '/img/avt 3.png';
import avatar4 from '/img/avt 4.png';

const EditorsPick = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/summerRecipes')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, []);

    const avatars = [avatar1, avatar2, avatar3, avatar4];

    return (
        <div className="text-center mt-12 px-4">
            <h2 className="text-3xl font-bold text-pink-600 mb-2">This Summer Recipes</h2>
            <p className="text-gray-600 mb-6">We have all your Independence Day sweets covered.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {recipes.map((recipe, index) => (
                    <div
                        key={recipe.id}
                        className="flex bg-white rounded-xl shadow-md p-4 items-start justify-between relative"
                    >
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-28 h-28 object-cover rounded-lg mr-4"
                        />
                        <div className="flex-1 text-left">
                            <h3 className="font-semibold text-lg text-gray-800">{recipe.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">{recipe.time}</p>
                            <div className="flex items-center mt-2">
                                <img
                                    src={avatars[index % avatars.length]}
                                    alt="chef avatar"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <p className="text-sm text-gray-700">{recipe.chef}</p>
                            </div>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{recipe.desc}</p>
                        </div>
                        <button className="absolute top-4 right-4">
                            <img src={iconBookmark} alt="bookmark" className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EditorsPick;
