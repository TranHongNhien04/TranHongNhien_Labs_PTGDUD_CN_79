import React from 'react';
import Search from '../assets/img/Search.png';
import Bell1 from '../assets/img/Bell 1.png';
import Question_1 from '../assets/img/Question 1.png';
import Avatar1 from '../assets/img/Avatar (1).png';
import Overview from './Overview';
import DetailReport from './DetailReport';

function Dashboard() {
    return (
        <div className="col-span-3  grid grid-cols-3 grid-rows-10">
            <div className="col-span-3 row-span-1 grid grid-cols-3 -b p-4">
                <span className="col-span-1 font-bold">Dashboard</span>
                <div className="col-start-3 flex items-center relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-7  rounded-md border"
                        />
                        <img
                            src={Search}
                            alt=""
                            className=" absolute pl-2 top-1/2 -translate-y-1/2"
                        />
                    </div>
                    <img src={Bell1} alt="" className="ml-4" />
                    <img src={Question_1} alt="" className="ml-4" />
                    <img src={Avatar1} alt="" className="ml-4" />
                </div>

            </div>
            <Overview />
            <DetailReport />
        </div>
    );
}

export default Dashboard;