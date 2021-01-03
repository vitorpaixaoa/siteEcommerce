import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormSimples from '../../../components/Inputs/FormSimples';
import actions from '../../../redux/actions';
import AlertGeral from '../../../components/Alert/Geral';

class FormularioSenha extends Component {

    state={
        senhaAntiga: "",
        novaSenha: "",
        confirmarNovaSenha:"",
        erros: {},
        aviso: null
    };

    handleSubmit(){
        const {token} = this.props;
        if(!token || !this.validate()) return null;
        this.props.updateSenha(this.state, token, (error) => {
            if(error) this.setState({ aviso: { status: fallse, message: error.message }});
            else{
                alert("Senha atualizada com sucesso");
                this.setState({ senhaAntiga: "", novaSenha: "", confirmarNovaSenha: ""});
            }
        })
    }

    validate(){
        const { senhaAntiga, novaSenha, confirmarNovaSenha } = this.state;

        const erros = {};

        if(!senhaAntiga) erros.senhaAntiga = "Preencha aqui com a sua senha atual";
        if(!novaSenha) erros.novaSenha = "Preencha aqui com a sua nova senha";
        if(!confirmarNovaSenha) erros.confirmarNovaSenha = "Confirme aqui com a sua senha nova senha";
        if( novaSenha !== confirmarNovaSenha) erros.confirmarNovaSenha = "A nova senha e sua confirmação não coincidem";

        this.setState({ erros, aviso: null });
        return (Object.keys(erros).length === 0);
    }

    onChange = (f, v) => this.setState({ [f]: v }, () => this.validate())


    render(){
        const {
            senhaAntiga,
            novaSenha,
            confirmarNovaSenha,erros
        }  = this.state;
        return(
            <div className="flex-4 conteudo-area-cliente">
                <h2>ALTERAR SENHA </h2>   
                <br/>
                <br/><hr/><br/>
                <div className="form-dados">
                        <FormSimples  erro={erros.senhaAntiga} label="Senha atual" value={senhaAntiga} name="senhaAntiga" type="password" placeholder="Senha Antiga" onChange={(e) => this.onChange("senhaAntiga", e.target.value)} />
                        <FormSimples  erro={erros.novaSenha} label ="Nova senha"value={novaSenha} name="novaSenha" type="password" placeholder="Nova Senha" onChange={(e) => this.onChange("novaSenha", e.target.value)} />
                        <FormSimples label="Confirmar nova senha" erro={erros.confirmarNovaSenha} value={confirmarNovaSenha} name="confirmarNovaSenha" type="password" placeholder="Confirmar Nova Senha" onChange={(e) => this.onChange("confirmarNovaSenha", e.target.value)} />
                    </div>
                    <AlertGeral aviso={this.state.aviso} />
                    <br/>
                    <div className="flex flex-start">
                        <button className="btn btn-primary"
                        onClick={() => this.handleSubmit()}>SALVAR</button>
                    </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    token: state.auth.token,
    cliente: state.cliente.cliente
})

export default connect(mapStateToProps, actions)(FormularioSenha);