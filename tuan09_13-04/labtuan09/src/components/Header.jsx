import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 md:px-12 py-4 shadow-md bg-white sticky top-0 z-50">
            <div className="text-pink-600 font-bold text-xl">Chefify</div>
            <input
                type="text"
                placeholder="What would you like to cook?"
                className="hidden md:block border rounded px-4 py-1 w-1/3"
            />
            <nav className="space-x-6 text-sm hidden md:flex">
                <a href="#" className="hover:text-pink-500">What to cook</a>
                <a href="#" className="hover:text-pink-500">Recipes</a>
                <a href="#" className="hover:text-pink-500">Ingredients</a>
                <a href="#" className="hover:text-pink-500">Occasions</a>
                <a href="#" className="hover:text-pink-500">About Us</a>
            </nav>
            <div className="space-x-2">
                <button className="text-pink-600 border border-pink-600 rounded px-4 py-1">Login</button>
                <button className="bg-pink-500 text-white px-4 py-1 rounded">Subscribe</button>
            </div>
        </header>
    );
};

export default Header;
