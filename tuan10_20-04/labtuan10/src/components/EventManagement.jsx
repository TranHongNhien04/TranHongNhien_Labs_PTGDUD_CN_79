import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const eventSlice = createSlice({
    name: 'events',
    initialState: { events: [], nextId: 1 },
    reducers: {
        addEvent: (state, action) => {
            state.events.push({ id: state.nextId++, ...action.payload });
        },
        deleteEvent: (state, action) => {
            state.events = state.events.filter(e => e.id !== action.payload);
        },
        editEvent: (state, action) => {
            const { id, title, date } = action.payload;
            const index = state.events.findIndex(e => e.id === id);
            if (index !== -1) {
                state.events[index].title = title;
                state.events[index].date = date;
            }
        },
    },
});

const store = configureStore({ reducer: { events: eventSlice.reducer } });
const { addEvent, deleteEvent, editEvent } = eventSlice.actions;

const Bai9 = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);
    const [form, setForm] = useState({ title: '', date: '' });
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ title: '', date: '' });

    const handleAdd = () => {
        if (form.title && form.date) {
            dispatch(addEvent(form));
            setForm({ title: '', date: '' });
        }
    };

    const startEdit = (event) => {
        setEditingId(event.id);
        setEditForm({ title: event.title, date: event.date });
    };

    const handleSaveEdit = (id) => {
        dispatch(editEvent({ id, ...editForm }));
        setEditingId(null);
    };

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-xl font-bold">Bài 9: Quản lý sự kiện</h1>
            <div className="space-x-2">
                <input placeholder="Tên sự kiện" className="border p-1" value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })} />
                <input type="date" className="border p-1" value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })} />
                <button className="text-black border border-black px-2 py-1 rounded" onClick={handleAdd}>Thêm</button>
            </div>
            <ul className="space-y-2">
                {events.map(ev => (
                    <li key={ev.id} className="flex items-center gap-2">
                        {editingId === ev.id ? (
                            <>
                                <input className="border p-1" value={editForm.title}
                                    onChange={(e) => setEditForm({ ...editForm, title: e.target.value })} />
                                <input type="date" className="border p-1" value={editForm.date}
                                    onChange={(e) => setEditForm({ ...editForm, date: e.target.value })} />
                                <button className="text-black border border-black px-2 py-1 rounded" onClick={() => handleSaveEdit(ev.id)}>Lưu</button>
                                <button className="text-black border border-black px-2 py-1 rounded" onClick={() => setEditingId(null)}>Huỷ</button>
                            </>
                        ) : (
                            <>
                                <span>{ev.title} ({ev.date})</span>
                                <button className="text-blue-500 border border-blue-500 px-2 py-1 rounded" onClick={() => startEdit(ev)}>Sửa</button>
                                <button className="text-red-500 border border-red-500 px-2 py-1 rounded" onClick={() => dispatch(deleteEvent(ev.id))}>Xoá</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function EventManagementApp() {
    return <Provider store={store}><Bai9 /></Provider>;
}
