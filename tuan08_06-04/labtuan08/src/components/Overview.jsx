import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Squares from '../assets/img/Squares four 1.png';
import File_text_1 from '../assets/img/File text 1.png';
import ImportIcon from '../assets/img/Move up.png';
import ExportIcon from '../assets/img/Download.png';
import Button1509 from '../assets/img/Button 1509.png';
import Button1529 from '../assets/img/Button 1529.png';
import Button1530 from '../assets/img/Button 1530.png';
import create from '../assets/img/create.png';

function Overview() {
    const [data, setData] = useState({
        turnover: null,
        profit: null,
        newCustomer: null,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [turnoverRes, profitRes, newCustomerRes, ordersRes] =
                    await Promise.all([
                        axios.get('http://localhost:3000/Turnover'),
                        axios.get('http://localhost:3000/Profit'),
                        axios.get('http://localhost:3000/New_customer'),
                    ]);

                const turnover = turnoverRes?.data ?? null;
                const profit = profitRes?.data ?? null;
                const newCustomer = newCustomerRes?.data ?? null;

                setData({ turnover, profit, newCustomer });


                setLoading(false);
            } catch (err) {
                console.error('Lỗi xảy ra khi gọi API:', err);
                setError(err.message || 'Đã xảy ra lỗi');
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 border-b p-4">
                <div href="#" className="col-span-3 flex items-center font-bold">
                    <img src={Squares} alt="Group" className="max-w-20 mr-2" />
                    <span>Overview</span>
                </div>
                <div className="col-span-1 row-span-2 bg-pink-100 rounded-md p-3">
                    {data.turnover ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    Turnover
                                </h3>

                                <button>
                                    <img
                                        src={Button1509}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                $
                                {new Intl.NumberFormat().format(
                                    data.turnover.amount
                                )}{' '}
                            </p>

                            <p
                                className={`${data.turnover.changeDirection === 'up'
                                    ? 'text-green-700'
                                    : 'text-red-600'
                                    } text-sm`}>
                                {data.turnover.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.turnover.changePercentage} period of
                                change
                            </p>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
                <div className="col-span-1 row-span-2 bg-blue-100 rounded-md p-3">
                    {data.profit ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    Profit
                                </h3>

                                <button>
                                    <img
                                        src={Button1529}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                $
                                {new Intl.NumberFormat().format(
                                    data.profit.amount
                                )}{' '}
                            </p>
                            <p
                                className={`${data.profit.changeDirection === 'up'
                                    ? 'text-green-700'
                                    : 'text-red-600'
                                    } text-sm`}>
                                {data.profit.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.profit.changePercentage} period of change
                            </p>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
                <div className="col-span-1 row-span-2 bg-blue-100 rounded-md p-3">
                    {data.newCustomer ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    New Customer
                                </h3>

                                <button>
                                    <img
                                        src={Button1530}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                {data.newCustomer.count}{' '}
                            </p>

                            <p
                                className={`${data.newCustomer.changeDirection === 'up'
                                    ? 'text-green-700'
                                    : 'text-red-600'
                                    } text-sm`}>
                                {data.newCustomer.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.newCustomer.changePercentage} period of
                                change
                            </p>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            </div>
            <div className="col-span-3 row-span-6 border-b p-4">
                <div href="#" className="col-span-3 flex items-center justify-between py-2 font-bold">
                    <div className="flex items-center">
                        <img src={File_text_1} alt="Group" className="max-w-20 mr-2" />
                        <span>Detailed report</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                            <img src={ImportIcon} alt="" className="pr-2" />
                            <span className="text-pink-500 text-sm font-normal">Import</span>
                        </button>
                        <button className="flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                            <img src={ExportIcon} alt="" className="pr-2" />
                            <span className="text-pink-500 text-sm font-normal">Export</span>
                        </button>
                    </div>
                </div>
                <div>
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border px-4 py-2 text-left">
                                    <input type="checkbox" />
                                </th>
                                <th className="border px-4 py-2 text-left">CUSTOMER NAME</th>
                                <th className="border px-4 py-2 text-left">COMPANY</th>
                                <th className="border px-4 py-2 text-left">ORDER VALUE</th>
                                <th className="border px-4 py-2 text-left">ORDER DATE</th>
                                <th className="border px-4 py-2 text-left">STATUS</th>
                                <th className="border px-4 py-2 text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="border px-4 py-2 flex items-center">
                                    Peter
                                </td>
                                <td className="border px-4 py-2">Griffin</td>
                                <td className="border px-4 py-2">$100</td>
                                <td className="border px-4 py-2">15/04/2025</td>
                                <td className="border px-4 py-2">
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">New</span>
                                </td>
                                <td className="border px-4 py-2">
                                    <button>
                                        <img src={create} alt="create" className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="border px-4 py-2 flex items-center">
                                    Lois
                                </td>
                                <td className="border px-4 py-2">Griffin</td>
                                <td className="border px-4 py-2">$150</td>
                                <td className="border px-4 py-2">10/04/2025</td>
                                <td className="border px-4 py-2">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">In-progress</span>
                                </td>
                                <td className="border px-4 py-2">
                                    <button>
                                        <img src={create} alt="create" className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="border px-4 py-2 flex items-center">
                                    Joe
                                </td>
                                <td className="border px-4 py-2">Swanson</td>
                                <td className="border px-4 py-2">$300</td>
                                <td className="border px-4 py-2">05/03/2025</td>
                                <td className="border px-4 py-2">
                                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Completed</span>
                                </td>
                                <td className="border px-4 py-2">
                                    <button>
                                        <img src={create} alt="create" className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-100">
                                <td className="border px-4 py-2">
                                    <input type="checkbox" />
                                </td>
                                <td className="border px-4 py-2 flex items-center">
                                    Cleveland
                                </td>
                                <td className="border px-4 py-2">Brown</td>
                                <td className="border px-4 py-2">$250</td>
                                <td className="border px-4 py-2">20/02/2025</td>
                                <td className="border px-4 py-2">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded">In-progress</span>
                                </td>
                                <td className="border px-4 py-2">
                                    <button>
                                        <img src={create} alt="create" className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Overview;