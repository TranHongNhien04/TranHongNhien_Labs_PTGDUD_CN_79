import React, { useEffect } from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoggedIn: false
    },
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
        }
    }
});

const { login, logout, setFromStorage } = authSlice.actions;
const store = configureStore({ reducer: { auth: authSlice.reducer } });

const LoginForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(login({ email }));
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
        >
            <h2 className="text-xl font-bold text-center">Đăng nhập</h2>
            <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="password"
                required
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                Đăng nhập
            </button>
        </form>
    );
};

const Welcome = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Xin chào, {user.email}</h2>
            <p className="text-gray-500">Chúc bạn một ngày làm việc hiệu quả!</p>
            <button
                onClick={() => dispatch(logout())}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Đăng xuất
            </button>
        </div>
    );
};

const AuthComponent = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);

    useEffect(() => {
        const stored = localStorage.getItem('auth');
        if (stored) {
            dispatch(setFromStorage(JSON.parse(stored)));
        }
    }, [dispatch]);

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200 px-4">
            {isLoggedIn ? <Welcome /> : <LoginForm />}
        </div>
    );
};

export default function AuthApp() {
    return (
        <Provider store={store}>
            <AuthComponent />
        </Provider>
    );
}
