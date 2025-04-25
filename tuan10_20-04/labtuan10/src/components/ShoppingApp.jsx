import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => state.filter(item => item.id !== action.payload),
        updateQuantity: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) item.quantity = action.payload.quantity;
        }
    }
});

const { addItem, removeItem, updateQuantity } = cartSlice.actions;
const store = configureStore({ reducer: { cart: cartSlice.reducer } });

const PRODUCTS = [
    { id: 1, name: 'Áo thun', price: 150 },
    { id: 2, name: 'Áo khoác', price: 200 },
];

const ProductList = () => {
    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {PRODUCTS.map(product => (
                <div key={product.id} className="p-4 border rounded shadow flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <p className="text-gray-600">{product.price}₫</p>
                    </div>
                    <button
                        onClick={() => dispatch(addItem(product))}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            ))}
        </div>
    );
};

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>
            {cart.length === 0 ? (
                <p className="text-gray-500">Chưa có sản phẩm nào.</p>
            ) : (
                <ul className="space-y-3">
                    {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center border-b pb-2">
                            <div>
                                <p className="font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">{item.price}₫ x {item.quantity}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min={1}
                                    value={item.quantity}
                                    onChange={(e) =>
                                        dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
                                    }
                                    className="w-14 border rounded px-2 py-1"
                                />
                                <button
                                    onClick={() => dispatch(removeItem(item.id))}
                                    className="text-red-500 hover:underline text-sm"
                                >
                                    Xoá
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {cart.length > 0 && (
                <div className="mt-4 text-right">
                    <p>Tổng số lượng: <strong>{totalItems}</strong></p>
                    <p>Tổng tiền: <strong>{totalPrice}₫</strong></p>
                </div>
            )}
        </div>
    );
};

const CartAppComponent = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
            <h1 className="text-2xl font-bold mb-6">Cửa hàng Quần </h1>
            <ProductList />
            <Cart />
        </div>
    );
};

export default function CartApp() {
    return (
        <Provider store={store}>
            <CartAppComponent />
        </Provider>
    );
}
