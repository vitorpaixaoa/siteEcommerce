import React, {Component} from "react";
import {connect} from "react-redux";
import FormInput from "../../components/Inputs/FormSimples";
import actions from "../../redux/actions";
import AlertGeral from "../../components/Alert/Geral";
import FormSimples from "../../components/Inputs/FormSimples";
import {CenterBox, Button} from "../../pages/styles/Components/Components";

class ClienteLogin extends Component {
    state = {
        email: "",
        senha: "",
        aviso: null,
        erros: {},
    };

    renderAvisoRegistro() {
        return (
            <div className="flex-1">
                <h2>Comprar como visitante / Realizar registro</h2>
                <br />
                <Button background="#FF2A6D" padding="8px 16px" width="" onClick={() => this.props.permitir()}>Continuar</Button>
            </div>
        );
    }

    validate() {
        const {email, senha} = this.state;
        const erros = {};

        if (!email) erros.email = "Preencha aqui com seu email";
        if (!senha) erros.senha = "Preencha aqui com sua senha";

        this.setState({erros, aviso: null});
        return !(Object.keys(erros).length > 0);
    }

    onChange = (field, e) => this.setState({[field]: e.target.value});

    handleSubmit() {
        if (!this.validate()) return null;
        const {email, senha} = this.state;
        this.props.autenticar({email, password: senha}, false, (error) => {
            if (error)
                this.setState({aviso: {status: false, message: error.message}});
        });
    }

    renderFormularioLogin() {
        const {email, senha, erros} = this.state;
        return (
            <>
                <h2>Fazer Login</h2>
                <AlertGeral aviso={this.state.aviso} />
                <br />
                <FormSimples
                    borderRadius="8px 8px 0 0"
                    value={email}
                    erro={erros.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => this.onChange("email", e)}
                />

                <FormSimples
                    borderRadius="0 0 8px 8px"
                    value={senha}
                    name="Senha"
                    erro={erros.senha}
                    type="password"
                    onChange={(e) => this.onChange("senha", e)}
                    placeholder="Senha"
                />
                <br />
                <CenterBox>
                    <Button background="#FF2A6D" width="" onClick={() => this.handleSubmit()}>Entrar</Button>
                </CenterBox>
            </>
        );
    }

    render() {
        return (
            <div className="Cliente-Login flex horizontal">
                {this.renderAvisoRegistro()}
                {this.renderFormularioLogin()}
            </div>
        );
    }
}

export default connect(null, actions)(ClienteLogin);
