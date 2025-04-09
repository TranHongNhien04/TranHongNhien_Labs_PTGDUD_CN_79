import React, { useState } from "react";

const Child = React.memo(({ value }) => {
    console.log("Child render");
    return <p>Giá trị: {value}</p>;
});

export default function MemoExample() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <Child value={count} />

            {/* nhấn tăng đếm -> child render lại, nhập ô input đếm không đổi nên child không render lại */}
        </div>
    );
}
