import React, { useState } from 'react';
import {
    Input,
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
    DialogFooter,
    Typography,
} from '@material-tailwind/react';

function CustomerModal({ open, setOpen, onSubmit }) {
    const [customer, setCustomer] = useState({
        customerName: '',
        company: '',
    });

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setCustomer({ ...customer, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        onSubmit(customer);
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
                <strong className="text-lg">Add New Customer</strong>
                <Button className="ml-auto text-pink-500" onClick={handleClose}>
                    X
                </Button>
            </DialogHeader>

            <DialogBody className="overflow-y-auto max-h-[60vh] space-y-4 pb-6">
                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
                        Customer Name
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="eg. John Doe"
                        name="customerName"
                        value={customer.customerName}
                        onChange={handleChange}
                        className="placeholder:opacity-100 focus:!border-t-gray-900"
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>

                <div>
                    <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
                        Company Name
                    </Typography>
                    <Input
                        color="gray"
                        size="lg"
                        placeholder="eg. Nike Inc."
                        name="company"
                        value={customer.company}
                        onChange={handleChange}
                        className="placeholder:opacity-100 focus:!border-t-gray-900"
                        containerProps={{ className: '!min-w-full' }}
                        labelProps={{ className: 'hidden' }}
                    />
                </div>
            </DialogBody>

            <DialogFooter>
                <button
                    className="mx-4 px-4 flex justify-end bg-pink-600 text-white rounded-lg py-2 hover:bg-pink-700 transition-colors"
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </DialogFooter>
        </Dialog>
    );
}

export default CustomerModal;