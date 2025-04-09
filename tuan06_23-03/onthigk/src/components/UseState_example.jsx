import { useState } from "react"

export default function CongAB() {
    const [kq, setKq] = useState(0)
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <>
            <h1>Phép cộng đơn giản A và B</h1>
            <input type="number" placeholder=" Nhập vào số a" onChange={(e) => { setA(Number(e.target.value)) }} />
            <input type="number" placeholder="Nhập vào số b" onChange={(e) => { setB(Number(e.target.value)) }} />

            <button className="btn btn-primary m-1"
                onClick={() => { setKq(a + b) }}>Kết quả</button>
            <br />
            <span>Kết quả: {kq}</span>
        </>
    )
}