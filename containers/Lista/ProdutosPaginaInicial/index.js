import React, { Component } from 'react';

import Produtos from '../../../components/listas/Produtos';

const PRODUTOS = [
    {
        id: 1234567890,
        fotos: ["/static/imgProduto/cacacao-verde.jpg"],
        titulo: "Macacão Verde",
        preco: 180
    },
    {
        id: 23213333,
        fotos: ["/static/imgProduto/conjunto-roso.jpg"],
        titulo: "Conjunto Roso Bonito confia",
        preco: 278,
        promocao: 250
    },
    {
        id: 2132134455,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Branco Bonitim",
        preco: 3766,
        promocao: 10
    },
    {
        id: 666644444,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 44244,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 5321525,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 64366,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 7774444,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 454666,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
    {
        id: 4567774,
        fotos: ["/static/imgProduto/vestido-branco.jpg"],
        titulo: "Vestido Vermelho",
        preco: 670,
        promocao: 800
    },
]

class ProdutosPaginaInicial extends Component {
    render(){
        return(
            <div className="container Produtos-Pagina-Inicial flex flex vertical">
                <h2>Lançamentos</h2>
                <br/>
                <Produtos
                    produtos={PRODUTOS}
                    itensPorLinha={4} />
            </div>
        )
    }
}

export default ProdutosPaginaInicial;