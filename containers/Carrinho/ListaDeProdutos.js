import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import {formatMoney} from "../../utils";
import {baseImg} from "../../config";
import {addCart} from "../../utils/cart";
import {
    Button,
    Divisor,
    TextComponent,
} from "../../pages/styles/Components/Components";
import {
    ImageBox,
    ItemDetails,
    PriceBox,
    ProductBox,
    QuantityBox,
    TitleBox,
} from "./styles";

class ListaDeProdutos extends Component {
    renderCabecalhoCarrinho(semAlteracoes) {
        return (
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
                {!semAlteracoes && <div className="flex-1"></div>}
            </div>
        );
    }

    changeQuantidade = (e, quantidade, item, index) => {
        if (Number(e.target.value) < 1) return;
        let novaQuantidade = Number(e.target.value);
        let change = novaQuantidade - quantidade;
        if (novaQuantidade >= item.variacao.quantidade) {
            return alert("Não temos essa quantidade disponível em estoque.");
        }
        addCart(
            {
                produto: item.produto._id,
                variacao: item.variacao._id,
                quantidade: change,
                precoUnitario: item.precoUnitario,
            },
            false
        );
        this.props.updateQuantidade(change, index);
    };

    removeProdutoCarrinho = (index) => {
        if (window.confirm("Você realmente deseja remover esse produto?")) {
            this.props.removerProduto(index);
        }
    };

    renderProduto(item, semAlteracoes, index) {
        console.log(!item.variacao ||
            !item.variacao._id ||
            !item.produto ||
            !item.produto._id)
        if (
            !item.variacao ||
            !item.variacao._id ||
            !item.produto ||
            !item.produto._id
        )
            return null;
        const foto =
            item.variacao.fotos && item.variacao.fotos.length >= 0
                ? item.variacao.fotos[0]
                : item.produto.fotos[0];
        const nome = item.produto.titulo + " - " + item.variacao.nome;
        const {quantidade, precoUnitario} = item;
        return (
            <>
                <Divisor background="#d2d2d7" height={1} margin="4rem 0" />
                <ProductBox key={item.variacao._id}>
                    <ImageBox>
                        <img src={baseImg + foto} alt={nome} height="216px" />
                    </ImageBox>
                    <ItemDetails>
                        <TitleBox>
                            <TextComponent
                                textAlign="end"
                                fontSize={24}
                                fontWeight={500}
                            >
                                {nome}
                            </TextComponent>
                        </TitleBox>
                        <QuantityBox>
                            {semAlteracoes ? (
                                <span>{quantidade}</span>
                            ) : (
                                <input
                                    type="number"
                                    value={quantidade}
                                    className="produto-quantidade"
                                    onChange={(e) =>
                                        this.changeQuantidade(
                                            e,
                                            quantidade,
                                            item,
                                            index
                                        )
                                    }
                                />
                            )}
                        </QuantityBox>
                        <PriceBox>
                            <TextComponent fontSize={24} fontWeight={500}>
                                {formatMoney(precoUnitario * quantidade)}
                            </TextComponent>
                            {!semAlteracoes && (
                                <Button
                                    background="transparent"
                                    color="#FF2A6D"
                                    padding="0"
                                    margin="0"
                                    width=""
                                    minWidth=""
                                    onClick={() =>
                                        this.removeProdutoCarrinho(index)
                                    }
                                >
                                    <span className="btn-remover">Remover</span>
                                </Button>
                            )}
                        </PriceBox>
                    </ItemDetails>
                </ProductBox>
            </>
        );
    }

    renderProdutos(semAlteracoes) {
        this.props.carrinho.map((item, index) =>
            console.log(item)
        );
        return this.props.carrinho.map((item, index) =>
            this.renderProduto(item, semAlteracoes, index)
        );
    }

    render() {
        const {semAlteracoes, carrinho} = this.props;
        return (
            <div>
                {/* {this.renderCabecalhoCarrinho(semAlteracoes)} */}
                {carrinho && this.renderProdutos(semAlteracoes)}
                <Divisor background="#d2d2d7" height={1} margin="4rem 0" />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    carrinho: state.carrinho.carrinho,
});

export default connect(mapStateToProps, actions)(ListaDeProdutos);
