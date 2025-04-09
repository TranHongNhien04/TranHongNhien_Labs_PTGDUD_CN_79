import React from "react";
import chefify from '../assets/img/chefify.png';
import check from '../assets/img/check.png';
import avatar from '../assets/img/avatar.png';
import nothing from '../assets/img/nothing.png';
import menuLeft from '../assets/img/filters.png';
import chefifywhite from '../assets/img/chefifywhite.png';

import '../components/UI.css';

export default function UI() {
    return (
        <div className="container">
            <div className="header">
                <img src={chefify} alt="logo" />
                <input type="text" placeholder="cakescascsa" />
                <ul className="nav-links">
                    <li><a href="#">What to cook</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Ingredients</a></li>
                    <li><a href="#">Occasions</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
                <button><img src={check} alt="check" /> Your Recipe Box</button>
                <img src={avatar} alt="avatar" />
            </div>

            <div className="menu">
                <img src={menuLeft} alt="menu" />
            </div>

            <div className="content">
                <h1>Sorry, no results were found for "cakescasca"</h1>
                <img src={nothing} alt="nothing found" />
                <p>We have all your Independence Day sweets covered.</p>
                <button id="btn1">Sweet Cake</button>
                <button id="btn2">Black Cake</button>
                <button id="btn3">Pozole Verde</button>
                <button id="btn4">Healthy food</button>
            </div>

            <div className="footer">
                <div className="about">
                    <h3>About us</h3>
                    <p>Welcome to our Website, a wonderful place to explore and learn how to cook like a pro</p>
                    <input type="text" placeholder="Enter your email" />
                    <button>Send</button>
                    <br />
                    <div>
                        <img src={chefifywhite} alt="footer logo" />
                        <p>2023 Chefify Company</p>
                        <p>Terms of Service | Privacy Policy</p>
                    </div>
                </div>

                <div className="learn">
                    <h3>Learn More</h3>
                    <a href="#">Our Cooks</a>
                    <a href="#">See Our Features</a>
                    <a href="#">FAQ</a>
                </div>

                <div className="shop">
                    <h3>Shop</h3>
                    <a href="#">Gift Subscription</a>
                    <a href="#">Send Us Feedback</a>
                </div>

                <div className="recipes">
                    <h3>Recipes</h3>
                    <a href="#">What to Cook This Week</a>
                    <a href="#">Pasta</a>
                    <a href="#">Dinner</a>
                    <a href="#">Healthy</a>
                    <a href="#">Vegetarian</a>
                    <a href="#">Vegan</a>
                    <a href="#">Christmas</a>
                </div>
            </div>
        </div>
    );
}
