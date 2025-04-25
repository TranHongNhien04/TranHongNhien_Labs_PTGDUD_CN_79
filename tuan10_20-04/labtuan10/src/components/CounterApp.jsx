import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: state => { state.count++ },
        decrement: state => { state.count-- }
    }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
const { increment, decrement } = counterSlice.actions;

const Counter = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center p-6 bg-white shadow rounded-xl max-w-sm mx-auto mt-10 space-y-4">
            <h2 className="text-2xl font-bold">Counter</h2>
            <div className="text-3xl">{count}</div>
            <div className="flex space-x-4">
                <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
                <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
            </div>
        </div>
    );
};

export default function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}
