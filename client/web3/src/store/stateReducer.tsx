import { createSlice } from "@reduxjs/toolkit";


export const stateSlice = createSlice({
    name: 'state',
    initialState: {
        header : false,
        headerClass: '' as string,

    },
    reducers: {
        headerState: (state, action) => {
            switch (action.payload) {
                case 'Link' :
                    if (!state.header){
                        state.header = true;
                        state.headerClass = 'headerActive';

                    }
                    break;
                case 'Home' :
                    state.header = false;
                    state.headerClass = '';
                    break;
                default:
                    state.header = false;
                    state.headerClass = '';
                    break;


                
            }

            // state.header = !state.header
            // return {
            //     type: 'MY_TEST_ACTION',

            // }
            
            // state.header = !state.header
            // state.header ? state.headerClass = 'headerActive' : state.headerClass = '';


            // console.log(state.header);
            // console.log(action.payload);
            


        }

    },

})



export const {headerState} = stateSlice.actions
export default stateSlice.reducer;