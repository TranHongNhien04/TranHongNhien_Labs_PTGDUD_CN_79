import { useReducer, useState } from "react";

function calcReducer(state, action) {
    const { a, b } = state;

    switch (action.type) {
        case "SET_A":
            return { ...state, a: Number(action.payload) };
        case "SET_B":
            return { ...state, b: Number(action.payload) };
        case "ADD":
            return { ...state, result: a + b };
        case "SUB":
            return { ...state, result: a - b };
        case "MUL":
            return { ...state, result: a * b };
        case "DIV":
            return { ...state, result: b !== 0 ? a / b : "Không chia được cho 0" }
        default:
            return state;
    }
}

const initialState = {
    a: 0,
    b: 0,
    result: 0,
}

export default function CalcReducer() {
    const [state, dispatch] = useReducer(calcReducer, initialState)

    return (
        <div style={{ padding: 20, textAlign: "center" }}>
            <h2>Máy tính (useReducer)</h2>

            <input
                type="number"
                onChange={(e) => dispatch({ type: "SET_A", payload: e.target.value })}
                placeholder="Nhập số A"
            />
            <input
                type="number"
                onChange={(e) => dispatch({ type: "SET_B", payload: e.target.value })}
                placeholder="Nhập số B"
                style={{ marginLeft: 10 }}
            />

            <div style={{ marginTop: 10 }}>
                <button onClick={() => dispatch({ type: "ADD" })}>+</button>
                <button onClick={() => dispatch({ type: "SUB" })}>-</button>
                <button onClick={() => dispatch({ type: "MUL" })}>*</button>
                <button onClick={() => dispatch({ type: "DIV" })}>/</button>
            </div>

            <h3>Kết quả: {state.result}</h3>
        </div>
    );
}
