import React, { useEffect, useState } from 'react';
import bookmarkIcon from '/img/Icon Button 73.png';

const RecipesWithVideos = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/videoRecipes')
            .then(res => res.json())
            .then(data => setVideos(data));
    }, []);

    return (
        <div className="text-center mt-12 px-4">
            <h2 className="text-3xl font-bold text-pink-600 mb-2">Recipes With Videos</h2>
            <p className="text-gray-600 mb-6">
                Cooking Up Culinary Creations with Step-by-Step Videos
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
                {videos.map(video => (
                    <div
                        key={video.id}
                        className="w-56 rounded-xl shadow-md bg-white overflow-hidden relative hover:shadow-lg transition"
                    >
                        <img
                            src={video.image}
                            alt={video.title}
                            className="w-full h-36 object-cover"
                        />

                        <div className="p-4 text-left">
                            <p className="font-semibold text-sm text-gray-800 leading-tight">
                                {video.title}
                            </p>
                            <p className="text-xs text-pink-500 font-medium mt-1">
                                {video.time}
                            </p>
                        </div>
                        <img
                            src={bookmarkIcon}
                            alt="bookmark"
                            className="w-5 h-5 absolute bottom-4 right-4"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipesWithVideos;
