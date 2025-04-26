// UsersApp.jsx
import React, { useEffect } from 'react';
import { createSlice, configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Async Thunk: gọi API lấy danh sách user
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) throw new Error('Không thể lấy dữ liệu từ API');
    return await res.json();
});

// Slice
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

const store = configureStore({ reducer: { users: usersSlice.reducer } });

// Component chính
const UsersComponent = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
            <h1 className="text-2xl font-bold mb-4">👥 Danh sách người dùng</h1>

            {status === 'loading' && <p>⏳ Đang tải dữ liệu...</p>}
            {status === 'failed' && <p className="text-red-500">❌ Lỗi: {error}</p>}
            {status === 'succeeded' && (
                <ul className="space-y-3">
                    {users.map(user => (
                        <li key={user.id} className="border-b pb-2">
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email} - {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

// Export default
export default function UsersApp() {
    return (
        <Provider store={store}>
            <UsersComponent />
        </Provider>
    );
}
