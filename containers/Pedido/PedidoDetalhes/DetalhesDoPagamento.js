import React, { Component } from 'react';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS  = [
    { data: "20/12/2020", situacao: "Pagamento em processamento"},
    { data: "20/12/2020", situacao: "Pagamento Aprovado"},
    { data: "21/12/2020", situacao: "Pagamento Recebido"}
]
 

class DetalhesDaPagamento extends Component {
    render(){
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Pagamento">
                    <h4>Sobre a Pagamento</h4>
                    <br/>
                    <ListaStatus registros={REGISTROS} />
                </div>
            </div>
        )
    }
}
export default DetalhesDaPagamento;