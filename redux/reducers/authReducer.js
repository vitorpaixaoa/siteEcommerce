import actions from '../actions';
import { AUTENTICAR_TOKEN } from '../types';

const initialState = { token: null, usuario: null }; 
export default ( state = initialState, action ) => {
    switch(action.type){
        case AUTENTICAR_TOKEN: 
            return { ...state, token:  action.payload }
        default: return state 
    }
}