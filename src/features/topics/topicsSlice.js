import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        //will hold all topics like this {'123':{id:'', name:'' icon:'',auizIds:[] },}
        topics:  {
            '21f588cb-57f0-41b2-8b92-4c8c5ae50527': {
              id: '21f588cb-57f0-41b2-8b92-4c8c5ae50527',
              name: 'Literature',
              icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/book.svg',
              quizIds: [
                'd17b66c9-4f8d-4adb-9082-fadd9e70f680'
              ]
            },
            '0ddb91c1-e4b3-473e-a110-cfb7cd3dd843': {
              id: '0ddb91c1-e4b3-473e-a110-cfb7cd3dd843',
              name: 'Sports',
              icon: 'https://static-assets.codecademy.com/skillpaths/react-redux/redux-quiz-app/balloon.svg',
              quizIds: [
                'f3225868-101e-452e-8819-a1593575263f'
              ]
            }
        },
    },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon } = action.payload;
            state.topics[id] = { id, name, icon, quizIds: [] };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addQuiz, (state, action) => {
            const {topicId, id} = action.payload;
            state.topics[topicId].quizIds.push(id)
          
        });
      },
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizzId } = topicsSlice.actions;
export default topicsSlice.reducer;