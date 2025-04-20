import React, { useReducer } from 'react';

const initialState = {
    a: '',
    b: '',
    result: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_A':
            return { ...state, a: action.payload };
        case 'SET_B':
            return { ...state, b: action.payload };
        case 'ADD':
            return {
                ...state,
                result: Number(state.a) + Number(state.b),
            };
        case 'SUBTRACT':
            return {
                ...state,
                result: Number(state.a) - Number(state.b),
            };
        default:
            return state;
    }
}

export default function CalculatorUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ padding: 20 }}>
            <h2>Cộng / Trừ 2 số</h2>
            <p>--- Sử dụng useReducer ---</p>
            <input
                type="number"
                placeholder="Nhập a"
                value={state.a}
                onChange={(e) => dispatch({ type: 'SET_A', payload: e.target.value })}
            />
            <input
                type="number"
                placeholder="Nhập b"
                value={state.b}
                onChange={(e) => dispatch({ type: 'SET_B', payload: e.target.value })}
                style={{ marginLeft: 10 }}
            />
            <div style={{ marginTop: 10 }}>
                <button onClick={() => dispatch({ type: 'ADD' })}>Cộng</button>
                <button onClick={() => dispatch({ type: 'SUBTRACT' })} style={{ marginLeft: 10 }}>
                    Trừ
                </button>
            </div>
            <h3 style={{ marginTop: 20 }}>Kết quả: {state.result !== null ? state.result : '---'}</h3>
        </div>
    );
};

