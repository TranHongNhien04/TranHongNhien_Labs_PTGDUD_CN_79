import React, { useState, useEffect } from 'react';
import {
    Input,
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
    DialogFooter,
    Typography,
} from '@material-tailwind/react';


function DetailModal({ open, setOpen, orderData, onSubmit, isEditMode = false }) {
    const [order, setOrder] = useState({
        customerName: '',
        company: '',
        orderValue: 0,
        orderDate: '',
        status: 'New',
    });

    useEffect(() => {
        if (isEditMode && orderData) {
            const orderValueStr = typeof orderData.orderValue === 'string'
                ? orderData.orderValue
                : String(orderData.orderValue);

            const orderValueNum = orderValueStr.includes('$')
                ? parseInt(orderValueStr.replace('$', ''))
                : parseInt(orderValueStr);

            setOrder({
                customerName: orderData.customerName || '',
                company: orderData.company || '',
                orderValue: isNaN(orderValueNum) ? 0 : orderValueNum,
                orderDate: orderData.orderDate || '',
                status: orderData.status || 'New',
            });
        }
    }, [isEditMode, orderData]);

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setOrder({ ...order, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        const payload = {
            ...order,
            orderValue: `$${order.orderValue.toLocaleString()}`,
        };

        onSubmit(payload, isEditMode);

        handleClose();
    };

    return (
        <Dialog
            open={open}
            handler={handleClose}
            dismiss={{ enabled: false }}
            className="m-auto p-4 w-[90%] max-w-3xl max-h-[90vh] overflow-hidden rounded-xl border border-pink-600 shadow-xl"
        >
            <DialogHeader className="flex">
                <strong className="text-lg">{isEditMode ? 'Edit Order' : 'New Order'}</strong>
                <Button className="ml-auto text-pink-500" onClick={handleClose}>
                    X
                </Button>
            </DialogHeader>

            <DialogBody className="overflow-y-auto max-h-[60vh] space-y-4 pb-6">
                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
                        Name customer
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="eg. John Doe"
                        name="customerName"
                        value={order.customerName}
                        onChange={handleChange}
                        className="placeholder:opacity-100 focus:!border-t-gray-900"
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>

                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
                        Company name
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="eg. Nike Inc."
                        name="company"
                        value={order.company}
                        onChange={handleChange}
                        className="placeholder:opacity-100 focus:!border-t-gray-900"
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>

                <div className="grid grid-cols-2 gap-2">
                    {[
                        { name: 'Shirt', value: 20 },
                        { name: 'Jeans', value: 30 },
                        { name: 'Sneakers', value: 50 },
                        { name: 'Baseball cap', value: 10 },
                    ].map((item) => (
                        <label key={item.name} className="flex items-center gap-2 text-sm text-gray-800">
                            <input
                                type="checkbox"
                                value={item.value}
                                onChange={(e) => {
                                    const checked = e.target.checked;
                                    const val = parseInt(e.target.value);
                                    const current = parseInt(order.orderValue || 0);
                                    const newValue = checked ? current + val : current - val;
                                    setOrder({ ...order, orderValue: newValue });
                                }}
                            />
                            {item.name} (
                            <span className="text-green-700 font-semibold">
                                ${item.value.toLocaleString()}
                            </span>
                            )
                        </label>
                    ))}
                </div>

                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                        Order Value
                    </Typography>
                    <Input
                        name="orderValue"
                        value={`$${parseInt(order.orderValue || 0).toLocaleString()}`}
                        readOnly
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>

                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                        Order Date
                    </Typography>
                    <Input
                        name="orderDate"
                        type="date"
                        value={order.orderDate}
                        onChange={handleChange}
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>

                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
                        Status
                    </Typography>
                    <div className="flex gap-4">
                        {['In-progress', 'Completed', 'New'].map((statusOption) => (
                            <label key={statusOption} className="flex items-center gap-2 text-gray-700">
                                <input
                                    type="radio"
                                    name="status"
                                    value={statusOption}
                                    checked={order.status === statusOption}
                                    onChange={handleChange}
                                />
                                {statusOption}
                            </label>
                        ))}
                    </div>
                </div>
            </DialogBody>

            <DialogFooter>
                <button
                    className="mx-4 px-4 flex justify-end bg-pink-600 text-white rounded-lg py-2 hover:bg-pink-700 transition-colors"
                    onClick={handleSubmit}
                >
                    {isEditMode ? 'Save' : 'Thêm'}
                </button>
            </DialogFooter>
        </Dialog>
    );
}

export default DetailModal;