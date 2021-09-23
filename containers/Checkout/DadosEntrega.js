import React, {Component} from "react";
import FormSimples from "../../components/Inputs/FormSimples";

import {connect} from "react-redux";
import actions from "../../redux/actions";
import axios from "axios";

import {ESTADOS} from "../../utils";
import {formatNumber, formatCEP} from "../../utils/format";
import {
    CenterBox,
    Container,
    HorizontalBox,
    Select,
} from "../../pages/styles/Components/Components";
import {Form} from "../../components/Inputs/styles";
import { Title } from "../Carrinho/styles";

class DadosEntregaContainer extends Component {
    state = {
        erros: {dadosCobranca: {}},
    };

    componentDidMount() {
        this.fetchCliente();
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.cliente && this.props.cliente) this.fetchCliente();
    }

    validate() {
        const {
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP,
            dadosCobranca,
            dadosEntregaIgualCobranca,
        } = this.props.form;
        const erros = {dadosCobranca: {}};

        if (!local) erros.local = "* Campo obrigatório";
        if (!numero) erros.numero = "* Campo obrigatório";
        if (!bairro) erros.bairro = "* Campo obrigatório";
        if (!cidade) erros.cidade = "* Campo obrigatório";
        if (!estado) erros.estado = "* Campo obrigatório";
        if (!CEP || CEP.length !== 9) erros.CEP = "* Campo obrigatório";

        if (!dadosEntregaIgualCobranca) {
            if (!dadosCobranca.local)
                erros.dadosCobranca.local = "* Campo obrigatório";
            if (!dadosCobranca.numero)
                erros.dadosCobranca.numero = "* Campo obrigatório";
            if (!dadosCobranca.bairro)
                erros.dadosCobranca.bairro = "* Campo obrigatório";
            if (!dadosCobranca.complemento)
                erros.dadosCobranca.complemento =
                    "* Campo obrigatório";
            if (!dadosCobranca.cidade)
                erros.dadosCobranca.cidade = "* Campo obrigatório";
            if (!dadosCobranca.estado)
                erros.dadosCobranca.estado = "* Campo obrigatório";
            if (!dadosCobranca.CEP || CEP.length !== 9)
                erros.dadosCobranca.CEP = "* Campo obrigatório";
        }

        this.setState({erros});
        return (
            Object.keys(erros).length === 1 &&
            Object.keys(erros.dadosCobranca).length === 0
        );
    }

    onChange = (field, value, prefix) =>
        this.props
            .setForm({[field]: value}, prefix)
            .then(() => this.validate());

    onChangeCEP = (field, value, prefix) => {
        this.props.setForm({[field]: value}, prefix).then(() => {
            this.validate();
            if (value.length === 9) {
                axios
                    .get(
                        `https://viacep.com.br/ws/${value.replace(
                            "-",
                            ""
                        )}/json/unicode`
                    )
                    .then((response) => {
                        this.props
                            .setForm(
                                {
                                    local: response.data["logradouro"],
                                    bairro: response.data["bairro"],
                                    cidade: response.data["localidade"],
                                    estado: response.data["uf"],
                                },
                                prefix
                            )
                            .then(() => this.validate());
                    })
                    .catch((e) => console.log(e));
            }
        });
    };

    fetchCliente() {
        const {cliente} = this.props;
        this.props.setForm({
            dadosEntregaIgualCobranca: true,
            local: cliente ? cliente.endereco.local : "",
            numero: cliente ? cliente.endereco.numero : "",
            bairro: cliente ? cliente.endereco.bairro : "",
            complemento: cliente ? cliente.endereco.complemento : "",
            cidade: cliente ? cliente.endereco.cidade : "",
            estado: cliente ? cliente.endereco.estado : "",
            CEP: cliente ? cliente.endereco.CEP : "",
            dadosCobranca: {
                local: cliente ? cliente.endereco.local : "",
                numero: cliente ? cliente.endereco.numero : "",
                bairro: cliente ? cliente.endereco.bairro : "",
                complemento: cliente ? cliente.endereco.complemento : "",
                cidade: cliente ? cliente.endereco.cidade : "",
                estado: cliente ? cliente.endereco.estado : "",
                CEP: cliente ? cliente.endereco.CEP : "",
            },
        });
    }

    renderDadosEntrega() {
        if (!this.props.form) return null;
        const {
            dadosEntregaIgualCobranca,
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP,
        } = this.props.form;
        const {erros} = this.state;
        return (
            <Container maxWidth="768px" margin="24px 0" flexDirection="column" alignItems="center">
                <Container margin="24px 0" flexDirection="column" alignItems="center">
                    <Title>Dados de Entrega</Title>
                </Container>
                <FormSimples
                    borderRadius="8px 8px 0 0"
                    width="100%"
                    name={"CEP"}
                    value={CEP || ""}
                    erro={erros.CEP}
                    placeholder="12345-678"
                    onChange={(e) =>
                        this.onChangeCEP("CEP", formatCEP(e.target.value))
                    }
                />
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"local"}
                        value={local || ""}
                        erro={erros.local}
                        placeholder="Endereço (Rua, Avenida,...)"
                        onChange={(e) => this.onChange("local", e.target.value)}
                    />
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"numero"}
                        value={numero || ""}
                        erro={erros.numero}
                        placeholder="123"
                        onChange={(e) =>
                            this.onChange(
                                "numero",
                                formatNumber(e.target.value)
                            )
                        }
                    />
                </HorizontalBox>
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"bairro"}
                        value={bairro || ""}
                        erro={erros.bairro}
                        placeholder="Bairro"
                        onChange={(e) =>
                            this.onChange("bairro", e.target.value)
                        }
                    />
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"complemento"}
                        value={complemento || ""}
                        erro={erros.complemento}
                        placeholder="Complemento"
                        onChange={(e) =>
                            this.onChange("complemento", e.target.value)
                        }
                    />
                </HorizontalBox>
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="0 0 0 8px"
                        name={"cidade"}
                        value={cidade || ""}
                        erro={erros.cidade}
                        placeholder="Cidade"
                        onChange={(e) =>
                            this.onChange("cidade", e.target.value)
                        }
                    />

                    <Form>
                        <Select
                            borderRadius="0 0 8px 0"
                            value={estado || ""}
                            onChange={(e) =>
                                this.onChange("estado", e.target.value)
                            }
                        >
                            <option>Selecione...</option>
                            {Object.keys(ESTADOS).map((abbr) => (
                                <option key={abbr} value={abbr}>
                                    {ESTADOS[abbr]}
                                </option>
                            ))}
                        </Select>
                        {erros.estado && (
                            <small style={{color: "red"}}>{erros.estado}</small>
                        )}
                    </Form>
                </HorizontalBox>
                <br />
                <div>
                    <input
                        checked={dadosEntregaIgualCobranca}
                        type="checkbox"
                        onChange={(e) =>
                            this.props.setForm({
                                dadosEntregaIgualCobranca:
                                    !dadosEntregaIgualCobranca,
                            })
                        }
                    />
                    <label>
                        &nbsp;Os dados de entrega são iguais aos de cobrança.
                    </label>
                </div>
            </Container>
        );
    }

    renderDadosCobranca() {
        if (!this.props.form || !this.props.form.dadosCobranca) return null;
        const {local, numero, bairro, complemento, cidade, estado, CEP} =
            this.props.form.dadosCobranca;
        const {erros} = this.state;
        return (
            <Container maxWidth="768px" margin="24px 0" flexDirection="column" alignItems="center">
                <CenterBox>
                    <Title>Dados de Cobrança</Title>
                </CenterBox>
                <FormSimples
                    width="100%"
                    borderRadius="8px 8px 0 0"
                    name={"CEP"}
                    value={CEP || ""}
                    erro={erros.dadosCobranca.CEP}
                    placeholder="12345-678"
                    onChange={(e) =>
                        this.onChangeCEP(
                            "CEP",
                            formatCEP(e.target.value),
                            "dadosCobranca"
                        )
                    }
                />
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"local"}
                        value={local || ""}
                        erro={erros.dadosCobranca.local}
                        placeholder="Endereço (Rua, Avenida,...)"
                        onChange={(e) =>
                            this.onChange(
                                "local",
                                e.target.value,
                                "dadosCobranca"
                            )
                        }
                    />
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"numero"}
                        value={numero || ""}
                        erro={erros.dadosCobranca.numero}
                        placeholder="123"
                        onChange={(e) =>
                            this.onChange(
                                "numero",
                                formatNumber(e.target.value),
                                "dadosCobranca"
                            )
                        }
                    />
                </HorizontalBox>
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"bairro"}
                        value={bairro || ""}
                        erro={erros.dadosCobranca.bairro}
                        placeholder="Bairro"
                        onChange={(e) =>
                            this.onChange(
                                "bairro",
                                e.target.value,
                                "dadosCobranca"
                            )
                        }
                    />
                    <FormSimples
                        width="100%"
                        borderRadius="0"
                        name={"complemento"}
                        value={complemento || ""}
                        erro={erros.dadosCobranca.complemento}
                        placeholder="Complemento"
                        onChange={(e) =>
                            this.onChange(
                                "complemento",
                                e.target.value,
                                "dadosCobranca"
                            )
                        }
                    />
                </HorizontalBox>
                <HorizontalBox width="100%">
                    <FormSimples
                        width="100%"
                        borderRadius="8px 0 0 8px"
                        name={"cidade"}
                        value={cidade || ""}
                        erro={erros.dadosCobranca.cidade}
                        placeholder="Cidade"
                        onChange={(e) =>
                            this.onChange(
                                "cidade",
                                e.target.value,
                                "dadosCobranca"
                            )
                        }
                    />
                    <Form>
                        <Select
                            borderRadius="0 8px 8px 0"
                            value={estado || ""}
                            onChange={(e) =>
                                this.onChange(
                                    "estado",
                                    e.target.value,
                                    "dadosCobranca"
                                )
                            }
                        >
                            <option>Selecione...</option>
                            {Object.keys(ESTADOS).map((abbr) => (
                                <option key={abbr} value={abbr}>
                                    {ESTADOS[abbr]}
                                </option>
                            ))}
                        </Select>
                        {erros.dadosCobranca.estado && (
                            <small className="erro">
                                {erros.dadosCobranca.estado}
                            </small>
                        )}
                    </Form>
                </HorizontalBox>
            </Container>
        );
    }

    render() {
        const {dadosEntregaIgualCobranca} = this.props.form;

        return (
            <Container flexDirection="column" alignItems="center" >
                {this.renderDadosEntrega()}
                {!dadosEntregaIgualCobranca && this.renderDadosCobranca()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente,
    form: state.checkout.form,
});

export default connect(mapStateToProps, actions)(DadosEntregaContainer);
