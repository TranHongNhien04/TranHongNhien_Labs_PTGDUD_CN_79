import React, { useState } from "react";

export default function Hello() {
    const [name, setName] = useState("")
    const [nameH, setNameH] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleClick = () => {
        setNameH(`Hello ${name}`);

    }
    return (
        <>
            <h1>Nhập tên để được chào:)))</h1>
            <input type="text" placeholder="Nhập tên của bạn" onChange={handleChange}
                value={name}
            />
            <button onClick={handleClick}>Hello!</button>
            <br />
            <span>{nameH}</span>
        </>
    )
}