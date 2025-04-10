import React, { useEffect, useState } from 'react';
import axios from 'axios';
import File_text_1 from '../assets/img/File text 1.png';
import ImportIcon from '../assets/img/Move up.png';
import ExportIcon from '../assets/img/Download.png';
import DataTableCustom from './DataTable';
import CustomerModal from './CustomerModal';

function DetailReport() {
    const [openCustomerModal, setOpenCustomerModal] = useState(false);

    const handleCreateCustomer = async (newCustomer) => {
        try {
            await axios.post('http://localhost:3000/Orders', {
                ...newCustomer,
                orderValue: '$0',
                orderDate: new Date().toISOString().split('T')[0],
                status: 'New',
                id: Date.now().toString(),
            });
            setOpenCustomerModal(false);
        } catch (err) {
            console.error('Error creating customer:', err);
        }
    };

    return (
        <>
            <div className="col-span-3 row-span-6 border-b p-4">
                <div href="#" className="col-span-3 flex items-center justify-between py-2 font-bold">
                    <div className="flex items-center">
                        <img src={File_text_1} alt="Group" className="max-w-20 mr-2" />
                        <span>Detailed report</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setOpenCustomerModal(true)}
                            className="flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors"
                        >
                            <span className="text-pink-500 text-sm font-normal">Add new customer</span>
                        </button>
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
                    <DataTableCustom />
                </div>
            </div>

            {openCustomerModal && (
                <CustomerModal
                    open={openCustomerModal}
                    setOpen={setOpenCustomerModal}
                    onSubmit={handleCreateCustomer}
                />
            )}
        </>
    );
}

export default DetailReport;