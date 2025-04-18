import React from 'react';
import chefifywhite from "/img/chefifywhite.png";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 text-left">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                    <h4 className="font-bold text-lg mb-2">About Us</h4>
                    <p className="text-sm mb-4">
                        Welcome to our website, a wonderful place to explore and
                        learn how to cook like a pro.
                    </p>
                    <div className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded-md text-gray-800 bg-white w-full"
                        />
                        <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white font-semibold">
                            Send
                        </button>
                    </div>
                    <div className=" mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center space-x-3">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <img
                                src={chefifywhite}
                                alt="Cheffify"
                                className="pr-4"
                            />
                            <span className=" text-white">
                                2023 Cheffy Company
                            </span>
                        </div>
                        <div className="space-x-2">
                            <a
                                href="#"
                                className=" text-white hover:text-pink-500">
                                Terms of Service
                            </a>
                            <span>|</span>
                            <a
                                href="#"
                                className=" text-white hover:text-pink-500">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">Learn More</h4>
                    <ul className="space-y-2 text-sm mb-6">
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                    <h4 className="font-bold text-lg mb-2">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-2">Recipes</h4>
                    <ul className="space-y-2 text-sm">
                        <li>What to Cook This Week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}