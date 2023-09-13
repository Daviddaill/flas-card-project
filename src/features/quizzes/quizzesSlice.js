import { createSlice } from "@reduxjs/toolkit";


export const quizzesSlice= createSlice({
    name:'quizzes',
    initialState: {
        //This inner quizzes object will eventually hold all quizzes keyed by id
        quizzes:{},
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