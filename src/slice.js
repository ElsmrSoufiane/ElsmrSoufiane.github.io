import { configureStore, createSlice } from "@reduxjs/toolkit";
import { produit } from "./data";
const slice=createSlice({ 
    name:"produits",
    initialState:{produits:produit,lp:produit},reducers:{
        chercher:(state,action)=>{
            state.lp=state.produits.filter(e=>{
                if (action.payload) {
                    return e.nom.toLowerCase().includes(action.payload.toLowerCase());
                  }
                  return true;
            })
        }
    }
}

)
const store=configureStore({
    reducer:{
        produits:slice.reducer
    }
});
export default store
export const {chercher}=slice.actions;