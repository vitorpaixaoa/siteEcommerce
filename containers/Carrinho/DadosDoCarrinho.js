import React, {Component} from "react";
import {formatMoney} from "../../utils";

import Frete from "../../components/Item/Frete";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import Link from "next/link";
import {
    Button,
    Container,
    Divisor,
    HorizontalBox,
    TextComponent,
} from "../../pages/styles/Components/Components";
import {DadosDoCarrinhoBox, DadosDoCarrinhoContainer} from "./styles";

class DadosDoCarrinho extends Component {
    renderDadosDoCarrinho() {
        const {carrinho, freteSelecionado} = this.props;
        const valorTotal = (carrinho || []).reduce(
            (all, item) =>
                all + Number(item.precoUnitario) * Number(item.quantidade),
            0
        );
        return (
            <DadosDoCarrinhoBox>
                <HorizontalBox width="100%" justifyContent="space-between">
                    <div>
                        <TextComponent fontSize={16}>
                            Valor do Pedido:
                        </TextComponent>
                    </div>
                    <div>
                        <TextComponent fontSize={16}>
                            {formatMoney(valorTotal)}
                        </TextComponent>
                    </div>
                </HorizontalBox>
                <Divisor background="#d2d2d7" height={1} margin="2rem 0" />
                <Frete />
                <HorizontalBox margin="16px 0" width="100%" justifyContent="space-between">
                    <div>
                        <TextComponent fontWeight={600} fontSize={24}>
                            Valor total:
                        </TextComponent>
                    </div>
                    <div>
                        <TextComponent fontWeight={600} fontSize={24}>
                            {formatMoney(
                                valorTotal +
                                    Number(
                                        freteSelecionado
                                            ? (
                                                  freteSelecionado.Valor || "0"
                                              ).replace(",", ".")
                                            : 0
                                    )
                            )}
                        </TextComponent>
                    </div>
                </HorizontalBox>
                <Link href="/checkout">
                    <Button width="70%" background="#FF2A6D">
                        <span>Finalizar Pedido</span>
                    </Button>
                </Link>
            </DadosDoCarrinhoBox>
        );
    }

    render() {
        return (
            <DadosDoCarrinhoContainer>
                {this.renderDadosDoCarrinho()}
            </DadosDoCarrinhoContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    carrinho: state.carrinho.carrinho,
    freteSelecionado: state.carrinho.freteSelecionado,
});
export default connect(mapStateToProps, actions)(DadosDoCarrinho);
