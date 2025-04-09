
import { useState, useMemo } from "react";

export default function UseMemoExample() {
    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    const factorial = useMemo(() => {
        console.log("Tính lại factorial");
        let result = 1;
        for (let i = 1; i <= number; i++) result *= i;
        return result;
    }, [number]);

    return (
        <div>
            <h2>Giai thừa: {factorial}</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="Không ảnh hưởng factorial"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </div>
    );
}
