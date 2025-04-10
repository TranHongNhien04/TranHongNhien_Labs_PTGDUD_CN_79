import React from 'react';
import { NavLink } from 'react-router-dom';
import GroupImage from '../assets/img/Group.png';
import Code from '../assets/img/Code.png';
import Squares from '../assets/img/Squares four 1.png';
import Chat from '../assets/img/Chat.png';
import Folder from '../assets/img/Folder.png';
import Groups from '../assets/img/Groups.png';
import Logo from '../assets/img/Image 1858.png';
import Pie_chart from '../assets/img/Pie chart.png';

function Menu() {
    return (
        <div className="flex flex-col h-screen">
            <img src={Logo} alt="Group" className="max-w-20 my-5" />

            <nav>
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Squares} alt="Dashboard" className="max-w-20 mr-2" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Folder} alt="Projects" className="max-w-20 mr-2" />
                            <span>Projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/teams"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Groups} alt="Teams" className="max-w-20 mr-2" />
                            <span>Teams</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/analytics"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Pie_chart} alt="Analytics" className="max-w-20 mr-2" />
                            <span>Analytics</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/messages"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Chat} alt="Messages" className="max-w-20 mr-2" />
                            <span>Messages</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/integrations"
                            className={({ isActive }) =>
                                `flex items-center py-3 rounded-lg ${isActive ? 'bg-pink-200 text-pink-600' : 'text-gray-600 hover:bg-gray-100'}`
                            }
                        >
                            <img src={Code} alt="Integrations" className="max-w-20 mr-2" />
                            <span>Integrations</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="mt-4 bg-blue-50 rounded-lg p-4 text-center">
                <img src={GroupImage} alt="Group Illustration" className="mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">v2.0 is available</p>
                <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                    Try now
                </button>
            </div>

            <div className="mt-auto border-t pt-4">
            </div>
        </div>
    );
}

export default Menu;