import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
        reset: (state) => { state.value = 0 },
        incrementByAmount: (state, action) => {
            state.value += Number(action.payload);
        },
    },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

const { increment, reset, incrementByAmount } = counterSlice.actions;

const Bai7 = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter.value);
    const [step, setStep] = useState(1);

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold">Bài 7: Counter nâng cao</h1>
            <p className="text-2xl font-semibold">{count}</p>
            <div className="space-x-2">
                <button onClick={() => dispatch(increment())} className="btn bg-dark text-white">+ 1</button>
                <button onClick={() => dispatch(reset())} className="btn border-black border-2">Reset</button>
            </div>
            <div className="space-x-2">
                <input
                    type="number"
                    value={step}
                    onChange={(e) => setStep(e.target.value)}
                    className="border p-1 w-20 rounded-md"
                />
                <button onClick={() => dispatch(incrementByAmount(step))} className="btn bg-dark text-white">+ Step</button>
            </div>
        </div>
    );
};

export default function CounterApp_2() {
    return <Provider store={store}><Bai7 /></Provider>;
}
