//import { action } from "./actions";
import { createSlice } from '@reduxjs/toolkit';

export const shoppingStore = createSlice({
    name: 'shoppingStoreApp',
    initialState: JSON.parse(localStorage.getItem("value"))!==null? JSON.parse(localStorage.getItem("value")) :  [],
    reducers: {
        addToCart: (state, action) => {
            const itemId = () => Math.random().toString(32).substring(2, 8);
            const newItem = {
                //product & quantity
                ...action.payload,
                id: itemId()
            };
            return [...state, newItem];
        },

        updateCart: (state, action) => {
            return state = state.map(
                val => {
                    return (val.id === action.payload.id) ?
                        { id: val.id, quantity: action.payload.quantity, product: val.product } :
                        val
                }
            );
        },

        removeCart: (state, action) => {
            return state = state.filter(
                val => val.id !== action.payload.id
            );
        },

        saveToLocalstorage: (state, action) => {
            localStorage.setItem("value", JSON.stringify(action.payload));
            return state;
        }
    }
});

export const { addToCart, updateCart, removeCart, saveToLocalstorage } = shoppingStore.actions;
export const shop = shoppingStore.reducer;

export const test = createSlice({
    name : "test",
    initialState : [
        {id:1, name:"Romuald", age:15},
        {id:2, name:"Fabrice", age:20},
        {id:3, name:"Maruis", age:25}
    ],
    reducers: {
        addUser : (state, action) => {
            state.push(action.payload);
        },
        deleteUser : (state, action) => {
            state = state.filter(
                val=>val.id === action.payload.id
            )
        }
    }
});
 export const { addUser, deleteUser } = test.actions;
 export const testReducer = test.reducer;
