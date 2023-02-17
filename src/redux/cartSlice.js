import { createSlice } from "@reduxjs/toolkit";

const checkCart = JSON.parse(localStorage.getItem("my-shop:carts"));

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        carts: checkCart ? checkCart : []
    },
    reducers: {
        addToCart: (state,action) => {
            const cartItem = action.payload;
            const newCart = [...state.carts];
            const index = newCart.findIndex(item => item.product.id === cartItem.product.id && item.size === cartItem.size) 
            if(index === -1) {
                newCart.push(cartItem)
            }else{
                newCart[index].quantity += cartItem.quantity
            }
            state.carts = newCart;
            localStorage.setItem("my-shop:carts", JSON.stringify(state.carts))
           
        },
        updateCart: (state, action)=>{
            const cartItem = action.payload;
            const index = state.carts.findIndex(item => {
                return item.product.id === cartItem.product.id && item.size === cartItem.size
            }) 
            if(index !== -1){
                state.carts[index].quantity = cartItem.quantity
            }
            localStorage.setItem("my-shop:carts", JSON.stringify(state.carts))
        },
        deleteCart: (state,action) => {
            const cartItem = action.payload;
            state.carts = state.carts.filter(item => item.product.id  !== cartItem.product.id || item.size !== cartItem.size)
            localStorage.setItem("my-shop:carts", JSON.stringify(state.carts))

        }
    }
})


export const {addToCart,deleteCart, updateCart} = cartSlice.actions;
export default cartSlice.reducer