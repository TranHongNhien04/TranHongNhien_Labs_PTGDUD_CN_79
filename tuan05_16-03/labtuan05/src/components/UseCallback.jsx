import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
    console.log("Child render");
    return (
        <div style={{ marginTop: 10 }}>
            <button onClick={onClick}>Click Me (Từ con)</button>
        </div>
    );
});

export default function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = useCallback(() => {
        console.log("Click từ component con");
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>useCallback + React.memo Demo</h2>

            <input
                placeholder="Nhập gì đó..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <br /><br />
            <button onClick={() => setCount(count + 1)}>Tăng count: {count}</button>
            <Child onClick={handleClick} />
        </div>
    );
}
