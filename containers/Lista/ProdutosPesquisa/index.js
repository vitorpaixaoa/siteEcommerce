import React, { Component } from 'react';

import Produtos from '../../../components/listas/Produtos';
import Paginacao from '../../../components/Paginacao'
import actions from '../../../redux/actions';
import { connect } from 'react-redux'

class ProdutosPesquisa extends Component {
    state={ atual: 0,
        limit:20}


        changeNumeroAtual = (atual) =>  {
            this.setState({ atual }, () => this.getProduto() );
        }
    
        getProduto(){
            const { atual, limit } = this.state;
            const { termo } = this.props;
            
            this.props.fetchProdutosPesquisa(termo, atual, limit);
        }


    render(){
        const { produtosPesquisa, termo } = this.props;
        return(
            <div className="container Categoria-Produtos">
                <br/><br/>
                <br/><br/>
                <div className="flex flex-center">
                    <h1>Resultados para:  {termo} </h1>
                </div>
                <Produtos
                    produtos={ produtosPesquisa ? produtosPesquisa.docs : []}
                    itensPorLinha={4} />
                <Paginacao 
                    atual={ this.state.atual || 0} 
                    total = { produtosPesquisa.total } 
                    limite={ this.state.limit } 
                    onClick={(numeroAtual) =>this.changeNumeroAtual(numeroAtual)} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    termo: state.produto.termo,
    produtosPesquisa: state.produto.produtosPesquisa
})

export default connect(mapStateToProps, actions)(ProdutosPesquisa);