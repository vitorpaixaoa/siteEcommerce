import React, {Component} from "react";
import {connect} from "react-redux";
import AlertGeral from "../../../components/Alert/Geral";
import FormSimples from "../../../components/Inputs/FormSimples";
import actions from "../../../redux/actions";
import {ESTADOS} from "../../../utils";
import {
    formatCEP,
    formatCPF,
    formatDataDeNascimento,
    formatNumber,
    formatTelefone,
} from "../../../utils/format";
import {validateCPF} from "../../../utils/validate";
import axios from "axios";
import {Button, FormBox, LinkAcesso, Subtitle, Title} from "./styles";
import {ErrorMessage, Form} from "../../../components/Inputs/styles";
import {
    Select,
    CenterBox,
    HorizontalBox,
} from "../../../pages/styles/Components/Components";

class CadastroContainer extends Component {
    state = {
        aviso: null,
        erros: {},
        email: "",
        senha: "",

        nome: "",
        CPF: "",
        telefone: "",
        dataDeNascimento: "",

        local: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        CEP: "",
    };

    handleSubmit() {
        if (!this.validate()) return null;
        this.props.newCliente(this.state, (error) => {
            if (error)
                this.setState({aviso: {status: false, message: error.message}});
        });
    }

    validate() {
        const {
            email,
            senha,
            nome,
            CPF,
            dataDeNascimento,
            telefone,
            local,
            numero,
            bairro,
            cidade,
            estado,
            CEP,
        } = this.state;

        const erros = {};

        if (!email) erros.email = "* Campo obrigatório";
        if (!senha) erros.senha = "* Campo obrigatório";

        if (!nome) erros.nome = "* Campo obrigatório";
        if (!CPF || CPF.length !== 14) erros.CPF = "* Campo obrigatório";
        if (CPF && CPF.length === 14 && !validateCPF(CPF))
            erros.CPF = "* Campo obrigatório";
        if (!dataDeNascimento || dataDeNascimento.length !== 10)
            erros.dataDeNascimento = "* Campo obrigatório";
        if (!telefone || telefone.length < 11)
            erros.telefone = "* Campo obrigatório";

        if (!local) erros.local = "* Campo obrigatório";
        if (!numero) erros.numero = "* Campo obrigatório";
        if (!bairro) erros.bairro = "* Campo obrigatório";
        if (!cidade) erros.cidade = "* Campo obrigatório";
        if (!estado) erros.estado = "* Campo obrigatório";
        if (!CEP || CEP.length !== 9) erros.CEP = "* Campo obrigatório";

        this.setState({erros, aviso: null});
        return Object.keys(erros).length === 0;
    }

    onChangeCEP = (field, value) => {
        this.setState({[field]: value}, () => this.pegarDadosEndereco());
    };

    pegarDadosEndereco() {
        const {CEP} = this.state;
        this.validate();
        if (CEP.length === 9) {
            axios
                .get(
                    `https://viacep.com.br/ws/${CEP.replace(
                        "-",
                        ""
                    )}/json/unicode`
                )
                .then((response) => {
                    this.setState({
                        local: response.data["logradouro"],
                        bairro: response.data["bairro"],
                        cidade: response.data["localidade"],
                        estado: response.data["uf"],
                    });
                })
                .catch((e) => console.log(e));
        }
        this.validate();
    }

    onChange = (field, value) =>
        this.setState({[field]: value}, () => this.validate());
    render() {
        const {
            email,
            senha,
            nome,
            CPF,
            telefone,
            dataDeNascimento,
            local,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            CEP,
            aviso,
            erros,
        } = this.state;
        return (
            <div className="Cadastro-Container">
                <br />
                <Title>Criar conta</Title>
                <FormBox>
                    <FormSimples
                        borderRadius="8px 8px 0 0"
                        value={email}
                        erro={erros.email}
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => this.onChange("email", e.target.value)}
                    />

                    <FormSimples
                        borderRadius="0px"
                        value={senha}
                        erro={erros.senha}
                        name="Senha"
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => this.onChange("senha", e.target.value)}
                    />

                    <FormSimples
                        borderRadius="0px"
                        value={nome}
                        erro={erros.nome}
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        onChange={(e) => this.onChange("nome", e.target.value)}
                    />

