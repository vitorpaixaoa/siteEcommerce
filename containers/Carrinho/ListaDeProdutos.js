import React, { Component } from 'react';
import { formatMoney } from '../../utils';


const PRODUTOS = [
    {     
        id: 1234567890,
        fotos: ["/static/imgProduto/cacacao-verde.jpg"],
        titulo: "Macacão Verde - M ",
        precoUnitario: 180,
        quantidade:1
    },
    {
        id: 23213333,
        fotos: ["/static/conjunto-roso-semfundo.png"],
        titulo: "Conjunto Roso Bonito confia",
        precoUnitario: 278,
        quantidade: 1
    },
    {     
        id: 123456789220,
        fotos: ["/static/imgProduto/cacacao-verde.jpg"],
        titulo: "Macacão Verde - M ",
        precoUnitario: 180,
        quantidade:1
    }
]


class ListaDeProdutos extends Component {

    renderCabecalhoCarrinho(semAlteracoes){
        return(
            <div className="carrinho-cabecalho no-mb-flex flex">
                <div className="flex-6"></div>
                <div className="headline flex-1 flex flex-center">
                    <h3 className="text-center">Quantidade</h3>
                </div>
                <div className="headline flex-1 flex flex-center">
                    <h3 className="text-center">Preço Unitário</h3>
                </div>
                <div className="headline flex-1 flex flex-center">
                    <h3 className="text-center">Preço Total</h3>
                </div>
                { !semAlteracoes && (<div className="flex-1"></div>)}
            </div>
        )
    }

    renderProduto(item, semAlteracoes){
        const foto = item.fotos[0];
        const nome = item.titulo;
        const { quantidade, precoUnitario } = item;
        return(
            <div key={item.id} className="carrinho-item flex">
                <div className="flex-4 flex ">
                    <div className="produto-image flex-2 flex flex-center">
                        <img src={foto} alt={nome} width="100px" />
                    </div>
                    <div className="produto-titulo flex-4 flex flex-start">
                        <h3 className="text-center"> {nome} </h3>
                    </div>
                    <div className=" flex-1 flex flex-center ">
                        {
                            semAlteracoes ? 
                                (<span>{quantidade}</span>) :
                                <input type="number" defaultValue={quantidade} className="produto-quantidade" />
                        }
                    </div>
                    <div className="flex-1 flex flex-center">
                        <span>{ formatMoney(precoUnitario)}</span>
                    </div>
                    <div className="flex-1 flex flex-center">
                        <span>{ formatMoney(precoUnitario * quantidade)}</span>
                    </div>
                    { !semAlteracoes &&  (<div className="flex-1 flex flex-center">
                        <span className="btn-remover">Remover</span>
                    </div>)}
                </div>
            </div>
        )
    }

    renderProdutos(semAlteracoes){
       return PRODUTOS.map((item) => this.renderProduto(item, semAlteracoes))
    }

    render(){
        const { semAlteracoes } = this.props;
        return(
            <div className="Lista-De-Produtos flex vertical">
                { this.renderCabecalhoCarrinho(semAlteracoes) }
                { this.renderProdutos(semAlteracoes) }
            </div>
        )
    }
}

export default ListaDeProdutos;