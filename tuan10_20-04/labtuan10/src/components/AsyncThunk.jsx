import React, { useEffect } from 'react';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return await res.json();
});

const userSlice = createSlice({
    name: 'users',
    initialState: { users: [], status: 'idle', error: null },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => { state.status = 'loading' })
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

const store = configureStore({
    reducer: { users: userSlice.reducer },
});

const Bai6 = () => {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Bài 6: Gọi API danh sách người dùng</h1>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p className="text-red-500">{error}</p>}
            {status === 'succeeded' && (
                <ul className="mt-2 list-disc pl-6">
                    {users.map((u) => (
                        <li key={u.id}>{u.name} - {u.email}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default function AsyncThunkApp() {
    return <Provider store={store}><Bai6 /></Provider>;
}
