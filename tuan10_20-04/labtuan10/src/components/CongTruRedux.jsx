import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        numberA: 0,
        numberB: 0,
        result: 0
    },
    reducers: {
        setNumberA: (state, action) => {
            state.numberA = action.payload;
        },
        setNumberB: (state, action) => {
            state.numberB = action.payload;
        },
        add: (state) => {
            state.result = state.numberA + state.numberB;
        },
        subtract: (state) => {
            state.result = state.numberA - state.numberB;
        }
    }
});

const { setNumberA, setNumberB, add, subtract } = counterSlice.actions;

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

const Calculator = () => {
    const dispatch = useDispatch();
    const { numberA, numberB, result } = useSelector((state) => state.counter);

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-body">
                    <h3 className="card-title text-center mb-4">Cộng Trừ Hai Số</h3>

                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Nhập số A"
                            value={numberA}
                            onChange={(e) => dispatch(setNumberA(Number(e.target.value)))}
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Nhập số B"
                            value={numberB}
                            onChange={(e) => dispatch(setNumberB(Number(e.target.value)))}
                        />
                    </div>

                    <div className="d-flex justify-content-between mb-3">
                        <button className="btn btn-primary w-100 me-2" onClick={() => dispatch(add())}>
                            Cộng
                        </button>
                        <button className="btn btn-danger w-100 ms-2" onClick={() => dispatch(subtract())}>
                            Trừ
                        </button>
                    </div>

                    <h5 className="text-center">Kết quả: <strong>{result}</strong></h5>
                </div>
            </div>
        </div>
    );
};

export default function CalculatorRedux() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>
    );
}
