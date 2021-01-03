import authActions from './authActions';
import categoriaActions from './categoriaActions';
import lojaActions from './lojaActions';
import produtoActions from './produtoActions';
import carrinhoActions from './carrinhoActions';
import clienteActions from './clienteActions';
import checkoutActions from './checkoutActions';
import pedidoAction from './pedidoActions'
export default {
    ...authActions,
    ...categoriaActions,
    ...lojaActions,
    ...produtoActions,
    ...carrinhoActions,
    ...clienteActions,
    ...checkoutActions,
    ...pedidoAction
}