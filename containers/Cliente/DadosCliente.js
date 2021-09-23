import React, {Component} from "react";
import {connect} from "react-redux";
import FormSimples from "../../components/Inputs/FormSimples";
import actions from "../../redux/actions";
import moment from "moment";
import {validateCPF} from "../../utils/validate";
import {
    formatDataDeNascimento,
    formatTelefone,
    formatCPF,
} from "../../utils/format";
import {
    Container,
    HorizontalBox,
} from "../../pages/styles/Components/Components";

class DadosClienteContainer extends Component {
    state = {
        erros: {},
    };

    componentDidMount() {
        this.props.setForm({
            email: "",
            senha: "",
            nome: this.props.cliente ? this.props.cliente.nome : "",
            CPF: this.props.cliente ? this.props.cliente.cpf : "",
            telefone:
                this.props.cliente && this.props.cliente.telefones
                    ? this.props.cliente.telefones[0]
                    : "",
            dataDeNascimento: this.props.cliente
                ? moment(this.props.cliente.dataDeNascimento).format(
                      "DD/MM/YYYY"
                  )
                : "",
        });
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.cliente && this.props.cliente) {
            const {nome, cpf, telefones, dataDeNascimento} = this.props.cliente;
            this.props.setForm({
                nome,
                CPF: cpf,
                telefone: telefones[0],
                dataDeNascimento: moment(dataDeNascimento).format("DD/MM/YYYY"),
            });
        }
    }

    onChange = (field, e, value) => {
        this.props
            .setForm({[field]: value || e.target.value}, null)
            .then(() => this.validate());
    };

    validate() {
        const {email, senha, nome, CPF, dataDeNascimento, telefone} =
            this.props.form;
        const {usuario} = this.props;
        const erros = {};

        if (!usuario && !email) erros.email = "* Campo obrigatório";
        if (!usuario && !senha) erros.senha = "* Campo obrigatório";

        if (!nome) erros.nome = "* Campo obrigatório";
        if (!CPF || CPF.length !== 14) erros.CPF = "* Campo obrigatório";
        if (CPF && CPF.length === 14 && !validateCPF(CPF))
            erros.CPF = "* CPF inválido";
        if (!dataDeNascimento || dataDeNascimento.length !== 10)
            erros.dataDeNascimento = "* Campo obrigatório";
        if (!telefone || telefone.length < 11)
            erros.telefone = "* Campo obrigatório";

        this.setState({erros});
        return !(Object.keys(erros).length > 0);
    }

    renderDadosRegistro() {
        const {email, senha} = this.props.form;
        const {erros} = this.state;
        return (
            <Container flexDirection="column" alignItems="center">
                <FormSimples
                    borderRadius="8px 8px 0 0"
                    width="100%"
                    name={"email"}
                    value={email}
                    erro={erros.email}
                    placeholder="E-Mail"
                    onChange={(e) => this.onChange("email", e)}
                />
                <FormSimples
                    borderRadius="0"
                    width="100%"
                    name={"senha"}
                    type="password"
                    value={senha}
                    erro={erros.senha}
                    placeholder="Senha"
                    onChange={(e) => this.onChange("senha", e)}
                />
            </Container>
        );
    }

    renderDadosUsuario() {
        const {nome, CPF, dataDeNascimento, telefone} = this.props.form;
        const {erros} = this.state;
        return (
            <Container
                margin="24px 0"
                flexDirection="column"
                alignItems="center"
            >
                <FormSimples
                    borderRadius="8px 8px 0 0"
                    width="100%"
                    name={"nome"}
                    value={nome || ""}
                    erro={erros.nome}
                    placeholder="Nome"
                    onChange={(e) => this.onChange("nome", e)}
                />
                <FormSimples
                    borderRadius="0"
                    width="100%"
                    name={"CPF"}
                    value={CPF || ""}
                    erro={erros.CPF}
                    placeholder="CPF"
                    onChange={(e) =>
                        this.onChange("CPF", e, formatCPF(e.target.value))
                    }
                />
                <HorizontalBox maxWidth="512px">
                    <FormSimples
                        borderRadius="0 0 0 8px"
                        width="100%"
                        name={"dataDeNascimento"}
                        value={dataDeNascimento || ""}
                        erro={erros.dataDeNascimento}
                        placeholder="DD/MM/AAAA"
                        onChange={(e) =>
                            this.onChange(
                                "dataDeNascimento",
                                e,
                                formatDataDeNascimento(e.target.value)
                            )
                        }
                    />
                    <FormSimples
                        borderRadius="0 0 8px 0"
                        width="100%"
                        name={"telefone"}
                        value={telefone || ""}
                        erro={erros.telefone}
                        placeholder="(34) 1234-5678"
                        onChange={(e) =>
                            this.onChange(
                                "telefone",
                                e,
                                formatTelefone(e.target.value)
                            )
                        }
                    />
                </HorizontalBox>
            </Container>
        );
    }

    render() {
        return (
            <Container
                margin="16px 0"
                alignItems="center"
                flexDirection="column"
            >
                <div>
                    <h2>Dados do Cliente</h2>
                </div>
                {!this.props.usuario && this.renderDadosRegistro()}
                {this.renderDadosUsuario()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    usuario: state.auth.usuario,
    token: state.auth.token,
    cliente: state.cliente.cliente,
    form: state.checkout.form,
});

export default connect(mapStateToProps, actions)(DadosClienteContainer);
