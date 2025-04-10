import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import create from '../assets/img/create.png';
import axios from 'axios';
import DetailModal from './DetailModal';

function DataTableCustom() {
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const ordersRes = await axios.get('http://localhost:3000/Orders');
            setOrder(ordersRes.data || []);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching data:', err);
            setError(err.message);
            setLoading(false);
        }
    };

    const handleEdit = (row) => {
        setSelectedOrder(row);
        setOpenModal(true);
    };

    const handleModalSubmit = async (updatedOrder, isEditMode) => {
        try {
            let response;
            if (isEditMode) {
                response = await axios.put(
                    `http://localhost:3000/Orders/${selectedOrder.id}`,
                    updatedOrder
                );
                setOrder((prevOrders) =>
                    prevOrders.map((o) =>
                        o.id === selectedOrder.id
                            ? { ...response.data, orderValue: `$${response.data.orderValue.toLocaleString()}` }
                            : o
                    )
                );
            }
            setOpenModal(false);
        } catch (err) {
            console.error('Error saving order:', err);
            setError('Failed to save order: ' + err.message);
        }
    };

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
                <button onClick={() => handleEdit(row)}>
                    <img src={create} alt="edit" />
                </button>
            ),
            width: '50px',
        },
    ];

    if (loading) return <div>Đang tải dữ liệu...</div>;
    if (error) return <div>Lỗi: {error}</div>;

    return (
        <>
            <DataTable
                columns={columns}
                data={order}
                selectableRows
                pagination
                paginationPerPage={5}
            />
            {openModal && (
                <DetailModal
                    open={openModal}
                    setOpen={setOpenModal}
                    orderData={selectedOrder}
                    onSubmit={handleModalSubmit}
                    isEditMode={!!selectedOrder}
                />
            )}
        </>
    );
}

export default DataTableCustom;