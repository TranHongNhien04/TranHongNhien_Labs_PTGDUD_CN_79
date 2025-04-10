import React, { useEffect, useState } from 'react';
import axios from 'axios';
import File_text_1 from '../assets/img/File text 1.png';
import ImportIcon from '../assets/img/Move up.png';
import ExportIcon from '../assets/img/Download.png';
import create from '../assets/img/create.png';
import DataTable from 'react-data-table-component';
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

const data = [
    {
        customerName: 'Elizabeth Lee',
        company: 'AvatarSystems',
        orderValue: '$359',
        orderDate: '10/07/2023',
        status: 'New',
    },
    {
        customerName: 'Carlos Garcia',
        company: 'SmoozeShift',
        orderValue: '$747',
        orderDate: '24/07/2023',
        status: 'New',
    },
    {
        customerName: 'Elizabeth Bailey',
        company: 'Prime Time Telecom',
        orderValue: '$564',
        orderDate: '08/08/2023',
        status: 'In-progress',
    },
    {
        customerName: 'Ryan Brown',
        company: 'OmniTech Corporation',
        orderValue: '$541',
        orderDate: '31/08/2023',
        status: 'In-progress',
    },
    {
        customerName: 'Ryan Young',
        company: 'DataStream Inc.',
        orderValue: '$769',
        orderDate: '01/05/2023',
        status: 'Completed',
    },
    {
        customerName: 'Hailey Adams',
        company: 'FlowRush',
        orderValue: '$922',
        orderDate: '10/06/2023',
        status: 'Completed',
    },
    {
        customerName: 'Elizabeth Lee',
        company: 'AvatarSystems',
        orderValue: '$359',
        orderDate: '10/07/2023',
        status: 'New',
    },
    {
        customerName: 'Carlos Garcia',
        company: 'SmoozeShift',
        orderValue: '$747',
        orderDate: '24/07/2023',
        status: 'New',
    },
    {
        customerName: 'Elizabeth Bailey',
        company: 'Prime Time Telecom',
        orderValue: '$564',
        orderDate: '08/08/2023',
        status: 'In-progress',
    },
    {
        customerName: 'Ryan Brown',
        company: 'OmniTech Corporation',
        orderValue: '$541',
        orderDate: '31/08/2023',
        status: 'In-progress',
    },
    {
        customerName: 'Ryan Young',
        company: 'DataStream Inc.',
        orderValue: '$769',
        orderDate: '01/05/2023',
        status: 'Completed',
    },
    {
        customerName: 'Hailey Adams',
        company: 'FlowRush',
        orderValue: '$922',
        orderDate: '10/06/2023',
        status: 'Completed',
    },
];
function DetailReport() {

    return (
        <>

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

                    <DataTable
                        columns={columns}
                        data={data}
                        selectableRows
                        pagination
                        paginationPerPage={5}


                    />
                </div>
            </div>
        </>
    );
}

export default DetailReport;