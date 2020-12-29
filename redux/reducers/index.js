import {combineReducers} from 'redux';

import authReducer from './authReducer';
import categoriaReducer from './categoriaReducer';
import lojaReducer from './lojaReducer';
import produtoReducers from './produtoReducers';
import carrinhoReducer from './carrinhoReducer';

export default combineReducers({
    auth: authReducer,
    categoria: categoriaReducer,
    loja: lojaReducer,
    produto: produtoReducers,
    carrinho: carrinhoReducer
});