import {
    FETCH_CLIENTE
} from "../types";


const initialState = { cliente: null }; 

export default ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_CLIENTE:
            return{
                ...state, 
                cliente: action.payload.cliente
            }
        default:
            return state;
    }
}

