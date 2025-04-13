import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h4 className="font-bold mb-2">About Us</h4>
                    <p className="mb-2">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="flex">
                        <input className="flex-1 px-2 py-1 text-black" type="email" placeholder="Enter your email" />
                        <button className="bg-pink-500 px-4">Send</button>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Learn More</h4>
                    <ul>
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Shop</h4>
                    <ul>
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Recipes</h4>
                    <ul>
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
            <div className="mt-6 text-xs text-center text-gray-400">
                © 2025 Chefify Company | Terms of Service | Privacy Policy
            </div>
        </footer>
    );
};

export default Footer;