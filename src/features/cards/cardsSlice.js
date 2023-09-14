import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice= createSlice({
    name:'cards',
    initialState:{
        cards:{
            'dc05d1e7-497e-4a91-bd47-8431f7b397e3': {
              id: 'dc05d1e7-497e-4a91-bd47-8431f7b397e3',
              front: 'What are the names of Harry\’s parents',
              back: 'James and Lily Potter'
            },
            'c1e18c46-9404-49ea-ba64-4831d65ee751': {
              id: 'c1e18c46-9404-49ea-ba64-4831d65ee751',
              front: 'Where did Harry live in the Muggle world?',
              back: 'Number 4 Privet Drive, Little Whinging, Surrey'
            },
            '94d6d6ae-468e-4142-9c30-070ae4ff79e4': {
              id: '94d6d6ae-468e-4142-9c30-070ae4ff79e4',
              front: 'What are the four Hogwarts houses?',
              back: 'Gryffindor, Slytherin, Hufflepuff, Ravenclaw'
            },
            'da7532a6-f4d8-44cc-965d-6d34580f75e3': {
              id: 'da7532a6-f4d8-44cc-965d-6d34580f75e3',
              front: 'What animal can Harry speak to?',
              back: 'Snake'
            },
            '184c89f5-76e5-4696-a79e-b8dfa002e2f3': {
              id: '184c89f5-76e5-4696-a79e-b8dfa002e2f3',
              front: 'What are the names of Harry\’s parents',
              back: 'James and Lily Potter'
            },
            'bd5b1e59-82f6-4532-8c82-fc4d135d75e4': {
              id: 'bd5b1e59-82f6-4532-8c82-fc4d135d75e4',
              front: 'Where did Harry live in the Muggle world?',
              back: 'Number 4 Privet Drive, Little Whinging, Surrey'
            },
            'f30a948f-49c1-454a-86c6-2f3db41b5f2b': {
              id: 'f30a948f-49c1-454a-86c6-2f3db41b5f2b',
              front: 'What are the four Hogwarts houses?',
              back: 'Gryffindor, Slytherin, Hufflepuff, Ravenclaw'
            },
            '0b81f4d0-7d21-41c5-ab17-4bfdbbd56fd3': {
              id: '0b81f4d0-7d21-41c5-ab17-4bfdbbd56fd3',
              front: 'What animal can Harry speak to?',
              back: 'Snake'
            },
            '31c6378a-b69e-494e-a912-845e150aea9b': {
              id: '31c6378a-b69e-494e-a912-845e150aea9b',
              front: 'What are the names of Harry\’s parents',
              back: 'James and Lily Potter'
            },
            '5d2a683a-5376-4543-a54f-f552f468d059': {
              id: '5d2a683a-5376-4543-a54f-f552f468d059',
              front: 'Where did Harry live in the Muggle world?',
              back: 'Number 4 Privet Drive, Little Whinging, Surrey'
            },
            '57e4c351-9bc1-4d8e-ab85-5e5eedb01576': {
              id: '57e4c351-9bc1-4d8e-ab85-5e5eedb01576',
              front: 'What are the four Hogwarts houses?',
              back: 'Gryffindor, Slytherin, Hufflepuff, Ravenclaw'
            },
            'b416695d-d7b1-477b-955e-0957e21aca5f': {
              id: 'b416695d-d7b1-477b-955e-0957e21aca5f',
              front: 'Which player scored the fastest hat-trick in the Premier League?',
              back: 'Sadio Mane'
            },
            '7cdf1d07-d7f7-4648-b22c-7f190ff7c22e': {
              id: '7cdf1d07-d7f7-4648-b22c-7f190ff7c22e',
              front: 'Which country won the first ever World Cup in 1930?',
              back: 'Uruguay'
            },
            '77284fec-edf6-41e6-8e14-935d8de24bbd': {
              id: '77284fec-edf6-41e6-8e14-935d8de24bbd',
              front: 'Which country has won the most World Cups?',
              back: 'Brazil'
            }
          }
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
