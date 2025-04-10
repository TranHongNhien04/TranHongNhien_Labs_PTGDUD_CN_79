import React, { useEffect, useState } from 'react';

import GroupImage from '../assets/img/Group.png';
import Bell1 from '../assets/img/Bell 1.png';

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

            <a href="#" className="flex items-center py-3 bg-pink-200 rounded-lg">
                <img src={Squares} alt="Group" className="max-w-20 mr-2" />
                <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center py-3">
                <img src={Folder} alt="Group" className="max-w-20 mr-2" />
                <span>Projects</span>
            </a>
            <a href="#" className="flex items-center py-3">
                <img src={Groups} alt="Group" className="max-w-20 mr-2" />
                <span>Teams</span>
            </a>
            <a href="#" className="flex items-center py-3">
                <img src={Pie_chart} alt="Group" className="max-w-20 mr-2" />
                <span>Analytics</span>
            </a>
            <a href="#" className="flex items-center py-3">
                <img src={Chat} alt="Group" className="max-w-20 mr-2" />
                <span>Messages</span>
            </a>
            <a href="#" className="flex items-center py-3">
                <img src={Code} alt="Group" className="max-w-20 mr-2" />
                <span>Integrations</span>
            </a>

            {/* Add the "v2.0 is available" section with the "Try now" button */}
            <div className="mt-4 bg-blue-50 rounded-lg p-4 text-center">
                <img src={GroupImage} alt="Group Illustration" className="mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">v2.0 is available</p>
                <button className="mt-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
                    Try now
                </button>
            </div>

            {/* Move the border-t div to the bottom */}
            <div className="mt-auto border-t pt-4">
                {/* You can add another element here if needed, or leave it empty */}
            </div>
        </div>
    );
}

export default Menu;