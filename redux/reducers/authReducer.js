import actions from '../actions';
import { 
    AUTENTICAR_TOKEN,
    USER,
    AUTENTICAR
 } from '../types';

const initialState = { token: null, usuario: null }; 
export default ( state = initialState, action ) => {
    switch(action.type){
        case USER:
            return {
                ...state,
                usuario: action.payload,
                token: action.payload ? action.payload.token : null
            };
            case AUTENTICAR_TOKEN:
                return { ...state, token: action.payload }
            case AUTENTICAR: 
                return {
                    ...state,
                    token: action.payload.usuario ? action.payload.usuario.token : null,
                    usuario: action.payload.usuario,
                } 
        default: return state 
    }
}