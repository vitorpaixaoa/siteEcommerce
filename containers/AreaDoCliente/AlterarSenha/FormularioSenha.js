import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';

class FormularioSenha extends Component {

    state={
        senhaAntiga: "",
        novaSenha: "",
        confirmarNovaSenha:""
    };

    render(){
        const {
            senhaAntiga,
            novaSenha,
            confirmarNovaSenha
        }  = this.state;
        return(
            <div className="flex-4 conteudo-area-cliente">
                <h2>ALTERAR SENHA </h2>   
                <br/>
                <br/><hr/><br/>
                <div className="form-dados">
                        <FormSimples value={senhaAntiga} name="senhaAntiga" type="password" placeholder="Senha Antiga" />
                        <FormSimples value={novaSenha} name="novaSenha" type="password" placeholder="Nova Senha" />
                        <FormSimples value={confirmarNovaSenha} name="confirmarNovaSenha" type="password" placeholder="Confirmar Nova Senha" />
                    </div>
                    <br/>
                    <div className="flex flex-start">
                        <button className="btn btn-primary">SALVAR</button>
                    </div> 
            </div>
        )
    }
}
export default FormularioSenha;