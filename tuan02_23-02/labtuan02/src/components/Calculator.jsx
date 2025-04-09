import React, { useState } from "react";

export default function CalculatorApp() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [kq, setKq] = useState(0);
    const [operator, setOperator] = useState("");

    const handleChangeA = (e) => {
        setA(e.target.value);
        handleCalculate(a, b, operator);
    };

    const handleChangeB = (e) => {
        setB(e.target.value);
        handleCalculate(a, b, operator);
    };

    const handleOperator = (e) => {
        const newOperator = e.target.value;
        setOperator(newOperator);
        handleCalculate(a, b, newOperator);
    };

    // Thực hiện tính toán
    const handleCalculate = (numA, numB, op) => {
        const valA = parseFloat(numA);
        const valB = parseFloat(numB);

        if (isNaN(valA) || isNaN(valB)) {
            setKq("Nhập số hợp lệ!");
            return;
        }

        let result;
        switch (op) {
            case "+": result = valA + valB; break;
            case "-": result = valA - valB; break;
            case "*": result = valA * valB; break;
            case "/": result = valB !== 0 ? valA / valB : "Không thể chia 0!"; break;
            default: result = "Vui lòng chọn phép tính";
        }

        setKq(result);
    };

    return (
        <>
            <h1>Máy tính đơn giản</h1>

            <input type="number" placeholder="Nhập a" value={a} onChange={handleChangeA} />
            <input type="number" placeholder="Nhập b" value={b} onChange={handleChangeB} />

            <br />

            <label>
                <input type="radio" name="operator" value="+" checked={operator === "+"} onChange={handleOperator} /> +
            </label>
            <label>
                <input type="radio" name="operator" value="-" checked={operator === "-"} onChange={handleOperator} /> -
            </label>
            <label>
                <input type="radio" name="operator" value="*" checked={operator === "*"} onChange={handleOperator} /> *
            </label>
            <label>
                <input type="radio" name="operator" value="/" checked={operator === "/"} onChange={handleOperator} /> /
            </label>

            <h2>Kết quả: {kq}</h2>
        </>
    );
}
