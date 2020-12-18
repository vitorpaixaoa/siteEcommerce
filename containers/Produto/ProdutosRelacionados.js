import React, { Component } from 'react';

import Produtos from '../../components/listas/Produtos';

const PRODUTOS = [
    {
        id: 1234567890,
        fotos: ["/static/imgProduto/cacacao-verde.jpg"],
        titulo: "Macacão Verde",
        preco: 180
    },
    {
        id: 23213333,
        fotos: ["/static/conjunto-roso-semfundo.png"],
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
]

class ProdutosRelacionados extends Component {
    render(){
        return(
            <div className=" Produtos-Relacionados container-relacionados flex flex vertical">
                <h2>Produtos Relacionados</h2>
                <br/>
                <Produtos
                    produtos={PRODUTOS}
                    itensPorLinha={4} />
            </div>
        )
    }
}

export default ProdutosRelacionados;