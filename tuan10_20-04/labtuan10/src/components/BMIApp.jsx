import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const bmiSlice = createSlice({
    name: 'bmi',
    initialState: { height: '', weight: '', result: null },
    reducers: {
        updateInput: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
        calculateResult: (state) => {
            const h = parseFloat(state.height) / 100;
            const w = parseFloat(state.weight);
            if (h > 0 && w > 0) {
                state.result = (w / (h * h)).toFixed(2);
            } else {
                state.result = null;
            }
        },
    },
});

const store = configureStore({ reducer: { bmi: bmiSlice.reducer } });
const { updateInput, calculateResult } = bmiSlice.actions;

const Bai8 = () => {
    const dispatch = useDispatch();
    const { height, weight, result } = useSelector(state => state.bmi);

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold">Bài 8: Tính BMI</h1>
            <div className="space-x-2">
                <input
                    type="number"
                    placeholder="Chiều cao (cm)"
                    className="border p-1"
                    value={height}
                    onChange={(e) => dispatch(updateInput({ field: 'height', value: e.target.value }))}
                />
                <input
                    type="number"
                    placeholder="Cân nặng (kg)"
                    className="border p-1"
                    value={weight}
                    onChange={(e) => dispatch(updateInput({ field: 'weight', value: e.target.value }))}
                />
                <button onClick={() => dispatch(calculateResult())} className="btn bg-dark text-white">Tính</button>
            </div>
            {result && <p className="text-lg">BMI: {result}</p>}
        </div>
    );
};

export default function BMIApp() {
    return <Provider store={store}><Bai8 /></Provider>;
}
