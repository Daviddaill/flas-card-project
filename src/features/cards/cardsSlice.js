import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice= createSlice({
    name:'cards',
    initialState:{
        cards:{}
    },
    reducers:{
        addCard: (state,action)=>{
            //receive a payload of the form { id: '123', front: 'front of card', back: 'back of card'}
            const {id, front, back }= action.payload;
            state.cards[id]= {id,front, back};
        }
    }
})

export const selectCard=(state)=> state.cards.cards;
//const mySelectorByName = (name) => (state) => state.items.find(item.name === name));

export const {addCard}= cardsSlice.actions; 
export default cardsSlice.reducer;
