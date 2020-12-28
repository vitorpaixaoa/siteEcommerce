import {
    FETCH_PRODUTOS,
    FETCH_PRODUTOS_PESQUISA, 
    FETCH_PESQUISA
} from '../types';

const initialState ={
    produtos: null,
    termo: "",
    produtosPesquisa: null
}

export default ( state = initialState, action ) => {
    switch(action.type){
        case  FETCH_PRODUTOS:
        return{
            ...state,
            produtos: action.payload.produtos
        }
        case FETCH_PESQUISA:
            return{
                ...state,
                termo: action.termo
            }
        case FETCH_PRODUTOS_PESQUISA:
            return{
                ...state,
                produtosPesquisa: action.payload.produtos,
                termo: action.termo
            }
        default:
            return state;
    }
}