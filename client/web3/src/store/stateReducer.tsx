import { createSlice } from "@reduxjs/toolkit";


export const stateSlice = createSlice({
    name: 'state',
    initialState: {
        header : false,
        headerClass: '' as string,
        mailModal: false

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
        },
        mailModalState: (state) => {
            state.mailModal = !state.mailModal;
            // console.log(state.mailModal);
            

        }

    },

})



export const {headerState, mailModalState} = stateSlice.actions
export default stateSlice.reducer;