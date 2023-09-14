import { createSlice } from "@reduxjs/toolkit";


export const quizzesSlice= createSlice({
    name:'quizzes',
    initialState: {
        //This inner quizzes object will eventually hold all quizzes keyed by id
        quizzes:{
            'd17b66c9-4f8d-4adb-9082-fadd9e70f680': {
              id: 'd17b66c9-4f8d-4adb-9082-fadd9e70f680',
              name: 'Harry Potter',
              topicId: '21f588cb-57f0-41b2-8b92-4c8c5ae50527',
              cardIds: [
                '31c6378a-b69e-494e-a912-845e150aea9b',
                '5d2a683a-5376-4543-a54f-f552f468d059',
                '57e4c351-9bc1-4d8e-ab85-5e5eedb01576'
              ]
            },
            'f3225868-101e-452e-8819-a1593575263f': {
              id: 'f3225868-101e-452e-8819-a1593575263f',
              name: 'Football',
              topicId: '0ddb91c1-e4b3-473e-a110-cfb7cd3dd843',
              cardIds: [
                'b416695d-d7b1-477b-955e-0957e21aca5f',
                '7cdf1d07-d7f7-4648-b22c-7f190ff7c22e',
                '77284fec-edf6-41e6-8e14-935d8de24bbd'
              ]
            }
          },
    },
    reducers:{
        addQuiz: (state, action)=>{
            //receive a payload of the form { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            const {id, name, topicId,cardIds} = action.payload;
            state.quizzes[id]= {id,name,topicId,cardIds};
           
        }
    }
})

export const selectQuizzes = (state)=> state.quizzes.quizzes;
export const {addQuiz}= quizzesSlice.actions;
export default quizzesSlice.reducer;