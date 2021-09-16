import React, {Component} from "react";
import {connect} from "react-redux";
import actions from "../../redux/actions";
import {getCart} from "../../utils/cart";
import {formatMoney, codigosCorreios} from "../../utils";
import {formatCEP} from "../../utils/format";
import {
    Button,
    HorizontalBox,
    Select,
} from "../../pages/styles/Components/Components";
import FormSimples from "../Inputs/FormSimples";
import {Container, FreteOptions, ValueBox} from "./styles";

class Frete extends Component {
    constructor(props) {
        super();
        this.state = {
            cep: props.cep || "",
        };
    }

    componentDidUpdate(prevProps) {
        if (
            !prevProps.fretes &&
            this.props.fretes &&
            !this.props.freteSelecionado
        ) {
            this.props.selecionarFrete(this.props.fretes[0]);
        }
    }

    onChangeCEP = (e) => {
        this.setState({cep: formatCEP(e.target.value)});
    };

    calcularFrete() {
        const {cep} = this.state;
        if (!cep || cep.length !== 9)
            return alert("Digite o CEP corretamente.");
        this.props.calcularFrete(cep, getCart());
    }

    renderFormularioCEP() {
        return (
            <HorizontalBox width="100%" justifyContent="space-between">
                <div className="flex-4">
                    <FormSimples
                        value={this.state.cep}
                        name="CEP"
                        className="campo-frete"
                        onChange={this.onChangeCEP}
                    />
                </div>
                <div className="flex-1">
                    <Button
                        background="transparent"
                        padding="0 24px"
                        margin="12px 0"
                        width=""
                        color="#0070c9"
                        onClick={() => this.calcularFrete()}
                    >
                        Calcular frete
                    </Button>
                </div>
            </HorizontalBox>
        );
    }

    renderOpcaoSelecionada() {
        const {freteSelecionado, cleanFretes} = this.props;
        if (!freteSelecionado || !freteSelecionado.Valor) return null;
        return (
            <ValueBox>
                <h4 className="valor-frete">
                    {formatMoney(freteSelecionado.Valor.replace(",", "."))}
                </h4>
                <Button
                    padding="0"
                    margin="0"
                    background="transparent"
                    color="#0070c9"
                    onClick={() => cleanFretes()}
                    className="limpar-CEP"
                >
                    Limpar CEP
                </Button>
            </ValueBox>
        );
    }

    selectFrete(codigo, fretes) {
        const frete = fretes.reduce(
            (all, frete) => (frete.Codigo.toString() === codigo ? frete : all),
            {}
        );
        this.props.selecionarFrete(frete);
    }

    renderOpcoesFrete() {
        const {fretes, freteSelecionado} = this.props;
        if (!fretes || !freteSelecionado) return null;
        return (
            <FreteOptions>
                <Select
                    value={freteSelecionado.Codigo}
                    onChange={(e) => this.selectFrete(e.target.value, fretes)}
                >
                    {fretes.map((frete, index) => (
                        <option value={frete.Codigo} key={frete.Codigo}>
                            {codigosCorreios[frete.Codigo]} &nbsp; (
                            {frete.PrazoEntrega} dias úteis) -{" "}
                            {formatMoney(frete.Valor.replace(",", "."))}
                        </option>
                    ))}
                </Select>
            </FreteOptions>
        );
    }

    render() {
        return (
            <Container justifyContent="space-between" margin="16px 0">
                {this.props.freteSelecionado ? (
                    <>
                        <div className="flex-1 flex vertical">
                            {this.props.freteSelecionado &&
                                this.renderOpcoesFrete()}
                        </div>
                        <div className="flex-1 flex flex-right">
                            {this.renderOpcaoSelecionada()}
                        </div>
                    </>
                ) : (
                    this.renderFormularioCEP()
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    carrinho: state.carrinho.carrinho,
    freteSelecionado: state.carrinho.freteSelecionado,
    fretes: state.carrinho.fretes,
    cep: state.carrinho.cep,
});

export default connect(mapStateToProps, actions)(Frete);
