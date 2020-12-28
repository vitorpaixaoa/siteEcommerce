import axios from 'axios';
import { FETCH_PRODUTOS, FETCH_PRODUTOS_PESQUISA, FETCH_PESQUISA } from '../types';
import { API, versao, loja } from '../../config';


export const fetchProdutosPaginaInicial = () => (dispatch) => {
    axios.get(`${API}/${versao}/api/produtos/disponiveis?loja=${loja}&offset=${0}&limit=${100}&sortType=${"preco-crescente"}`)
    .then((response) => dispatch({ type: FETCH_PRODUTOS, payload: response.data }))
    .catch(e => console.log(e));
}

export const fetchTermo = (termo) => ({ type: FETCH_PESQUISA, termo });


export const fetchProdutosPesquisa = ( termo, atual=0, limit=20 ) => dispatch => {
    axios.get(`${API}/${versao}/api/produtos/search/${termo}?loja=${loja}&offset=${atual}&limit=${limit}`)
    .then((response) => dispatch({ type: FETCH_PRODUTOS_PESQUISA, payload: response.data, termo }))
    .catch(e => console.log(e));
}

export default  {
    fetchProdutosPaginaInicial,
    fetchTermo,
    fetchProdutosPesquisa
};