                    <FormSimples
                        borderRadius="0px"
                        value={CPF}
                        erro={erros.CPF}
                        name="CPF"
                        type="text"
                        placeholder="___.___.___-__"
                        onChange={(e) =>
                            this.onChange("CPF", formatCPF(e.target.value))
                        }
                    />

                    <HorizontalBox>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0 0 0 8px"
                                value={telefone}
                                erro={erros.telefone}
                                name="telefone"
                                type="text"
                                placeholder="Telefone"
                                onChange={(e) =>
                                    this.onChange(
                                        "telefone",
                                        formatTelefone(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0 0 8px 0"
                                value={dataDeNascimento}
                                erro={erros.dataDeNascimento}
                                name="dataDeNascimento"
                                type="text"
                                placeholder="__/__/____"
                                onChange={(e) =>
                                    this.onChange(
                                        "dataDeNascimento",
                                        formatDataDeNascimento(e.target.value)
                                    )
                                }
                            />
                        </div>
                    </HorizontalBox>

                    <br />

                    <Subtitle>Endereço</Subtitle>

                    <HorizontalBox>
                        <div className="flex-3">
                            <FormSimples
                                borderRadius="8px 0 0 0"
                                erro={erros.CEP}
                                value={CEP}
                                name="CEP"
                                placeholder="_____-___"
                                onChange={(e) =>
                                    this.onChangeCEP(
                                        "CEP",
                                        formatCEP(e.target.value)
                                    )
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0 8px 0 0"
                                value={numero}
                                name="numero"
                                erro={erros.numero}
                                placeholder="Número"
                                onChange={(e) =>
                                    this.onChange(
                                        "numero",
                                        formatNumber(e.target.value)
                                    )
                                }
                            />
                        </div>
                    </HorizontalBox>

                    <FormSimples
                        borderRadius="0px"
                        value={local}
                        name="local"
                        erro={erros.local}
                        placeholder="Endereço"
                        onChange={(e) => this.onChange("local", e.target.value)}
                    />

                    <HorizontalBox>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0px"
                                value={bairro}
                                name="bairro"
                                erro={erros.bairro}
                                placeholder="Bairro"
                                onChange={(e) =>
                                    this.onChange("bairro", e.target.value)
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0px"
                                value={complemento}
                                name="complemento"
                                erro={erros.complemento}
                                placeholder="Complemento"
                                onChange={(e) =>
                                    this.onChange("complemento", e.target.value)
                                }
                            />
                        </div>
                    </HorizontalBox>

                    <HorizontalBox>
                        <div className="flex-1">
                            <FormSimples
                                borderRadius="0 0 0 8px"
                                value={cidade}
                                name="cidade"
                                erro={erros.cidade}
                                placeholder="Cidade"
                                onChange={(e) =>
                                    this.onChange("cidade", e.target.value)
                                }
                            />
                        </div>

                        <div className="flex-1">
                            <Form>
                                <Select
                                    borderRadius="0 0 8px 0"
                                    name="estado"
                                    value={estado || ""}
                                    onChange={(e) =>
                                        this.onChange("estado", e.target.value)
                                    }
                                >
                                    <option>Selecione seu estado</option>
                                    {Object.keys(ESTADOS).map((abbr) => (
                                        <option key={abbr} value={abbr}>
                                            {ESTADOS[abbr]}
                                        </option>
                                    ))}
                                </Select>
                                {erros.estado && (
                                    <ErrorMessage>{erros.estado}</ErrorMessage>
                                )}
                            </Form>
                        </div>
                    </HorizontalBox>

                    <br />
                    <AlertGeral aviso={aviso} />
                    <CenterBox>
                        <Button onClick={() => this.handleSubmit()}>
                            Cadastrar
                        </Button>
                    </CenterBox>
                    <LinkAcesso>
                        <span onClick={this.props.changeAcesso}>
                            Já tem uma conta?{" "}
                            <span className="click-text">
                                Clique aqui para entrar.
                            </span>
                        </span>
                    </LinkAcesso>
                </FormBox>
            </div>
        );
    }
}
export default connect(null, actions)(CadastroContainer);
