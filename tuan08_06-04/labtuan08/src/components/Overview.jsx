import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Squares from '../assets/img/Squares four 1.png';

import Button1509 from '../assets/img/Button 1509.png';
import Button1529 from '../assets/img/Button 1529.png';
import Button1530 from '../assets/img/Button 1530.png';


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

        </>
    );
}

export default Overview;