import authActions from './authActions';
import categoriaActions from './categoriaActions';
import lojaActions from './lojaActions';
import produtoActions from './produtoActions';
import carrinhoActions from './carrinhoActions';
export default {
    ...authActions,
    ...categoriaActions,
    ...lojaActions,
    ...produtoActions,
    ...carrinhoActions
}