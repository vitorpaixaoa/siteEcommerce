import {combineReducers} from 'redux';

import authReducer from './authReducer';
import categoriaReducer from './categoriaReducer';
import lojaReducer from './lojaReducer';
import produtoReducers from './produtoReducers';
import carrinhoReducer from './carrinhoReducer';
import clienteReducer from './clienteReducer';
import checkoutReducer from './checkoutReducer';
import pedidoReducer from './pedidoReducer'

export default combineReducers({
    auth: authReducer,
    categoria: categoriaReducer,
    loja: lojaReducer,
    produto: produtoReducers,
    carrinho: carrinhoReducer,
    cliente: clienteReducer,
    checkout: checkoutReducer,
    pedido: pedidoReducer
});