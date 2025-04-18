import React from "react";
import chefifyLogo from "/img/chefify.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 md:px-12 py-4 shadow-md bg-white sticky top-0 z-50">
            <div className="flex items-center space-x-4">
                <img src={chefifyLogo} alt="Chefify Logo" className="h-8 w-auto" />
                <input
                    type="text"
                    placeholder="What would you like to cook?"
                    className="hidden md:block bg-gray-100 text-sm text-gray-700 rounded-md px-4 py-2 w-64 focus:outline-none"
                />
            </div>

            <nav className="space-x-6 text-sm hidden md:flex text-gray-700">
                <a href="#" className="hover:text-pink-500">What to cook</a>
                <a href="#" className="hover:text-pink-500">Recipes</a>
                <a href="#" className="hover:text-pink-500">Ingredients</a>
                <a href="#" className="hover:text-pink-500">Occasions</a>
                <a href="#" className="hover:text-pink-500">About Us</a>
            </nav>

            <div className="space-x-2">
                <button className="text-pink-600 border border-pink-500 rounded-md px-4 py-1 hover:bg-pink-50">Login</button>
                <button className="bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-600">Subscribe</button>
            </div>
        </header>
    );
};

export default Header;
