import { useState, useReducer } from "react";

function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_TODO":
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
}

const initialTodos = ["Công việc 1", "Công việc 2"];

export default function ToDoList() {
    const [input, setInput] = useState("");
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    const handleAdd = () => {
        if (input.trim() === "") return;
        dispatch({ type: "ADD_TODO", payload: input });
        setInput("");
    };

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE_TODO", payload: index });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Nhập công việc"
            />
            <button className="btn btn-primary" onClick={handleAdd}>
                Thêm
            </button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(index)}
                            style={{ marginLeft: 10 }}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
