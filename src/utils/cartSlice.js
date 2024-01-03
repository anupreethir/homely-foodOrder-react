import { createSlice } from "@reduxjs/toolkit";

// slice consists of name, initial state and reducer functions
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

// slices returns a Object
// {
//     actions:{
//         addItem
//     },
//     reducer
// } so export happens the following
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;