import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(t => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        removeTodo: (state, action) => {
            return state.filter(t => t.id !== action.payload);
        }
    }
});

const store = configureStore({ reducer: { todos: todoSlice.reducer } });
const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

const Todo = () => {
    const [text, setText] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold mb-4">To-do List</h2>
            <div className="flex mb-4">
                <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border p-2 rounded-l" placeholder="Nhập công việc" />
                <button onClick={handleAdd} className="bg-blue-500 text-white px-4 rounded-r">Thêm</button>
            </div>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center">
                        <span onClick={() => dispatch(toggleTodo(todo.id))} className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="text-red-500 hover:underline text-sm">Xoá</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function TodoListApp() {
    return (
        <Provider store={store}>
            <Todo />
        </Provider>
    );
}
