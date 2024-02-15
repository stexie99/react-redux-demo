import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload]}
        }
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer