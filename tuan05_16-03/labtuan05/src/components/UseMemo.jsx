import { useMemo, useState } from "react";

export default function UseMemoExample() {
    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const factorial = useMemo(() => {
        console.log("Đang tính giai thừa...");
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }, [number]);

    return (
        <div style={{ padding: 20 }}>
            <h2>Demo useMemo</h2>

            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <h3>Giai thừa của {number} là: {factorial}</h3>

            <hr />
            <button onClick={() => setCount(count + 1)}>Tăng count: {count}</button>
        </div>
    );
}
