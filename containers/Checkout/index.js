import React, {Component} from "react";

import DadosCliente from "./DadosCliente";
import DadosEntrega from "./DadosEntrega";
import SubmitDadosCliente from "./SubmitDadosCliente";
import DadosFrete from "./DadosFrete";
import DadosPagamento from "./DadosPagamento";
import DadosPedido from "./DadosPedido";
import CheckoutButton from "./CheckoutButton";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import {Container} from "../../pages/styles/Components/Components";
import { Title } from "../Carrinho/styles";
class CheckoutContainer extends Component {
    state = {
        permissaoInicial: false,
        permissaoCheckout: false,
    };

    render() {
        const {permissaoCheckout, permissaoInicial} = this.state;
        const {usuario, freteSelecionado} = this.props;
        return (
            <Container
                justifyContent="center"
                alignItems="center"
                width="100%"
                backgroundColor="red"
                flexDirection="column"
                margin="96px 0 196px 0"
                padding="0 12px"
            >
                <Title>Falta pouco para concluir seu pedido</Title>
                <div>
                    <DadosCliente
                        usuario={usuario}
                        permissaoInicial={permissaoInicial}
                        permitir={() => this.setState({permissaoInicial: true})}
                    />

                    {(permissaoInicial || usuario) && <DadosEntrega />}

                    {(permissaoInicial || usuario) && (
                        <SubmitDadosCliente
                            permitir={() =>
                                this.setState({permissaoCheckout: true})
                            }
                        />
                    )}
                    {permissaoCheckout && <DadosFrete />}

                    {permissaoCheckout && freteSelecionado && (
                        <DadosPagamento />
                    )}
                    {permissaoCheckout && freteSelecionado && <DadosPedido />}
                    {permissaoCheckout && freteSelecionado && (
                        <CheckoutButton />
                    )}
                </div>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    usuario: state.auth.usuario,
    freteSelecionado: state.carrinho.freteSelecionado,
});

export default connect(mapStateToProps, actions)(CheckoutContainer);
