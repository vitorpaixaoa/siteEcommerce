import React, { Component } from 'react';
import { connect } from 'react-redux';

import Produtos from '../../components/listas/Produtos';
import actions from '../../redux/actions';



class ProdutosRelacionados extends Component {

    componentDidMount(){
        if(this.props.produto){
            this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
        }
    }

    componentDidUpdate(prevProps){
        if( !prevProps.produto && this.props.produto ){
            this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4);
        }
    }

    render(){
        const { produtosCategoria } = this.props;
        return(
            <div className=" Produtos-Relacionados container-relacionados flex flex vertical">
                <h2>Produtos Relacionados</h2>
                <br/> 
                <Produtos
                    produtos={ produtosCategoria ? produtosCategoria.docs : [] }
                    itensPorLinha={4} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    produtosCategoria: state.categoria.produtosCategoria,
    produto: state.produto.produto
})

export default connect(mapStateToProps,actions)(ProdutosRelacionados);