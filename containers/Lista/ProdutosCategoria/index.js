import React, { Component } from 'react';

import Produtos from '../../../components/listas/Produtos';
import Paginacao from '../../../components/Paginacao'

const PRODUTOS = [
    { id: 1,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 2,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 3, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 4,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 5,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 6, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 7,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 8,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 9, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 10,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 11,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 12, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 13,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 14,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 15, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 16,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 17,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 18, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
    { id: 19,fotos: ["/static/imgProduto/cacacao-verde.jpg"],titulo: "Macacão Verde",preco: 180},
    { id: 20,fotos: ["/static/conjunto-roso-semfundo.png"],titulo: "Conjunto Roso Bonito confia",preco: 278, promocao: 250 },
    { id: 21, fotos: ["/static/imgProduto/vestido-branco.jpg"], titulo: "Vestido Branco Bonitim",preco: 3766,promocao: 10},
   
]

class ProdutosCategoria extends Component {
    state={ atual: 0}
    render(){
        return(
            <div className="container Categoria-Produtos">
                <br/><br/>
                <br/><br/>
                <div className="flex flex-center">
                    <h1>VESTIDOS</h1>
                </div>
                <Produtos
                    produtos={PRODUTOS}
                    itensPorLinha={4} />
                <Paginacao 
                    atual={ this.state.atual || 0} 
                    total = { PRODUTOS.length * 4} 
                    limite={ PRODUTOS.length } 
                    onClick={(numeroAtual) =>this.setState({ atual: numeroAtual })} />
            </div>
        )
    }
}

export default ProdutosCategoria;