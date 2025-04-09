
import { useState } from "react";

function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(initial);

    return { count, increase, decrease, reset };
}

export default function CounterWithCustomHook() {
    const { count, increase, decrease, reset } = useCounter(0);

    return (
        <div style={{ textAlign: "center", marginTop: 50 }}>
            <h2>Bộ đếm</h2>
            <h1>{count}</h1>
            <button onClick={increase}>Tăng</button>
            <button onClick={decrease} style={{ marginLeft: 10 }}>Giảm</button>
            <button onClick={reset} style={{ marginLeft: 10 }}>Reset</button>
        </div>
    );
}
