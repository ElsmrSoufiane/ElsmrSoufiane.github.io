import { configureStore, createSlice } from "@reduxjs/toolkit";
import { produit } from "./data";
const slice=createSlice({ 
    name:"produits",
    initialState:{produits:produit,lp:produit.filter(e=>{
        return e.type=="tard"
    }),lpm:produit.filter(e=>{
        return e.type=="mod"
    })},reducers:{
        chercher:(state,action)=>{
            state.lp=state.produits.filter(e=>{
                if (action.payload) {
                    return e.nom.toLowerCase().includes(action.payload.toLowerCase()) && e.type=="tard";
                  }
                  return true;
            })
        }, chercher2:(state,action)=>{
            state.lpm=state.produits.filter(e=>{
                if (action.payload) {
                    return e.nom.toLowerCase().includes(action.payload.toLowerCase()) && e.type=="mod";
                  }
                  return true;
            })
        },filtr:(state,action)=>{
            state.lpm=state.produits.filter(e=>{
                if (action.payload) {
                    return e.categorie==action.payload && e.type=="mod";
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
export const {chercher,chercher2,filtr}=slice.actions;