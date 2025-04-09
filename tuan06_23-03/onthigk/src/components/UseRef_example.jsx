import { useRef, useState } from "react"

export default function DemLanRender() {
    const [dem, setDem] = useState(0)
    const demLanRender = useRef(1)

    demLanRender.current++
    return (
        <>
            <h2>Số lần render: {demLanRender.current}</h2>
            <button className="btn btn-primary" onClick={() => setDem(dem + 1)}>Số lần nhấn: {dem}</button>
        </>
    )
}