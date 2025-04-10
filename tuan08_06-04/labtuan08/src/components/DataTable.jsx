import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import create from '../assets/img/create.png';

import axios from 'axios';

function DataTableCustom() {
    const columns = [
        {
            name: 'CUSTOMER NAME',
            selector: (row) => row.customerName,

        },
        {
            name: 'COMPANY',
            selector: (row) => row.company,
        },
        {
            name: 'ORDER VALUE',
            selector: (row) => row.orderValue,
        },
        {
            name: 'ORDER DATE',
            selector: (row) => row.orderDate,
        },
        {
            name: 'STATUS',
            selector: (row) => row.status,
        },
        {
            name: '',
            cell: (row) => (
                <img src={create} alt="" srcset="" />
            ),
            width: '50px',
        },
    ];
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const ordersRes = await axios.get(
                    'http://localhost:3000/Orders'
                );
                setOrder(ordersRes.data || []);
                setLoading(false);
            } catch (err) {
                console.error('Lỗi xảy ra khi gọi API:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <DataTable
            columns={columns}
            data={order}
            selectableRows
            pagination
            paginationPerPage={5}

        />
    );
}

export default DataTableCustom;