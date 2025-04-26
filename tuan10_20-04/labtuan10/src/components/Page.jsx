import React, { useEffect, useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, isLoggedIn: false },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            localStorage.setItem('auth', JSON.stringify(state));
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
            localStorage.removeItem('auth');
        },
        setFromStorage: (state, action) => {
            state.user = action.payload.user;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
    },
});
const { login, logout, setFromStorage } = authSlice.actions;

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const existing = state.find(item => item.id === action.payload.id);
            if (existing) existing.quantity += 1;
            else state.push({ ...action.payload, quantity: 1 });
        },
        removeItem: (state, action) =>
            state.filter(item => item.id !== action.payload),
        updateQuantity: (state, action) => {
            const item = state.find(i => i.id === action.payload.id);
            if (item) item.quantity = action.payload.quantity;
        },
    },
});
const { addItem, removeItem, updateQuantity } = cartSlice.actions;

const productSlice = createSlice({
    name: 'products',
    initialState: [
        { id: 1, name: 'Áo thun', price: 150 },
        { id: 2, name: 'Áo khoác', price: 200 },
    ],
    reducers: {},
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        products: productSlice.reducer,
    },
});

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) dispatch(login({ email }));
    };

    return (
        <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-xl font-bold text-center">Đăng nhập</h2>
            <input type="email" required placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" required placeholder="Mật khẩu" className="w-full p-2 border rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Đăng nhập</button>
        </form>
    );
};

const Welcome = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    return (
        <div className="text-center space-y-4 mb-6">
            <h2 className="text-2xl font-bold">Xin chào, {user.email}</h2>
            <button
                onClick={() => dispatch(logout())}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Đăng xuất
            </button>
        </div>
    );
};

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {products.map(product => (
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
            <h2 className="text-xl font-bold mb-4">🛒 Giỏ hàng</h2>
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

const Bai10 = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    useEffect(() => {
        const saved = localStorage.getItem('auth');
        if (saved) {
            dispatch(setFromStorage(JSON.parse(saved)));
        }
    }, [dispatch]);

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            {isLoggedIn ? (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow space-y-6">
                    <Welcome />
                    <ProductList />
                    <Cart />
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen">
                    <LoginForm />
                </div>
            )}
        </div>
    );
};

export default function PageApp() {
    return (
        <Provider store={store}>
            <Bai10 />
        </Provider>
    );
}
