import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggleTheme: state => (state === 'light' ? 'dark' : 'light')
    }
});

const store = configureStore({ reducer: { theme: themeSlice.reducer } });
const { toggleTheme } = themeSlice.actions;

const Theme = () => {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const isDark = theme === 'dark';

    return (
        <body className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} h-screen w-screen flex items-center justify-center`}>
            <div className="p-6 rounded-xl shadow bg-opacity-90">
                <h2 className="text-2xl font-bold mb-4">Giao diện: {theme}</h2>
                <button onClick={() => dispatch(toggleTheme())} className="px-4 py-2 bg-indigo-500 text-white rounded">
                    Chuyển giao diện
                </button>
            </div>
        </body>
    );
};

export default function ThemeApp() {
    return (
        <Provider store={store}>
            <Theme />
        </Provider>
    );
}
